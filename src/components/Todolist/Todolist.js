import react from 'react';
import './Todolist.css';
const Todolist =(props)=>{
  const {items , deleteitem}=props;
  const length= items.length;
  const theitem= length ?(
  items.map(item=>{
    return(
      <div key={item.id} className="ap2">
      <span className="spa1">{item.name}</span>
      <span className="spa2">{item.age}</span>
      <span className="spa3" onClick={() => deleteitem(item.id)}>&times;</span>
      </div>
    )
  })
):(
  <p> NO ITEM TO SHOW </p>
)
return(
  <div>
  <div className="ap">
  <span className="spa1"> name</span>
  <span className="spa2"> age</span>
  <span className="spa3"> action</span>
  </div>
  {theitem}
  </div>
)
}
export default Todolist;
