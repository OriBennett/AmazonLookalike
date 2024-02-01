import { Card, Link, PropTypes } from "../../imports"
import MessageBox from "./MessageBox"

const OrderSummary = ({ cart, status }) => {

    return (
        <>
            <Card className="mb-3">
                <Card.Header>
                    <Card.Title>
                        Shipping Address
                    </Card.Title>
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        <strong>Name:</strong>
                        {cart.shippingAddress.fullName} <br />
                        <strong>Address:</strong>
                        {cart.shippingAddress.address} <br />
                        <strong>City:</strong>
                        {cart.shippingAddress.city} <br />
                        <strong>Postal Code:</strong>
                        {cart.shippingAddress.postalCode} <br />
                        <strong>Country:</strong>
                        {cart.shippingAddress.country}
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="mb-3">
                <Card.Header>
                    <Card.Title>
                        Payment Method
                    </Card.Title>
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        <strong>Method:</strong>
                        {cart.paymentMethod}
                    </Card.Text>
                    {status === "submitOrder" ? 
                    <Link to="/payment">Edit</Link> :
                     status === "details-unpaid" ?
                      <MessageBox vartiant="danger">Not Paid</MessageBox> :
                      <MessageBox vartiant="success">Paid</MessageBox>
                    }
                </Card.Body>
            </Card>
        </>
    )
}

OrderSummary.propTypes = { cart: PropTypes.object, status: PropTypes.string }
export default OrderSummary