import React from 'react';
import logo from './logo.svg';
import './App.css';
import { inject ,  observer } from 'mobx-react'

@inject('count')
@observer
class App extends React.Component{
  render(){
    return(
      <div>
        <button onClick={()=>{this.props.count.change('+')}}>+</button>
        <p>{this.props.count.count}</p>
        <button onClick={()=>{this.props.count.change('-')}}>-</button>
      </div>
    )
  }
}

export default App;
