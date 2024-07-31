exports.orderService = (req, res) => {
    const orders = [
      { id: 1, product: "Product 1", quantity: 2 },
      { id: 2, product: "Product 2", quantity: 1 },
      { id: 3, product: "Product 3", quantity: 5 }
    ];
    res.status(200).json(orders);
  };