import React, { Component } from 'react'
import { Card, Row, Col } from 'react-bootstrap';
import axios from 'axios'
import { useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Catagory from '../Components/Catagory';
import { Button } from 'react-bootstrap'


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
      selectedCategory : 'all'
  }
}

  componentDidMount() {
    this.fetchProducts();
  }

  fetchProducts = async () => {
    try {
      const response = await axios.get('https://api.escuelajs.co/api/v1/products');
      // console.log(response.data);
      // Assuming response.data is an array of categories
      // this.setState({ products: response.data });
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
        {/* <Row xs={1} md={2} className='g-4'>
          {Array.from({ length : 4 }).map((filteredProducts , item) => (
            <Col key={item.id} className='products'>
              <Card>
                <Card.Img variant="top" src={item.images} style={{ width : '8rem', height : '10rem' }}/>
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text className='item-description'>{item.description}</Card.Text>
                  <Card.Text>{item.price}</Card.Text>
                  <Button variant='primary' className='cart' onClick={() => addToCart(item)}>
                    Add to cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row> */}
        {filteredProducts.map((item) => {
          return(
            <div key={item.id} className="products">
              <Card style={{ width : '12rem' }}>
                <Card.Img variant="top" src={item.images} style={{ width : '8rem', height : '10rem' }}/>
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text className='item-description'>{item.description}</Card.Text>
                  <Card.Text>{item.price}</Card.Text>
                  <Button variant='primary' className='cart' onClick={() => addToCart(item)}>
                    Add to cart
                  </Button>
                </Card.Body>
              </Card>
              {/* <div className="item-image">
                <img src={item.images} alt={item.name} style={{ width: "160px",}} />
              </div>
              <div className="item-title">
                <h2>{item.title}</h2>
              </div>
              <div className="item-description">
                <h2>{item.description}</h2>
              </div>
              <div className="item-price">
                <h3>{item.price}</h3>
              </div>
              <Button variant='primary' className='cart' onClick={() => addToCart(item)}>
                Add to cart
              </Button> */}
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