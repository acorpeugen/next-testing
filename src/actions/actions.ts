'use server';
import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';

/* Prisma */
export async function getClient() {
  const client = new PrismaClient();
  await client.$connect();
  return client;
}

/* Prisma GET a list of Todos */
export async function getTodos() {
  const data = await getClient();
  const todos = data.todo.findMany({
    select: {
      description: true,
      id: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
  return todos;
}

/* JSONPlaceholder GET a list of todos */
// const BASE_URL = 'https://jsonplaceholder.typicode.com/';
// export async function getTodos() {
//   const response = await fetch(`${BASE_URL}todos`);
//   const todos = await response.json();
//   return todos;
// }

export async function addTodo(formData: FormData) {
  const description = formData.get('description') as string;
  const client = await getClient();

  await client.todo.create({
    data: {
      description,
    },
  });
  revalidatePath('/');
}
