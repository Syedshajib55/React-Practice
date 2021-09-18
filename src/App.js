import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      {/* <Counter></Counter> */}
      <ExternalUsers></ExternalUsers>
    </div>
  );
}

function ExternalUsers(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])
  return (
    <div className="prooduct">
      {
        users.map(user => <User email={user.email} name={user.name}></User>)
      }
    </div>
  )
}
function User(props){
  return (
    <div>
      <h2>Name : {props.name}</h2>
      <h2>Email : {props.email}</h2>
    </div>
  )
}
function Counter(){
  const [count, setCount] = useState(10);
  const handleIncrease = () =>{
   // const newCOunt =  count + 1;
    setCount(count + 1);
  }; 
  const handleDecrease = () =>{
   // const newCOunt =  count + 1;
    setCount(count - 1);
  }; 
  return (
    <div>
      <h1>Count :  {count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  )
}
// function Product(props){
//   const productStyle ={
//     border:'2px solid red',
//     borderRadius: '10px'
//   }
//   return (
//     <div className="product" style={productStyle}>
//       <h2>Name : {props.name}</h2>
//       <h2>Price : {props.price}</h2>
//     </div>
//   )
// }
/*
const products =[
    {name: 'mobile', price: 12000},
    {name: 'shoes', price: 100},
    {name: 'mobile', price: 12000},
    {name: 'mobile', price: 12000}
  ]
*/
/* 
 products.map(product => <Product name={product.name} price={product.price} ></Product>)
      }
      { <Product name="laptop" price="1000"></Product>
      <Product name="laptop" price="1000"></Product>
      <Product name="laptop" price="1000"></Product> }
       
*/
export default App;
