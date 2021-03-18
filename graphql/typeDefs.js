const { gql } = require("apollo-server-express");

module.exports = gql`
  type User {
    id: ID
    username: String
    password: String
    phone: String
    address: String
    avatar: String
    uid: String
    reviews: [Reviews!]
  }

  type Product {
    id: ID
    name: String
    inStock: Number
    description: String
    numberOfReviews: Number
    price: Float
    ratingsAverage: Number
    reviews: [Review!]
  }

  type Review {
    id: ID
    product: Product!
    user: User!
    content: String
    rating: Number
  }

  type OrderDetail {
    id: ID
    product: Product!
    quantity: Number
    isReviewable: Boolean
  }

  type Order {
    id: ID
    orderDetails: [OrderDetail]!
    status: String
    orderOn: String
  }
`;
