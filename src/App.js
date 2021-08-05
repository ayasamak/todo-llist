import './App.css';
import react ,{Component} from 'react';
import Todolist from './components/Todolist/Todolist.js';
import Todoitem from './components/Todoitem/Todoitem.js';
class App extends Component {
  state={
    items:[
      {id:1,name:'aya',age:22},
      {id:2,name:'salah',age:52},
      {id:3,name:'farida',age:12},
    ]
  }
  deleteitem = (id) => {
    let items= this.state.items.filter( item => {
      return item.id !== id;
    });
    this.setState({items})
  }
  additem = (item) => {
  let items= this.state.items;
  items.push(item);
  this.setState({items});
  }
  render(){
  return (
    <div className="app">
      <p className="p"> TODO-LIST </p>
    <Todolist items={this.state.items} deleteitem={this.deleteitem}/>
    <Todoitem add={this.additem}/>
    </div>
  );
}
}

export default App;
