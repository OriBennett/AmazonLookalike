import { Col, Link, ListGroup, PropTypes, Row } from "../../imports";
import MessageBox from "../Shared/MessageBox";

const ItemsInCart = ({ cartItems, updateCartHandler }) => {
  return (
    <div>
      {cartItems.length === 0 ? (
        <MessageBox>
          Your cart is empty. <Link to="/">Go back to home page.</Link>
        </MessageBox>
      ) : (
        <ListGroup>
            {cartItems.map((item) =>(
                <ListGroup.Item key={item._id}>
                    <Row>
                        <Col md={8}><img src={item.image} alt={item.title} className="img-fluid rounded img-thumbnail"/><Link to={`/products/${item.token}`}>{item.title}</Link></Col>
                        <Col md={2}></Col>
                        <Col md={1}></Col>
                        <Col md={1}></Col>
                    </Row>
                </ListGroup.Item>
            ))}
        </ListGroup>
      )}
    </div>
  );
};
ItemsInCart.propTypes = {
  cartItems: PropTypes.array,
  updateCartHandler: PropTypes.func,
};
export default ItemsInCart;
