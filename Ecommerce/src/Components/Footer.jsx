import React from 'react'
import { Container,Row,Col,Stack,Image } from 'react-bootstrap'
import { Card } from 'react-bootstrap'

const Footer = () => {
  return (
    <div>
      <footer>
        <Card className='footer-section'>
          <Card.Footer className='footer'>
            <Row>
              <Col>Column 1</Col>
              <Col>Column 2</Col>
            </Row>
            <Row>
              <Col>Column 1</Col>
              <Col>Column 2</Col>
            </Row>
            <Row>
              <Col>Column 1</Col>
              <Col>Column 2</Col>
            </Row>
            <Row>
              <Col>Column 1</Col>
              <Col>Column 2</Col>
            </Row>
          </Card.Footer>
        </Card>
      </footer>
    </div>
  )
}

export default Footer
