const { gql } = require("apollo-server");

exports.typeDefs = gql`
  type Query {
    # hello: String! # return only a string and not a null value
    # returns a string or null
    hello: String
    numberOfAnimals: Int
    price: Float
    cool: Boolean
    statement: [String] #returns array of strings or array can hold a null value
    # statement: [String!] #same as array or string but can not have null within the array but can return null instead of an array
    # statement: [String!]! #can not return null with in the aaray or instead of an array
    products(
      filter: ProductsFilterInput
      avgRating: ProductsFilterInput
    ): [Product!]!
    product(id: ID!): Product
    categories: [Category!]!
    category(id: ID!): Category
  }

  type Mutation {
    addCategory(input: AddCategoryInput!): Category!
  }

  type Product {
    id: ID!
    name: String!
    description: String!
    quantity: Int!
    image: String!
    price: Float!
    onSale: Boolean!
    category: Category
    reviews: [Review!]!
  }

  type Category {
    id: ID!
    name: String!
    products(filter: ProductsFilterInput): [Product!]!
  }

  type Review {
    id: ID!
    date: String!
    title: String!
    comment: String!
    rating: Int!
  }

  input ProductsFilterInput {
    onSale: Boolean
    avgRating: Int
  }

  input AddCategoryInput {
    name: String!
  }
`;
