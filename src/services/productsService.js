import axios from "axios";

export async function getProductData(date) {

    try {
        const res = await axios.get("../../data/data.json");

        return res.data;
    } catch (err) {
        console.error(err);
        const errors = err.response.data.errors;
        return {
            type: 'getProductsFailed',
            errs: errors
        };
    }

}
