import axios from 'axios';

const url = `http://localhost:5000`

const axiosPublic = axios.create({
    baseURL: url,
})
const useAxios = () => {
    return axiosPublic;
};

export default useAxios;



