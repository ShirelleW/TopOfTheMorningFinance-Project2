import React from 'react';
import { useState, useEffect } from 'react';
import { getDailyChartForSymbol } from '../ApiConnector'
import { CanvasJSChart } from 'canvasjs-react-charts'
import axios from 'axios'

const Chart = () => {

    const [stockData, setStockData] = useState([])
    const [userInput, setUserInput] = useState('')
    const [data, setData] = useState('')
    const apiKey = 'TK0XSDFHM5IETCOP'

    const getValue = (event) => {
        console.log(event.target.value)
        setUserInput(event.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setData(userInput)
        console.log("data" , data)
        // fetchStockData()
    }

    useEffect(() => {
        const fetchStockData = async () => {
            const result = await getDailyChartForSymbol(data)

            // Save the formatted response to stockData state
            setStockData(formatStockData(result.data['Time Series (Daily)']))
        }

        fetchStockData()
    }, [data])

    console.log("state:" , userInput)

    return (
        
        <div>
             <h2>US Stock Market Charts</h2>
             <h4>Stock: {userInput}</h4>
            <form onSubmit={handleSubmit}>
                <label htmlFor='userInput'>Search: </label>
                <input
                    type='text'
                    id='userInput'
                    name='userInput'
                    onChange={getValue}
                />
                <button type='submit'>Display Chart</button>
            </form>

            <CanvasJSChart
                options={{
                    axisY: {
                        minimum: Math.min(...stockData.map(data => data.low)) / 1.1,
                        maximum: Math.max(...stockData.map(data => data.high)) * 1.1,
                        crosshair: {
                            enabled: true,
                            snapToDataPoint: true
                        }
                    },
                    axisX: {
                        crosshair: {
                            enabled: true,
                            snapToDataPoint: true
                        },
                        scaleBreaks: {
                            // style chart
                            spacing: 0,
                            fillOpacity: 0,
                            lineThickness: 0,
                            customBreaks: stockData.reduce((breaks, value, index, array) => {
                                if (index === 0) return breaks
                                // compare data point to previous calendar day to remove gaps in candlesticks for the weekend when the market is closed
                                const currentDataPointUnix = Number(new Date(value.date))
                                const previousDataPointUnix = Number(new Date(array[index - 1].date))

                                const oneDayInMs = 86400000

                                const difference = previousDataPointUnix - currentDataPointUnix

                                return difference === oneDayInMs
                                    ? breaks
                                    : [
                                        ...breaks,
                                        {
                                            startValue: currentDataPointUnix,
                                            endValue: previousDataPointUnix - oneDayInMs
                                        }
                                    ]


                            }, [])
                        }
                    },

                    data: [
                        {
                            type: 'candlestick',
                            dataPoints: stockData.map(stockData => ({
                                x: new Date(stockData.date),
                                y: [
                                    stockData.open,
                                    stockData.high,
                                    stockData.low,
                                    stockData.close
                                ]
                            }))
                        }
                    ]
                }}
            />
        </div>
    )
}

const formatStockData = (stockData) => {
    return Object.entries(stockData).map(entries => {
        //1st entry = object key 
        // second entry = value
        const [date, priceData] = entries

        return {
            date,
            open: Number(priceData['1. open']),
            high: Number(priceData['2. high']),
            low: Number(priceData['3. low']),
            close: Number(priceData['4. close'])
        }
    })
}

export default Chart;
