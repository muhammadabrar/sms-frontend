import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import Chart from "react-apexcharts";
function Students_chart() {
    const theme = useSelector((state) => state.theme.value)
   
    var data = {
        series: [44, 55, 13, 43, 22, 44],
        chart: {
          foreColor: `${theme? "#fff": "#000"}`,
        type: 'pie',
      },
      labels: ['1st', '2nd', '3rd', '4th', '5th', '6th'],
      dataLabels: {
        enabled: false,

      },
      legend: {
        show: true,
        floating: false,
        position: 'left',
        offsetX: 0,
        offsetY: 0
   
  }
      };
  return (
  <>

  <div className={theme? "card students-chart-card-dark ": "card students-chart-card "}>
    <div className="card-header">
      
  Students in This Session <small className="value-ref">(2021)</small>

    </div>
    <div className="card-body">
    <Chart options={data} series={data.series} type='pie' />
    </div>

        
  
        </div></>
  );
}

export default Students_chart