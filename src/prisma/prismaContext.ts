import { IPrismaContext } from "@src/prisma/IPrismaContext";
import prisma from "@src/lib/prisma/prismaClient";

const prismaContext: IPrismaContext = {
  prisma,
};

export default prismaContext;
