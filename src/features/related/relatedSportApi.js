import axios from "axios";
import { api } from "../../utilities/configg";


export const getRelatedSports = async ({category,id }) => {
    const response = await axios.get(`${api}/get/all/sports?category=${category}`);
    return response.data;
}