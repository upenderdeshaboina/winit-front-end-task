import {Component} from 'react'
import {v4 as uuid} from 'uuid'

class AddOrder extends Component{
    state={
        customerName:'',
        totalAmount:0
    }

    onChangeName=event=>{
      this.setState({customerName:event.target.value})
    }
    
    onSubmitForm=async event=>{
        event.preventDefault()
        const salesOrderN=uuid()
        const halfNum=salesOrderN.split('-')
        const secondId=uuid()
        const secondDate=secondId.split('-')
        const salesNum=halfNum[0]
        const cusCode=secondDate[0]
        const {customerName,totalAmount}=this.state
        const optionData={
           salesOrderNumber:salesNum,
           customerName,
           customerCode:cusCode,
           totalAmount
        }
        console.log(JSON.stringify(optionData))
        const options={
          method: 'POST',
          headers:{
            'Content-Type':'application/json',
          },
          body:JSON.stringify(optionData)
        }
        const url='https://winit-test-backend.onrender.com/customers'
        try {
          const response=await fetch(url,options)
          if (response.ok){
            const data=await response.json()
            console.log('added successfully')
          }
        } catch (error) {
          console.log(`error : ${error.message}`)
        }
      }
    render(){
        const {customerName}=this.state
        return(
            <form onSubmit={this.onSubmitForm}>
                <div >
                    <input className='input' type='text' value={customerName} onChange={this.onChangeName}/>
                </div>
                <button className='btn' type='submit'>submit</button>
            </form>
        )
    }
}
    
   
export default AddOrder