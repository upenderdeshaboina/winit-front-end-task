import {Component} from 'react'
import Home from './components/Home/home'
import { Switch,Route } from 'react-router-dom';
import './App.css';
import AddOrder from './components/addCustomer';
import AddItem from './components/addItem';
import AllItems from './components/allItems';
// sales_order_number TEXT VARCHAR(50),
// customer_code TEXT VARCHAR(50),
// customer_name TEXT VARCHAR(250),
// order_date DATETIME REAL,
// total_amount FlOAT DECIMAL(18,3)

const App=()=>(
  <>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/addorder' component={AddOrder}/>
      <Route exact path='/addItem' component={AddItem}/>
      <Route exact path='/allItems' component={AllItems}/>
    </Switch>
  </>
)

export default App;
