import axios from "axios";
import { api } from "../../utilities/configg";
export const getFilterSports = async (category) => {
    let queryString = '';
    if (category?.length > 0) {
        queryString += category.map(tag => `category=${tag}`).join("&");
    }
    
    // if (search !== '') {
    //     queryString += `&q=${search}`;
    // }
    const response = await axios.get(`${api}/get/all/sports/?${queryString}`);
    return response.data;
}