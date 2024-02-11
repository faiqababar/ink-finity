import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createPost(input: Prisma.PostUncheckedCreateInput) {
  await prisma.$connect();

  const post = await prisma.post.create({
    data: {
      title: input.title,
      markdown: input.markdown,
      image: input.image,
      categories: input.categories,
    },
  });

  prisma.$disconnect();
  return getPost(post.id);
}

export async function getPost(id: string) {
  await prisma.$connect();

  const post = await prisma.post.findFirst({
    where: {
      id,
    },
  });
  if (!post) return null;

  prisma.$disconnect();

  return post;
}

export async function deletePost(id: string) {
  await prisma.$connect();

  await prisma.post.delete({
    where: {
      id,
    },
  });

  prisma.$disconnect();
}

export async function getPosts() {
  await prisma.$connect();

  const posts = await prisma.post.findMany({
    take: 20,
    orderBy: {
      createdAt: "desc",
    },
  });
  if (!posts.length) return null;

  prisma.$disconnect();

  return posts;
}
