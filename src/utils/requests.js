// src/api/requests.js
import { apiRequest } from "./api";

// Authentication
const login = async ({ email, password }) => {
    const response = await apiRequest("autenticacao/login", "POST", { email, password }, false);
    return response;
};

const cadastrar = async ({ first_name, last_name, email, password, password_confirm }) => {
    const response = await apiRequest("autenticacao/cadastro", "POST", { first_name, last_name, email, password, password_confirm }, false);
    return response;
};

const atualizar_token = async (token) => {
    const response = await apiRequest("autenticacao/login", "POST", { token }, false);
    return response;
};

const getUser = async () => {
    const response = await apiRequest("usuario/perfil");
    return response;
};



// Exportando todas as requests
export const useRequests = () => ({
    // Auth
    login,
    cadastrar,
    atualizar_token,
    getUser,

    // // Groups / Permissions
    // getPermissions,
    // getGroups,
    // getAGroup,
    // addGroup,
    // editGroup,
    // deleteGroup,

    // // Employees
    // getEmployees,
    // getEmployee,
    // addEmployee,
    // editEmployee,
    // deleteEmployee,

    // // Tasks
    // getTasks,
    // getATask,
    // addTask,
    // editTask,
    // deleteTask,
});
