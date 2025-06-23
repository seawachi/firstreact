import { useContext } from "react"
import DataContext from "../data/DataContext"
const ReportComponent=()=>{
    const {income,expense} = useContext(DataContext)
    return(
        <div>
            <p>income : {income}</p>
            <p>expense : {expense}</p>
        </div>
    )
}
export default ReportComponent