import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Transection from './components/Transection'
import FormComponent from './components/FormComponent';
import './App.css'

function App() {
  
  const Ttile =()=><h1>โปรแกรมรายรับรายจ่าย</h1>
  const Description =()=><p>บันทึกข้อมูล</p>
  const design = {color:'red',textAlign:'center',fontSize:'1.5rem'};
  const initdata = [
    {id:1, title: 'Valid', amount: 100 },  
    {id:2, title: "123" ,amount: 500 },                         // ❌ title wrong type, missing amount
    {id:3, title: 'Text', amount: 700},            
  ];  
  const onAddNewItem = (newItem)=>{
    console.log('new item formcom.',newItem)
  }
  return (
      <div className='container'>
            <h1 style={design}>แอพบัญชี</h1>
            <FormComponent onAddItem={onAddNewItem}/>
            <Ttile/>
            <Description/>
            <Transection items = {initdata} />
      </div>
    );
}

export default App
