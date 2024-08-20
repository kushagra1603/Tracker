import React from 'react'
import { Line, Pie } from '@ant-design/charts';
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
    autofit: true,
    xField: 'date',
    yField: 'amount',
   
  };
  const spendingconfig = {
    data:spendingdata,
    autofit: true,
    angleField:"amount",
    colorField:"tag",
   
  };
  let chart;
  let pichart;
  return (
    <div style={{display:"flex", justifyContent:"space-around", flex:"1",width: '100%', height: '500px'}}>
  <div className='charts-wrapper'>
    <h4>Your Analytics</h4>
    <Line {...config} onReady={(chartInstance)=>(chart=chartInstance)}/>
  </div>
   <div visible className='charts-wrapper-pie'>
   <h4>Your Spendings</h4>
   <Pie {... spendingconfig} onReady={(chartInstance)=>(pichart=chartInstance)}/>
 </div>
 </div>
);
 
}

export default ChartComponent