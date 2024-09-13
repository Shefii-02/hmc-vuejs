import axios from "axios";

const baseURL = 'https://hmc-backend.vercel.app/api/api/v1/resource/';

// Create an instance of Axios
const apiClient = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// API functions
export const fetchBanners = async () => {
  try {
    const response = await apiClient.get('banners');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchDepartments = async () => {
  try {
    const response = await apiClient.get('departments');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchDoctors = async () => {
  try {
    const response = await apiClient.get('doctors');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchServices = async () => {
  try {
    const response = await apiClient.get('services');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchNews = async () => {
  try {
    const response = await apiClient.get('news-events');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchYtVideos = async () => {
  try {
    const response = await apiClient.get('youtube-videos');
    return response.data;
  } catch (error) {
    throw error;
  }
};
