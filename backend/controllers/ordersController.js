const addOrder = async (req, res) => {
    const newOrder = new Order({
        orderItems: req.body.orderItems.map((item) => ({ ...item, product: item._id })),
        shippingAddress: req.body.shippingAddress,
        paymentMethod: req.body.paymentMethod,
        itemsPrice: req.body.itemsPrice,
        shippingPrice: req.body.shippingPrice,
        taxPrice: req.body.taxPrice,
        totalPrice: req.body.totalPrice,
        user: req.user._id
    })
};