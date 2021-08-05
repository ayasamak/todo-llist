import react ,{Component} from 'react';
import './Todoitem.css'
class Todoitem extends Component {
  state={
    name:'',
    age:''
  }
  handlechange=(e)=>{
    this.setState({
      [e.target.id]:e.target.value
    })
  }
  handlesubmit=(e)=>{
    e.preventDefault();
    this.props.add(this.state);
    this.setState({
    name:'',
    age:''
    })
  }
  render(){
  return (
    <form onSubmit={this.handlesubmit}>
    <input type="text" placeholder="enter name ..."  id="name" value={this.state.name} onChange={this.handlechange}/>
    <input type="number" placeholder="enter age ..."  id="age" value={this.state.age} onChange={this.handlechange}/>
    <input type="submit" value="add item" />
    </form>
  );
}
}

export default Todoitem;
