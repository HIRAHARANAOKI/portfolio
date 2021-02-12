import {foodsIndex} from "../urls";
import axios from "axios";

export const fetchFoods = async(restaurantId) => {
    return await axios.get(foodsIndex(restaurantId))
        .then(res => {
            return res.data
        })
        .catch(e => console.error(e))
}
