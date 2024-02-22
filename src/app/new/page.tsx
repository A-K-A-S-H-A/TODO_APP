import { prisma } from "../db";
import { redirect } from "next/navigation";
import Link from "next/link";

async function createTodo(data: FormData) {
  "use server";

  const title = data.get("title")?.valueOf();
  if (typeof title !== "string" || title.length === 0) {
    throw new Error("Invalid Title");
  }

  await prisma.todo.create({ data: { title, complete: false } });
  redirect("/");
}

export default function Page() {
  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">New Todo</h1>
      </header>
      <form action={createTodo} className="flex gap-4 flex-col">
        <input
          type="text"
          name="title"
          className="border border-slate-400 bg-transparent rounded px-3 py-2 outline-none focus:border-blue-500"
        />
        <div className="flex gap-2 justify-end">
          <Link
            href=".."
            className="inline-block border border-slate-400 text-white bg-slate-500 px-3 py-2 rounded hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="border border-blue-500 text-white bg-blue-500 px-3 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
          >
            Create
          </button>
        </div>
      </form>
    </>
  );
}
