import { useEffect, useState ,useReducer} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Transection from './components/Transection'
import FormComponent from './components/FormComponent';
import './App.css'
import DataContext from './data/DataContext';
import ReportComponent from './components/Reportcomponent';
import { element } from 'prop-types';

function App() {
  const design = {color:'red',textAlign:'center',fontSize:'1.5rem'};
  const initdata = [
    {id:1, title: 'test1', amount: 100 },
    {id:2, title: "test2" ,amount: 500 },
    {id:3, title: 'Text3', amount: -700},     
    {id:4, title: 'Text4', amount: 7100},     
    {id:5, title: 'Text5', amount: -500},     
  ];
  const [items,setItems] = useState([])
  const [reportIncome,setReportIncome] = useState(0)
  const [reportExpense,setReporExpense] = useState(0)

  const onAddNewItem = (newItem)=>{
    setItems((prevItem) =>{
      return [newItem,...prevItem]
    })
    console.log('new item formcom.',newItem)
  }
  useEffect(()=>{
    const amounts = items.map(items => items.amount)
    const income = amounts.filter(element=>element>0).reduce((total,element)=>total+=element,0)
    const expense = (amounts.filter(element=>element<0).reduce((total,element)=>total+=element,0))*-1
    setReporExpense(expense)
    setReportIncome(income)
  },[items,reportExpense,reportIncome])
  //reducer state
  const [showReport,setshowReport] = useState(0)
  const reducer = (state,action)=>{
    switch(action.type){
      case "SHOW": 
        return setshowReport(true)
      case "HIDE":
        return setshowReport(false)
    }
  }
  const [result,dispatch] = useReducer(reducer,showReport)
  return (
      <DataContext.Provider value={
        {
          income : reportIncome,
          expense: reportExpense
        }
      }>
        <div className='container'>
            <h1 style={design}>แอพบัญชี</h1>
            {showReport && <ReportComponent/>}
            
            <FormComponent onAddItem={onAddNewItem}/>
            <Transection items = {items}/>

            <h1>{result}</h1>
            <button onClick={()=>dispatch({type:"SHOW"})}>Show</button>
            <button onClick={()=>dispatch({type:"HIDE"})}>Hide</button>
        </div>
      </DataContext.Provider>
    );
}

export default App
