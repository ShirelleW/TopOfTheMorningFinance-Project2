import React from 'react';
import Chart from '../../components/Chart';
//style
import '../../CSS/StockChartCSS/style.css'

const StockCharts = () => {

    return (
        <div>
             <h2 id="stockChart-title">US Stock Market Charts</h2>
            <Chart />
        </div>
    );
}

export default StockCharts;
