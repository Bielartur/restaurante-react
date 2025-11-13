import axios from "axios";
import { getAccessToken } from "./HelpersToken";

const BASE_URL = "http://localhost:8000/";

/**
 * Faz uma requisição para a API.
 * @param {string} endpoint - Caminho relativo, ex: "usuarios/".
 * @param {'GET'|'POST'|'PUT'|'DELETE'} [method='GET'] - Método HTTP.
 * @param {object} [data] - Corpo ou parâmetros da requisição.
 * @param {boolean} [withAuth=true] - Se deve enviar o token JWT.
 * @returns {Promise<{ data?: any, error: string }>}
 */

export async function apiRequest(endpoint, method = "GET", data = {}, withAuth = true) {
  const access_token = getAccessToken();

  const headers = {};
  if (withAuth && access_token) {
    headers["Authorization"] = `Bearer ${access_token}`;
  }

  try {
    const response = await axios(`${BASE_URL}/${endpoint}`, {
      method,
      data: method !== "GET" ? data : undefined,
      params: method === "GET" ? data : undefined,
      headers,
    });

    return {
      data: response.data,
      error: "",
    };
  } catch (e) {
    const errorResponse = e.response.statusText || e.error || e.response.error  || "Erro desconhecido";
    return {
      data: null,
      error: errorResponse,
    };
  }
}
