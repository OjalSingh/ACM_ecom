const mongoose = require("mongoose");
const Product = require("./models/Product");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    await Product.insertMany([
      {
        name: "Lip Balm",
        price: 299,
        description: "Moisturizing lip balm with a hint of color",
        image: "https://example.com/lip-balm.jpg"
      },
      {
        name: "Black Leather Tote",
        price: 4999,
        description: "Elegant black leather tote bag, perfect for work or outings",
        image: "https://example.com/black-leather-tote.jpg"
      },
      {
        name: "Chanel No. 5",
        price: 7999,
        description: "Classic Chanel No. 5 perfume, timeless and luxurious",
        image: "https://example.com/chanel-no5.jpg"
      }
    ]);

    console.log("Products added");
    process.exit();
  })
  .catch(err => {
    console.error("Error:", err.message);
    process.exit();
  });
