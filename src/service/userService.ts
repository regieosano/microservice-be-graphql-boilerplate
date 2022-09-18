import * as bcrypt from "bcrypt";
import { User } from "@prisma/client";
import prismaContext from "@src/prisma/prismaContext";

export const getAllUsers = async (): Promise<User[]> => {
  const users = await prismaContext.prisma.user.findMany();
  return users;
};

export const getUserById = async (id: number): Promise<User | null> => {
  const idToNum = Number(id);
  return prismaContext.prisma.user.findUnique({
    where: {
      id: idToNum,
    },
  });
};

export const createUser = async (
  name: string,
  email: string,
  _password: string,
): Promise<User> => {

  const user = await prismaContext.prisma.user.findUnique({
    where: { email: email },
  });
  if (user) {
    throw new Error(`User with email: ${email} already exists`);
  }

  const password = await bcrypt.hash(_password, 10);

  const newUser = await prismaContext.prisma.user.create({
    data: { name, email, password },
  });
  return newUser;
};

export const modifyUser = async (
  id: number,
  name?: string,
  email?: string,
  password?: string,
): Promise<User> => {
  const idToNum = Number(id);
  const user = await prismaContext.prisma.user.findUnique(
   {
     where: { id: idToNum }
   }
  );
  if (!user) {
    throw new Error(`No user found for id: ${id}`);
  }

  let hashedPassword = user.password;

  if (password) {
    hashedPassword = await bcrypt.hash(password, 10);
  }

  if (email) {
    const userByEmail = await prismaContext.prisma.user.findUnique({
      where: { email: email },
    });
    if (userByEmail) {
      throw new Error(`User with email: ${email} already exists`);
    }
  }

  const modifiedUser = await prismaContext.prisma.user.update({
    where: { id: idToNum },
    data: {
      id: idToNum,
      name: name,
      email: email,
      password: hashedPassword,
    },
  });
  return modifiedUser;
};

export const deleteUser = async (id: number): Promise<User> => {
  const idToNum = Number(id);
  const user = await prismaContext.prisma.user.findUnique(
    {
      where: { id: idToNum }
    }
   );
   if (!user) {
    throw new Error(`No user found for id: ${idToNum}`);
   }
   const deletedUser = await prismaContext.prisma.user.delete(
    { 
      where: { 
        id: idToNum
      }
    }
   );
   return deletedUser;
}
