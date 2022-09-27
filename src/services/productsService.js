import axios from "axios";
import { isSameDate } from "./utils/date";


export async function getProductData(date) {
    try {

        const res = await axios.get("../../data/data.json");

        const filteredData = getFilteredData(date, res.data);
        return {
            type: 'getProductsSuccessed',
            data: filteredData
        };

    } catch (err) {
        console.error(err);
        const errors = err.response.data.errors;
        return {
            type: 'getProductsFailed',
            errs: errors
        };
    }

}

function getFilteredData(date, { data }) {
    const filteredProducts = [];
    data.forEach(product => {
        const { excludeDates } = product.times;
        const isExcludeDate = excludeDates.some(currDate => {
            return isSameDate(date, currDate.date);

        });
        if (!isExcludeDate) {
            const { times } = product;
            const isAvailableToSuppley = times.availableDaysOfWeek.some(day => {
                return new Date(date).getDay() + times.makeDays === day;
            });
            if (isAvailableToSuppley) filteredProducts.push(product);
        }
    });
    return filteredProducts;
}
