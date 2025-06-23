import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Transection from './components/Transection'
import FormComponent from './components/FormComponent';
import './App.css'
import DataContext from './data/DataContext';
import ReportComponent from './components/Reportcomponent';

function App() {
  const design = {color:'red',textAlign:'center',fontSize:'1.5rem'};
  const initdata = [
    {id:1, title: 'Valid', amount: 100 },
    {id:2, title: "123" ,amount: 500 },
    {id:3, title: 'Text', amount: 700},     
  ];
  const [items,setItems] = useState([])
  const onAddNewItem = (newItem)=>{
    setItems((prevItem) =>{
      return [newItem,...prevItem]
    })
    console.log('new item formcom.',newItem)
  }
  return (
      <DataContext.Provider value={
        {
          income : 50000,
          expense: -8000
        }
      }>
        <div className='container'>
            <h1 style={design}>แอพบัญชี</h1>
            <ReportComponent/>
            <FormComponent onAddItem={onAddNewItem}/>
            <Transection items = {items}/>
        </div>
      </DataContext.Provider>
    );
}

export default App
