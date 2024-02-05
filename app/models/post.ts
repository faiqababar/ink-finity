import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createPost(input: Prisma.PostUncheckedCreateInput) {
  await prisma.$connect();

  const post = await prisma.post.create({
    data: {
      title: input.title,
      markdown: input.markdown,
      image: input.image,
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

export async function getPosts() {
  await prisma.$connect();

  const posts = await prisma.post.findMany();
  if (!posts.length) return null;

  prisma.$disconnect();

  return posts;
}
