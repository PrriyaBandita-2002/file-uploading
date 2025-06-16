import axios from "axios";

const API_BASE = "http://localhost:8000";

export const uploadFile = async (data) => {
  try {
    const response = await axios.post(`${API_BASE}/upload`, data);
    return response.data;
  } catch (error) {
    console.error("Error uploading file:", error);
    throw error;
  }
};
