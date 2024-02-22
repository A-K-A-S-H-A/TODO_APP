import Image from "next/image";
import Link from "next/link";
import { prisma } from "./db";
import TodoItem from "./components/TodoItem";

// funtion getTodos(){
//   return prisma.todo.findMany
// }

export default async function Home() {
  // await prisma.todo.create({
  //   data: {
  //     title: "Complete Coding",
  //     complete: true,
  //   },
  // });
  const todos = await prisma.todo.findMany();
  return (
    <>
      <header className="bg-blue-500 text-white p-4 flex justify-between items-center shadow-md">
        <h1 className="text-xl md:text-2xl font-bold">TO DO LIST</h1>
        <Link href="/new">New</Link>
      </header>

      <ul>
        {todos.map((todo) => (
          // <li key={todo.id}>{todo.title}</li>

          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
    </>
  );
}
