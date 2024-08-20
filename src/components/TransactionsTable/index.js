import { Table, Select, Radio } from 'antd';
import React from 'react';
import { useState } from 'react';
import searchImg from "../../assets/search.svg";
import "./styles.css"
import Button from '../button/idex';
import {unparse,parse} from "papaparse";
import { toast } from 'react-toastify';
function TransactionsTable({transactions,addTransaction,fetchTransactions}) {

  const{Option}=Select;
  const[search, setSearch]=useState("");
  const[typeFilter, setTypeFilter]=useState("");
  const[sortKey, setSortKey]=useState("");
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title:  "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Tag",
      dataIndex: "tag",
      key: "tag",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type", 
    }
  ];
  

  let filteredTransactions= transactions.filter((item)=>item.name.toLowerCase().includes(search.toLowerCase()) && (item.type ? item.type.includes(typeFilter):true));

  let sortedTransactions=filteredTransactions.sort((a,b)=>{
    if(sortKey=== "date"){
      return new Date(a.date) - new Date(b.date);
    }
    else if(sortKey==="amount"){
      return a.amount - b.amount;
    }
    else{
      return 0;
    }
  });
  function Exportcsv(){
    var csv = unparse({
      "fields": ["name", "amount","tag","date","type"],
    data:transactions
    });
    var data = new Blob([csv], {type: 'text/csv'});
    var csvURL = window.URL.createObjectURL(data);
    const tempLink = document.createElement('a');
    tempLink.href = csvURL;
    tempLink.setAttribute('download', 'filename.csv');
    tempLink.click();
  }
  function Importcsv(event){
    event.preventDefault();
    parse(event.target.files[0],{
      header: true,
      complete:async function (results) {
        for(const transaction of results.data ){
          const newTransaction={
            ...transaction, amount:parseFloat(transaction.amount),
          };
          await addTransaction(newTransaction,true);
        }
        
      },

    });
    toast.success("All Transactions Imported")
    fetchTransactions();
    event.target.files=null;
  }
  return (
   <>
   <div className='inputandselect'>
   <div className='input-flex'>
    <img src={searchImg} width="16"/>
   <input value={search}
    onChange={(e)=> setSearch(e.target.value)}
    placeholder='Search by Name' />
   </div>
    

    <Select 
    className='select-input'
    onChange={(value)=> setTypeFilter(value)}
    value={typeFilter}
    placeholder="Filter"
    allowClear
    >
      <Option value="">All</Option>
      <Option value="income">Income</Option>
      <Option value="expense">Expense</Option>

    </Select>
    </div>
      <div className='sorts'>
         <Radio.Group
            className="input-radio"
            onChange={(e) => setSortKey(e.target.value)}
            value={sortKey}
          >
            <Radio.Button value="">No Sort</Radio.Button>
            <Radio.Button value="date">Sort by Date</Radio.Button>
            <Radio.Button value="amount">Sort by Amount</Radio.Button>
          </Radio.Group>
          <div style={{display:"flex",width:"22%", justifyContent:"space-between", gap:"1rem", marginLeft:"15%"} }>
          
          <Button 
          text={"Export CSV"} onClick={Exportcsv} blue={true} >Export</Button>
          

          <label for="file-csv" className='btn btn-blue'>Import From CSV</label>
          <input 
          id="file-csv"
          type='file'
          accept='.csv'
          required
          onChange={Importcsv}
          style={{display:"none"}}
          ></input>

          </div>
     </div>
       <div className='heading'><h2>Transactions</h2></div>

         
          
    <Table dataSource={sortedTransactions} columns={columns} />
   
    </>
  )
}

export default TransactionsTable