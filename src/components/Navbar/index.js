import { AiOutlineDashboard } from "react-icons/ai";
import { TbReportSearch } from "react-icons/tb";
import { GrTransaction } from "react-icons/gr";
import './index.css'
const Navbar=()=>{
    <nav>
        <div>
            <h1>WINIT</h1>
            <h2>thinking <br/>mobile</h2>
        </div>
        <div>
            <ul>
                <li>
                    <AiOutlineDashboard/>
                    <p>Dashboard</p>
                </li>
                <li>
                    <TbReportSearch/>
                    <p>Reports</p>
                </li>
                <li>
                    <GrTransaction/>
                    <p>Transactions</p>
                </li>
            </ul>
        </div>
        <div className="">
            
        </div>
    </nav>
}
export default Navbar