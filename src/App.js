import NavComp from './components/NavComp';
import './App.css';
import {Component} from 'react';

class App extends Component {

  state = {
    details : {
       companyName : "Silver Media",
       navItems : ["Home","About Us","Contact","Products","Login"] 
    }
  };

  render(){
  return (
    <NavComp navInfo={this.state.details}/>
  );
  }
}

export default App;
