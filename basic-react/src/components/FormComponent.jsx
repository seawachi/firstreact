import { useState,useEffect } from "react"
import "./FromComponent.css"
import { v4 as uuidv4 } from 'uuid';

const FormComponent = (props)=>{
    const [title,setTitle] = useState("")
    const [amount,setAmount] = useState(0)
    const [formvalid,setFormvalid] = useState(false)
    const inputTitle = (event)=>{
        setTitle(event.target.value)
        console.log(event.target.value)
    }
    const inputAmount =(event)=> {
        setAmount(event.target.value)
        console.log(event.target.value)
    }
    const saveItem = (event)=>{
        event.preventDefault()
        console.log("save done")
        const itemData = {
            id:uuidv4(),
            title:title,
            amount:Number(amount)
        }
        props.onAddItem(itemData)
        setTitle('')
        setAmount(0)
    }
    useEffect(()=>{
        const checkdata =  title.trim().length>0 && amount !== 0 
        setFormvalid(checkdata)
    },[title,amount])
    return(
        <div>
            <form onSubmit={saveItem}>
                <div className="form-control">
                    <label>ชื่อรายการ</label>
                    <input type="text" placeholder="ระบุชื่อรายการ" onChange={inputTitle} value={title}></input>
                </div>
                <div className="form-control">
                    <label>จำนวนเงิน</label>
                    <input type="number" placeholder="- รายจ่าย, + รายจ่าย" onChange={inputAmount} value={amount}></input>
                </div>
                <div>
                    <button className="btn" disabled={!formvalid} type="submit">add</button>
                </div>
            </form>
        </div>
    )
}

export default FormComponent