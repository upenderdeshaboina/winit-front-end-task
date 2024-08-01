import {Component} from 'react'
import {v4 as uuid} from 'uuid'
import {Link} from 'react-router-dom'
import popup from 'react-popup'
import { MdDeleteOutline } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import Navbar from '../Navbar';
import './home.css';

// sales_order_number TEXT VARCHAR(50),
// customer_code TEXT VARCHAR(50),
// customer_name TEXT VARCHAR(250),
// order_date DATETIME REAL,
// total_amount FlOAT DECIMAL(18,3)

class Home extends Component{
  state={
    customerName:'',
    orderDate:'',
    totalAmount:0,
    customersList:[],
    isPopup:false
    ,checkBoxId:''
  }

  componentDidMount(){
    this.getData()
  }

  getData=async()=>{
    const url='https://winit-test-backend.onrender.com/customers'
    try {
        const response=await fetch(url)
        if (response.ok){
            const data=await response.json()
            this.setState({customersList:data})
        }
    } catch (error) {
        console.log(`error Loggin customers: ${error.message}`)
    }
  }

  onchangeSalesOrder=(event)=>{
    this.setState({orderDate:event.target.value})
  }
  
  onChangeCustomerName=(event)=>{
    this.setState({customerName:event.target.value})
  }

  

  

  onClickChange=()=>{
    const {history}=this.props
    history.replace('/addorder')
  }

  onClickDelete=async (id)=>{
    const url=`https://winit-test-backend.onrender.com/order/${id}`
    try {
      const options={
        method:'DELETE'
      }
      const response=await fetch(url,options)
      if (response.ok){
        alert('item deleted successfully')
      }
    } catch (error) {
      alert(`error deleting item ${error.message}`)
    }
  }


  render(){
    const {customerName,orderDate,customersList,isPopup}=this.state
    return (
    
    <>
        <Navbar/>
        <div className='home-container'>
            <div className='top-div'>
                <div>
                    <h1>Sales Order</h1>
                    <p>Dashboard</p>
                </div>
            </div>
            <div className='select-btn-div'>
                <select className='select'>
                    {customersList.map(customer=>(
                        <option>[{customer.customerCode}] {customerName}</option>
                    ))}
                </select>
                <button className='btn' type='button' onClick={this.onClickChange}>Add</button>
            </div>
            <ul className='status-selection-list'>
                <li><button >Pending</button></li>
                <li><button>Approved</button></li>
                <li><button>Rejected</button></li>
            </ul>
            <table className='table'>
                <thead className='thead'>
                    <td>select</td>
                    <td>sales order Number</td>
                    <td>cutomer Name</td>
                    <td>order date</td>
                    <td>Total Amount</td>
                    <td>Action</td>
                </thead>
                <tbody>
                {customersList.map(e=>(
                    <tr key={e.id}>
                      <th><input type='checkbox' id={e.id} onChange={this.onSelectBox}/></th>
                      <th>{e.sales_number}</th>
                      <th>{e.customer_name}</th>
                      <th>{e.order_date}</th>
                      <th>{e.total_amount}</th>
                      <th><div>
                          <Link to='/allItems'><button type='button'><MdEdit/></button></Link>
                          <button onClick={this.onClickDelete(e.id)}><MdDeleteOutline/></button>
                        </div></th>
                    </tr>
                  ))}
                </tbody>
            </table>
            <div className='buttons-container'>
              <button className='cancel-btn'>Clear</button>
              <button className='save'>Save</button>
            </div>
        </div>
    </>
  )
  }
}

export default Home;
