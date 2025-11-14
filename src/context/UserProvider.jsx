// src/context/UserContext.jsx
import { useEffect, useState } from "react";
import { useRequests } from "../utils/requests" // onde estão login/cadastrar/atualizar_token/getUser
import { UserContext } from "./UserContext";
import { clearAccessToken, getAccessToken, setAccessToken } from "../utils/HelpersToken";


export function UserProvider({ children }) {
  const { login, cadastrar, atualizar_token, getUser } = useRequests();

  const [isLogged, setIsLogged] = useState(false);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [carrinho, setCarrinho] = useState([])
  const [produtos, setProdutos] = useState([])

  // inicializa usuário se já houver token salvo
  useEffect(() => {
    handleInitUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleInitUser() {
    const token = getAccessToken();
    if (!token) {
      setLoading(false);
      return;
    }

    const resp = await getUser();
    if (!resp.error) {
      // espera-se { user, ... } – ajuste se sua API retornar outra estrutura
      setUserData(resp.data?.usuario ?? resp.data);
      setIsLogged(true);
    } else {
      clearAccessToken();
      setIsLogged(false);
      setUserData(null);
    }
    setLoading(false);
  }

  // LOGIN
  async function handleSignIn(email, password) {
    const resp = await login({ email, password });
    if (!resp.error) {
      // tente pegar o token como 'access' ou 'token'
      const access =
        resp.data?.token;
      if (access) setAccessToken(access);

      setUserData(resp.data?.usuario ?? resp.data);
      setIsLogged(true);
    }
    
    return resp; // mantém o padrão { data, error }
  }

  // CADASTRAR
  async function handleCadastrar(payload) {
    // { first_name, last_name, email, password, password_confirm }
    const resp = await cadastrar(payload);
    // algumas APIs já devolvem access token no cadastro; trate se existir
    if (!resp.error) {
      const access =
        resp.data?.token ?? resp.data?.access_token;
      if (access) setAccessToken(access);

      // se não devolver user, deixe para o init ou chame getUser
      if (resp.data?.usuario) setUserData(resp.data.usuario);
      setIsLogged(!!access || !!resp.data?.usuario);
    }
    return resp;
  }

  // ATUALIZAR TOKEN (sliding/refresh)
  async function handleAtualizarToken() {
    const tokenAtual = getAccessToken();
    if (!tokenAtual) return { data: null, error: "Sem token" };

    const resp = await atualizar_token(tokenAtual);
    if (!resp.error) {
      const novo =
        resp.data?.access ?? resp.data?.token ?? resp.data?.access_token;
      if (novo) setAccessToken(novo);
    } else {
      // refresh falhou: derruba sessão
      handleLogOut();
    }
    return resp;
  }

  function handleLogOut() {
    clearAccessToken();
    setIsLogged(false);
    setUserData(null);
  }

  return (
    <UserContext.Provider
      value={{
        isLogged,
        setIsLogged,      // mantém seu shape original
        userData,
        setUserData,      // idem
        loading,
        carrinho,
        setCarrinho,
        produtos,
        setProdutos,

        // ações de auth usando os MESMOS nomes/funções
        handleInitUser,
        handleSignIn,
        handleCadastrar,
        handleAtualizarToken,
        handleLogOut,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}