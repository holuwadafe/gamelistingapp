import axios from "axios";

const key ="f9c1710f6e4f47ef8a21116e39a4ac46";
const axiosCreate=axios.create({
    baseURL: 'https://api.rawg.io/api'
})

const getGenreList=axiosCreate.get('/genres?key='+key);
const getAllGames=axiosCreate.get('/games?+key='+key);
export default{
    getGenreList,
    getAllGames
}