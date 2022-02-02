import axios from "axios";

const apiKey = 'TK0XSDFHM5IETCOP'
const axiosInstance = axios.create({
    baseURL: 'https://www.alphavantage.co/query'
})

export const getDailyChartForSymbol = (symbol) => {
    // remember to change url symbol upon user request
    return axiosInstance.get('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=tsla&apikey=TK0XSDFHM5IETCOP', {
        params: {
            function: 'TIME_SERIES_DAILY',
            symbol,
            apiKey: 'TK0XSDFHM5IETCOP'
        }
    })
}
