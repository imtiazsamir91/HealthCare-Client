import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

if (!API_BASE_URL) {
  throw new Error("NEXT_PUBLIC_API_BASE_URL is not defined");
}

export const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export interface ApiResponseOptions {
    params?: Record<string, unknown>;
    headers?: Record<string, string>;
}

const httpGet =async (endpoint: string, options?: ApiResponseOptions) => {
    try {
        const response = await axiosInstance.get(endpoint, {
            params: options?.params,
            headers: options?.headers,
        });
        return response.data;
    } catch (error) {
        throw new Error(`Error fetching GET request to ${endpoint}: ${error}`);
    }
};

const httpPost = async (endpoint: string, data: unknown, options?: ApiResponseOptions) => {
    try {
        const response = await axiosInstance.post(endpoint, data, {
            params: options?.params,
            headers: options?.headers,
        });
        return response.data;
    } catch (error) {
        throw new Error(`Error fetching POST request to ${endpoint}: ${error}`);
    }
};

const httpPut = async (endpoint: string, data: unknown, options?: ApiResponseOptions) => {
    try {
        const response = await axiosInstance.put(endpoint, data, {
            params: options?.params,
            headers: options?.headers,
        });
        return response.data;
    } catch (error) {
        throw new Error(`Error fetching PUT request to ${endpoint}: ${error}`);
    }
};
const httpPatch = async (endpoint: string, data: unknown, options?: ApiResponseOptions) => {
    try {
        const response = await axiosInstance.patch(endpoint, data, {
            params: options?.params,
            headers: options?.headers,
        });
        return response.data;
    } catch (error) {        throw new Error(`Error fetching PATCH request to ${endpoint}: ${error}`);
    }   
        }    
const httpDelete = async (endpoint: string, options?: ApiResponseOptions) => {
    try {
        const response = await axiosInstance.delete(endpoint, {
            params: options?.params,
            headers: options?.headers,
        });
        return response.data;
    } catch (error) {
        throw new Error(`Error fetching DELETE request to ${endpoint}: ${error}`);
    }
};
export const httpClient = {
  get: httpGet,
  post: httpPost,
  put: httpPut,
  patch: httpPatch,
  delete: httpDelete,
};