import axios from "axios";

export default { 
fetchData: function() {
    return axios.get('https://canvasjs.com/data/gallery/react/nifty-stock-price.json');
    },
}
