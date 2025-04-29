import axios from "axios";
const API = axios.create({
  baseURL: "http://localhost:8000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

const PublicAPI = axios.create({
  baseURL: "http://localhost:8000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const loginAPI = async (email: string, password: string) => {
  try {
    const response = await PublicAPI.post("/auth/login", {
      email,
      password,
    });
    return response.data;
  } catch (error: any) {
    const message = error.response?.data?.message || "Identifiants incorrectes";
    throw new Error(message);
  }
};

export const getMe = async (token: string) => {
  try {
    const res = await API.get("/user/profile");

    return res.data;
  } catch (error) {
    throw new Error("Token invalide ou expiré");
  }
};

export const getTasksByUser = async () => {
  try {
    const response = await API.get("/tasks");
    return response.data;
  } catch (error) {
    throw new Error("Could not get tasks");
  }
};

export const createTask = async (data: {
  title: string;
  description: string;
  projectId: number;
  deadline: string;
  priority: string;
}) => {
  try {
    const response = await API.post("/tasks", data);
    return response.data;
  } catch (error) {
    console.error("Erreur création tâche:", error);
    throw error;
  }
};

export const getProjectById = async (id: number) => {
  try {
    const response = await API.get(`/projects/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export async function updateTaskStatus(taskId:number,status:string){
  await API.put(`tasks/status/${taskId}`,{status})
}