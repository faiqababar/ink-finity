import { Prisma, PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient();

export async function createUser({
  username,
  password,
  isAdmin,
}: Prisma.UserUncheckedCreateInput) {
  await prisma.$connect();

  const user = await prisma.user.create({
    data: {
      username,
      password,
      isAdmin,
    },
  });

  prisma.$disconnect();
  return user;
}

export async function getUsers() {
  await prisma.$connect();

  const users = await prisma.user?.findMany();

  prisma.$disconnect();
  return users ?? [];
}

export async function getUser(id: string) {
  await prisma.$connect();

  const user = await prisma.user?.findFirst({
    where: {
      id,
    },
  });

  prisma.$disconnect();
  return user;
}
