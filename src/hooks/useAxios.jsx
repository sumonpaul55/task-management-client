import axios from 'axios';

// const url = `http://localhost:5000`
const url = `https://task-management-server-gold.vercel.app`

const axiosPublic = axios.create({
    baseURL: url,
})
const useAxios = () => {
    return axiosPublic;
};

export default useAxios;



