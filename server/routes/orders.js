const express = require("express");
const Order = require("../models/Order");
const auth = require("../middleware/auth");

const router = express.Router();

router.post("/checkout", auth, async (req, res) => {
  try {
    const order = await Order.create({
      userId: req.userId,
      items: req.body.items,
      total: req.body.total,
    });
    res.json({ msg: "Order placed", order });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/my-orders", auth, async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.userId });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
