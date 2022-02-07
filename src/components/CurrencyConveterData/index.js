import React from 'react';

const CurrencyConverterData = (props) => {

    const {
        currencyOptions,
        selectedCurrency,
        onChangeCurrency,
        amount,
        onChangeAmount
    } = props 


    return (
        <div>
            <input id = 'input' type='number' value= {amount} onChange={onChangeAmount}/>
            <select id='select' value={selectedCurrency} onChange={onChangeCurrency} name="currencies" id="input-numbers">
                {currencyOptions.map(option =>(
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
        </div>
    );
}

export default CurrencyConverterData;
