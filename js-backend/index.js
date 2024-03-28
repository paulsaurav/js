require('dotenv').config()
const express = require('express')
const app = express()

const data = {
    "id": 9,
    "title": "Infinix INBOOK",
    "description": "Infinix Inbook X1 Ci3 10th 8GB...",
    "price": 1099,
    "discountPercentage": 11.83,
    "rating": 4.54,
    "stock": 96,
    "brand": "Infinix",
    "category": "laptops",
    "thumbnail": "https://i.dummyjson.com/data/products/9/thumbnail.jpg",
    "images": [
      "https://i.dummyjson.com/data/products/9/1.jpg",
      "https://i.dummyjson.com/data/products/9/2.png",
      "https://i.dummyjson.com/data/products/9/3.png",
      "https://i.dummyjson.com/data/products/9/4.jpg",
      "https://i.dummyjson.com/data/products/9/thumbnail.jpg"
    ]
  }

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
  res.send('Hello Twitter!')
})

app.get('/login', (req, res) => {
    res.send('<h1>Login</h1>')
})

app.get('/data', (req, res) => {
    res.json(data)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})