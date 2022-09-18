import { gql } from "apollo-server";

const typeDefs = gql`
	extend type Query {
  """Get all users query"""
  users: [User]

  """Get a user query"""
  user(input: GetUserByIdInput): User!
}

"""A user of the application"""
type User @key(fields: "id") {
  """ID of the user"""
  id: ID!

  """Name of the user"""
  name: String

  """Unique email address of the user"""
  email: String!

  """Password of the user"""
  password: String!
}

"""Get user by ID input"""
input GetUserByIdInput {
  """User ID"""
  id: ID!
}

extend type Mutation {
  """Create user"""
  createUser(input: CreateUserInput): User

  """Modify user"""
  modifyUser(input: ModifyUserInput): User

  """Delete user"""
  deleteUser(input: DeleteUserInput): User
}

"""Create user input"""
input CreateUserInput {
  """User name"""
  name: String!

  """Email address"""
  email: String!

  """User password"""
  password: String!
}

"""Modify user input"""
input ModifyUserInput {
  """User ID"""
  id: ID!

  """User name"""
  name: String

  """Email address"""
  email: String

  """User password"""
  password: String
}

"""Delete user input"""
input DeleteUserInput {
  """User ID"""
  id: ID!
}
`;

export default typeDefs;