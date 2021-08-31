import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Card } from 'react-bootstrap'
import Rating from './Rating'

const Product = ({ product }) => {
  return (
    <>
      <Card className='my-3 p-3 rounded' style={{ width: '18rem' }}>
        <Link to={`/product/${product._id}`}>
          <Card.Img variant="top" src={product.image} />
        </Link>
        <Card.Body>
          <Link to={`/product/${product._id}`}><Card.Title as='h6'>{product.name}</Card.Title></Link>
          <Card.Text as='p'>
            {product.description}
          </Card.Text>
          <Card.Text as='h5'>
            ${product.price}
          </Card.Text>
          <Card.Text as='dev'>
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`} />
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  )
}

export default Product
