import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL;

console.log("API_BASE is:", baseURL);



export const registerForGame = (slug , data) => {
   return axios.post(`${baseURL}/${slug}/register` , data )
}

export const getStatsForGame = async (slug) => {
  return axios.get(`${baseURL}/${slug}/stats`);
}

export const getAdminDashboard = () => {
  return axios.get(`${baseURL}/dashboard/admin`);
}
  

    
export const getGameDashboard = (slug) =>{
  return axios.get(`${baseURL}/dashboard/admin/${slug}`);
}
  
