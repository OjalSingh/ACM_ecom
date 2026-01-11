const router = require("express").Router();
const auth = require("../middleware/auth");

router.post("/checkout", auth, async (req, res) => {
  const { items, total } = req.body;

  if (!items || !items.length) {
    return res.status(400).json({ message: "Cart is empty" });
  }

  res.status(200).json({
    message: "Order placed successfully",
    total,
    itemsCount: items.length,
    userId: req.user.id,
  });
});

module.exports = router;
