import './TodoItems.css';

const TodoItems = (props) => {
  const {items, toggleComplete, deleteItems} = props;
  let length = items.length;
  const ListItems = items.map(item => {
    return (
      <div key={item.id} className={item.completed ? "completed row" : "row"}  onClick={() => toggleComplete(item.id)}>
        <span className="name">{item.name}</span>
        <span className="age">{item.hours} H</span>
        <span className="action icon" onClick={() => deleteItems(item.id)}>&times;</span>
      </div>
    )
  })
  return (
    <div className="ListItems">
      <div className="row">
        <span className="name title">Todo</span>
        <span className="hours title">Hours</span>
        <span className="action title">Delete</span>       
      </div>
      {length ? ListItems : <div className="row row-empty">There is no item to show</div>}
    </div>
  )
}

export default TodoItems;
