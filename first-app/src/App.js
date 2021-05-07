import React, { Component } from 'react';

import './App.css';
import Stock from './Stock/Stock'
import assets from './assets/web.png'
import Radium from 'radium'
class App extends Component {
 
  
 state ={
    Stocks: [
      {id:"teva", name: "Teva", price: 123 },
      { id:"tesla", name: "Tesla", price: 345 },
      {id:"google", name: "Google", price: 111 }
    ],
    showStock:false
  }

  toggleStack = ()=>{
   const doesStock =this.state.showStock;
    this.setState({ showStock:!doesStock});
  }
  startChangeHandler = (event) => {
    console.log("1");
    this.setState({
      
      Stocks: [
        { name: "Teva", price: 0 },
        { name: "Tesla", price: 0 },
        { name: "Google", price: 0 }
      ]
    })
  }

  nameChangeHandler =(event,id) =>{
  const stockIndex = this.state.Stocks.findIndex(s=>{
     return s.id===id;
   });
   const stock = {
   ...this.state.Stocks[stockIndex]
   }
   stock.price=event.target.value;
   const Stocks =[...this.state.Stocks];
   Stocks[stockIndex]=stock;
    this.setState({Stocks:Stocks})
  }
  deleteStock =(index)=>{
    const Stocks = this.state.Stocks;
    this.state.Stocks.splice(index,1);
    this.setState({Stocks:Stocks})
  }
  
 
  render() {
    
   let style={ 
     ':hover':{
     backgroundColor:'lightgreen',
     color:'black'
     }
    } 
    let classes = [];
    if(this.state.showStock){
      classes='green';
    }
    else{
      classes='red';
      
    }
    return (
      
      <div className='App' className='bg'  style={style}>

        <button className={classes}  onClick={this.toggleStack}>toggle!!!</button>
        {this.state.showStock?
          <div>
            {
              this.state.Stocks.map((stock,indexStock)=>{
                return <Stock 
                click={()=>this.deleteStock(indexStock)}
                name={stock.name}
                price={stock.price} 
                changed={(event)=>this.nameChangeHandler(event,stock.id)}
                key={stock.id}
                 />
              })
            }
       
        </div>
        :null}

      </div>
    
     );
  }
}

export default Radium(App);
