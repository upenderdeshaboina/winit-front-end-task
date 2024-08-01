import { Component } from "react";
import './index.css'

class AddItem extends Component{
    state={
        itemsList:[]
    }

    componentDidMount(){
        this.getNameOfCustomer()
    }

    render(){
        return(
            <h1>item</h1>
        )
    }
}
export default AddItem