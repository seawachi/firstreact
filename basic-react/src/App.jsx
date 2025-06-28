import { useEffect, useState } from 'react'
import Transection from './components/Transection'
import FormComponent from './components/FormComponent';
import './App.css'
import DataContext from './data/DataContext';
import ReportComponent from './components/Reportcomponent';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  const design = { color: 'red', textAlign: 'center', fontSize: '1.5rem' };
  const initdata = [
    { id: 1, title: 'test1', amount: 100 },
    { id: 2, title: "test2", amount: 500 },
    { id: 3, title: 'Text3', amount: -700 },
    { id: 4, title: 'Text4', amount: 7100 },
    { id: 5, title: 'Text5', amount: -500 },
  ];

  const [items, setItems] = useState(initdata)
  const [reportIncome, setReportIncome] = useState(0)
  const [reportExpense, setReporExpense] = useState(0)

  const onAddNewItem = (newItem) => {
    setItems(prevItem => [newItem, ...prevItem])
    console.log('new item formcom.', newItem)
  }

  useEffect(() => {
    const amounts = items.map(item => item.amount)
    const income = amounts.filter(a => a > 0).reduce((t, a) => t + a, 0)
    const expense = amounts.filter(a => a < 0).reduce((t, a) => t + a, 0) * -1
    setReporExpense(expense)
    setReportIncome(income)
  }, [items])

  return (
    <DataContext.Provider value={{ income: reportIncome, expense: reportExpense }}>
      <div className='container'>
        <h1 style={design}>แอพบัญชี</h1>

        <ul className='horizontal-menu'>
          <li>
            <Link to="/">Account information</Link>
          </li>
          <li>
            <Link to="/insert">Insert Form</Link>
          </li>
        </ul>

        <Routes>
          <Route path="/" element={<ReportComponent />} />
          <Route path="/insert" element={
            <>
              <FormComponent onAddItem={onAddNewItem} />
              <Transection items={items} />
            </>
          } />
        </Routes>
      </div>
    </DataContext.Provider>
  )
}

export default App;
