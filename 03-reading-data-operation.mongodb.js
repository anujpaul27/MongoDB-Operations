use('e-commerce')

// Filter by Field
// db.products.find({ category: "Electronics" }).toArray()

// Using Comparison Operators
//db.products.find({price:{$gt:3000}})

// Logical Operators
//db.products.find({$or: [{ category: "Electronics" }, { stock: { $lt: 50 } } ]})

// Projection (Select Specific Fields)
// db.products.find({},{name:1,price:1,_id: 0})


// Sorting and Limiting
db.products.find().sort({price:1,}).limit(2)
