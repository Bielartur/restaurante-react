// src/routes/PrivateRoute.jsx
import { Navigate, Outlet, useLocation } from "react-router";
import { useUser } from "../hooks/useUser";
import { Loading } from "../components/ui/Loading";

export function PrivateRoute() {
  const { isLogged, loading } = useUser();
  const location = useLocation();

  if (loading) {
    return <Loading />; // ou um spinner bonitinho
  }

  // Se não estiver logado, manda para o login
    if (!isLogged) {
    return (
      <Navigate
        to="/login"
        replace
        state={{ from: location }} // guarda pra onde o cara queria ir
      />
    );
  }

  // Se estiver logado, renderiza a rota normalmente
  return <Outlet />;
}
