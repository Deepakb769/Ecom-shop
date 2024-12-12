import React, { Component } from 'react'
import { Card, Row, Col } from 'react-bootstrap';
import axios from 'axios'
// import { useEffect } from 'react';
// import { Link, Navigate } from 'react-router-dom';
// import Navbar from '../Components/Navbar';
import Catagory from '../Components/Catagory';
import { Button } from 'react-bootstrap'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


// function Shirt(){
//   return(
//     <img src='../assets/Duo_shirts.jpg' alt="" />
//   )
// }

export class ProductItem extends Component {
  constructor(props) {
    super(props);
    console.log(this)
    this.state = {      
      products : [],
      cart : {},
      count : '',
      filteredProducts : [],
      categories : [],
      selectedCategory : 'all',
      purchased : {}
  }
}

  componentDidMount() {
    this.fetchProducts();
  }

  fetchProducts = async () => {
    try {
      const response = await axios.get('https://api.escuelajs.co/api/v1/products');
      const products = response.data;

      const categories = [...new Set(products.map((product) => product.category.name))]

      this.setState({
        products,
        filteredProducts : products,
        categories,
      }, ()=>{console.log({state: this.state})})
    } catch (error) {
      console.log(error);
    }
  };

  // handleCategorySelect = (category) => {
  //   this.setState((prevState) => ({
  //     selectedCategory : category,
  //     filteredProducts : 
  //       category === 'all'
  //         ? prevState.products
  //         : prevState.products.filter(
  //           (product) => product.categories === category
  //         ),

  //   }))
  // };
  handleCategorySelect = (category) => {
    this.setState((prevState) => ({
      selectedCategory: category,
      filteredProducts: 
        category === "all"
          ? prevState.products // Show all products if "all" is selected
          : prevState.products.filter(
              (product) => product.category.name === category
            ), // Filter products by the selected category
    }));
  };

  render() {
    const {filteredProducts, categories } = this.state
    const {addToCart} = this.props
    return (
      <>
      {/* <Navbar count={count}/> */}
      <Catagory categories = {categories} onCategorySelect = {this.handleCategorySelect} />
      <div className='product-card'> 
        {filteredProducts.map((item) => {
          return(
            <div key={item.id} className="products">
              <Card style={{ width : '12rem' }}>
                <Card.Img variant="top" src={item.images} style={{ width : '100%', height : '10rem' }}/>
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text className='item-description'>{item.description}</Card.Text>
                  <Card.Text>{item.price}</Card.Text>
                  <Button variant='primary' className='cart' onClick={() => addToCart(item)}>
                    Add to cart
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ) 
        })
        }
      </div>
      </>
    )
  }
}
export default ProductItem