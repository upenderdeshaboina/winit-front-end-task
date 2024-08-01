import { Component } from "react";

class AllItems extends Component{
    state={
        itemsList:[]
    }

    componentDidMount(){
        this.getItemsData()
    }

    getItemsData=async()=>{
        const url='https://winit-test-backend.onrender.com/orders'
        try {
            const response=await fetch(url)
            if (response.ok){
                const jsonData=await response.json()
                this.setState({itemsList:jsonData})
            }
        } catch (error) {
            console.log(`error : ${error.message}`)
        }
    }

    render(){
        return (
            <div className="items-container">
                <div className="name-button-container">
                    <button className="add-btn" type="button">Add Item</button>
        
                </div>
                <table>
                    <thead>
                        <td>s.No</td>
                        <td>Item code</td>
                        <td>Item Name</td>
                        <td>Unit Price</td>
                        <td>Qty</td>
                        <td>Total Price</td>
                        <td >Action</td>
                    </thead>
                </table>
            </div>
        )
    }
}
export default AllItems