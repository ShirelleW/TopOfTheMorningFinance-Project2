import React from 'react';
import { useEffect, useState } from 'react';
import CurrencyConverterData from '../../components/CurrencyConveterData';
// Style
import '../../CSS/CurrencyConverterCSS/style.css'


const baseURL = 'http://api.exchangeratesapi.io/v1/latest?access_key=9420e92716a0e473b0660a3f02021b38'

const CurrencyConveter = () => {

    const [currencyOptions, setCurrencyOptions] = useState([])
    const [fromCurrency, setFromCurrency] = useState()
    const [toCurrency, setToCurrency] = useState()
    const [exchangeRate, setExchangeRate] = useState()
    const [amount, setAmount] = useState(1)
    // tells me if the amount i changed is in from currency or to currency
    const [amountInFromCurrency, setAmountInFromCurrency] = useState(true)
    // console.log(exchangeRate)

    let toAmount, fromAmount

    // if this is true, it means our amount that we have in our state is our from amount
    if (amountInFromCurrency) {
        fromAmount = amount
        toAmount = amount * exchangeRate
    } else {
        toAmount = amount
        // reverse
        fromAmount = amount / exchangeRate
    }

    useEffect(() => {
        fetch(baseURL)
            .then(response => response.json())
            .then(data => {
                const firstCurrency = Object.keys(data.rates)[0]
                // ... destructures
                setCurrencyOptions([data.base, ...Object.keys(data.rates)])
                setFromCurrency(data.base)
                setToCurrency(firstCurrency)
                setExchangeRate(data.rates[firstCurrency])
            })
    }, [])

    useEffect(() => {
        if (fromCurrency != null && toCurrency != null) {
            fetch(`${baseURL}&base=${fromCurrency}&symbols=${toCurrency}`)
                .then(response => response.json())
                .then(data => setExchangeRate(data.rates[toCurrency]))
        }
    }, [fromCurrency, toCurrency])


    const handleFromAmountChange = (e) => {
        setAmount(e.target.value)
        setAmountInFromCurrency(true)
    }

    const handleToAmountChange = (e) => {
        setAmount(e.target.value)
        setAmountInFromCurrency(false)
    }

    return (
        <div className='cc-container'>

            <h1 id="fromEurs">Convert from EURs</h1>
            <div className='first-container'>
            <CurrencyConverterData
                className
                currencyOptions={currencyOptions}
                selectedCurrency={fromCurrency}
                onChangeCurrency={e => setFromCurrency(e.target.value)}
                onChangeAmount={handleFromAmountChange}
                amount={fromAmount}
            />
            </div>
            <div id='equal-sign'>=</div>
            <div className='second-container'>
            <CurrencyConverterData
                currencyOptions={currencyOptions}
                selectedCurrency={toCurrency}
                onChangeCurrency={e => setToCurrency(e.target.value)}
                onChangeAmount={handleToAmountChange}
                amount={toAmount}
            />
            </div>
        </div>
    );
}

export default CurrencyConveter;
