import { Container, Row, Col } from "react-bootstrap"
import Product from './Product'
import products from '../assets/products_and_images/products'


const Products = () => {

  return (
    <Container>
      <Row>
        {products.map(product => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3} >
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Products
