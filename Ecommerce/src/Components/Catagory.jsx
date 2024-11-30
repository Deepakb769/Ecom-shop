import React from 'react'
import { Card } from 'react-bootstrap'
import { ListGroup } from 'react-bootstrap'

const Catagory = ({categories, onCategorySelect}) => {
  return (
    <div>
      {/* <Card style={{width : '14rem'}}> */}
        <div className="product-filter">
            <label htmlFor="category-select">Filtered Category :</label>
            {/* <ListGroup variant='flush'> */}
              <select id="selected-category" onChange={(e) => onCategorySelect(e.target.value)}>
                <option value="all">All</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            {/* </ListGroup> */}
        </div>
      {/* </Card> */}
        
    </div>
  )
}

export default Catagory
