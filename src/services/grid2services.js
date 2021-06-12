import axios from "axios";

const getWeekDetails = (week="CURRENT") => {
    return axios.get(`/${week}`);
};

const GridServices = {
    getWeekDetails
};
export default GridServices;