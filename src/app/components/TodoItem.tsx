import { redirect } from "next/navigation";
import { prisma } from "../db";
import { useRouter } from "next/router";
type TodoItemProps = {
  id: string;
  title: String;
  complete: boolean;
};

// async function deleteTodoItem(id: string) {
//   "use server";
//   await prisma.todo.delete({
//     where: {
//       id: id,
//     },
//   });
// }

export default function TodoItem({ id, title, complete }: TodoItemProps) {
  //const router = useRouter();

  //   const handleDelete = async () => {
  //     try {
  //       await deleteTodoItem(id);
  //     //   router.push("/"); // Navigate to the home page or desired route after deletion
  //     } catch (error) {
  //       console.error("Failed to delete the todo item:", error);
  //       // Handle the error appropriately
  //     }
  //   };

  return (
    <li className="flex items-center justify-between bg-white shadow-md rounded-lg p-4 mb-2">
      <div className="flex items-center">
        <input
          id={id}
          type="checkbox"
          className="cursor-pointer peer form-checkbox h-5 w-5 text-blue-600 rounded border-gray-300"
        />
        <label
          htmlFor={id}
          className="ml-2 peer-checked:line-through text-gray-800"
        >
          {title}
        </label>
      </div>
      <button className="ml-20 text-red-500 hover:text-red-700 transition-colors duration-150 ease-in-out">
        delete
      </button>
    </li>
  );
}
