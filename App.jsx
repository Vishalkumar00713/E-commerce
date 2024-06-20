import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/Header"
import ProductList from "./components/ProductList"
import CartList from "./components/CartList"


const item=[
  {
    id:1,
    url: 'https://rukminim1.flixcart.com/image/300/300/l51d30w0/shoe/z/w/c/10-mrj1914-10-aadi-white-black-red-original-imagft9k9hydnfjp.jpeg?q=70',
    name: 'TRQ White Shoes',
    category: 'Shoes',
    seller: 'AMZ Seller Ghz',
    price: 1999
  },
  {
    id:2,
    url: 'https://5.imimg.com/data5/KC/PC/MY-38629861/dummy-chronograph-watch-500x500.jpg',
    name: 'LOREM Watch Black',
    category: 'Watches',
    seller: 'Watch Ltd Siyana',
    price: 2599
  },
  {
    id:3,
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq39iB_cO6uhZ59vubrqVuYTJQH-4Qa0hU9g&usqp=CAU',
    name: 'AMZ Laptop 8GB RAM',
    category: 'Laptops',
    seller: 'Delhi Laptops',
    price: 50000
  },
  {
    id:4,
    url: '	https://tse2.mm.bing.net/th?id=OIP.8aKEWAkiFIDufpRVh5rSEgHaHa&pid=Api&P=0&h=180',
    name: 'Security Camera',
    category: 'CCTV',
    seller: 'Camron LTD',
    price: 4000
  },
  {
    id:5,
    url: '	https://tse2.mm.bing.net/th?id=OIP.2nLTuyoAz0a1xeHu3E02tQHaHa&pid=Api&P=0&w=400&h=400',
    name: 'Watch Pink',
    category: 'Watches',
    seller: 'Watch Ltd',
    price: 2000
  },
  {
    id:6,
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9xzgtOpMxdpfgBOg3OKsEqYRkNBbuprJj4w&usqp=CAU',
    name: 'Cup red Color',
    category: 'Cup',
    seller: 'ABS Ltd',
    price: 100
  },
]

function App() {

  const[product,setProduct]=useState(item);
  const[cart,setCart]=useState([]);
  const[showcart,setShowCart]=useState(false);


  function addToCart(data){


    
    setCart([...cart,{...data,quantity:1}]);


  }

  function showsCart(data)
  {
     setShowCart(data);
  }


  return (
  <div>
    <Header count={cart.length} showcarts={showsCart}></Header>
    { 
    showcart? <CartList cart={cart}></CartList>:<ProductList product={product} addToCart={addToCart}></ProductList>
}


  </div>
  )
}

export default App
