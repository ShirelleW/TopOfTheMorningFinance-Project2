import React from 'react';
import { useEffect, useState } from 'react';
import CurrencyConverterData from '../../components/CurrencyConveterData';


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
        <div>
            <h1>Convert from EURs</h1>
            <CurrencyConverterData
                currencyOptions={currencyOptions}
                selectedCurrency={fromCurrency}
                onChangeCurrency={e => setFromCurrency(e.target.value)}
                onChangeAmount={handleFromAmountChange}
                amount={fromAmount}
            />
            <div>=</div>
            <CurrencyConverterData
                currencyOptions={currencyOptions}
                selectedCurrency={toCurrency}
                onChangeCurrency={e => setToCurrency(e.target.value)}
                onChangeAmount={handleToAmountChange}
                amount={toAmount}
            />
        </div>
    );
}

export default CurrencyConveter;
