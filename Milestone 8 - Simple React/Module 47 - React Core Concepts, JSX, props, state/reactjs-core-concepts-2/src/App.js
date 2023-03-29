import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  // const products = [
  //   {name: "Laptop", price: "130000"},
  //   {name: "Mobile", price: "30000"},
  //   {name: "Tablet", price: "50000"},
  //   {name: "Watch", price: "2000"}
  // ]
  return (
    <div className="App">
      {/* {
        products.map(product => <Product name={product.name} price={product.price}></Product>)
      }

      <Product name="Laptop" price="700000"></Product>
      <Product name="Mobile" price="10000"></Product>
      <Product name="Air-Buds" price="7000"></Product>
      <Product name="iPhone" price="90000"></Product> */}

      <Counter></Counter>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(7);
  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);
  // const increaseCount = () =>{
  // const newCount = count + 1;
  // setCount(newCount);
  // }

  return(
    <div>
      <h1>Count : {count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}

function Product(props) {
  return(
    <div className="product">
        <h2>Name : {props.name}</h2>
        <h3>Price : {props.price}</h3>
    </div>
  )
}

export default App;
