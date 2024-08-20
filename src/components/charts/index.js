import React from 'react'
import { Bar, Pie } from '@ant-design/charts';
import "./styles.css";
function ChartComponent({transactions}) {
  const data = transactions.map((item)=>{
    return {date:item.date, amount:item.amount};
  });
  
  const spendingdata = transactions
    .filter((item) => item.type === 'expense')
    .map((item) => ({
      tag: item.tag,
      amount: item.amount,
    }));

  const config = {
    data:data,
  
    xField: 'date',
    yField: 'amount',    
    legend: { position: 'top-left' },
  };
  const spendingconfig = {
    data:spendingdata,
    radius: 1, // Adjust the size of the donut
    innerRadius: 0.6,
    angleField:"amount",
    colorField:"tag",
   
  };
  let chart;
  let pichart;
  return (
    <div style={{display:"flex", justifyContent:"space-around", flex:"1",width: '100%', height: '500px'}}>
  <div className='charts-wrapper'>
    <h2>Your Analytics</h2>
    <Bar {...config} onReady={(chartInstance)=>(chart=chartInstance)}/>
  </div>
   <div visible className='charts-wrapper-pie'>
   <h2>Your Spendings</h2>
   <Pie {... spendingconfig} onReady={(chartInstance)=>(pichart=chartInstance)}/>
 </div>
 </div>
);
 
}

export default ChartComponent