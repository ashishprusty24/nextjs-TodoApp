import React from "react";

const Todo = ({
  title,
  description,
  complete,
  id,
  mongoId,
  deleteTodo,
  updateTodo,
}) => {
  console.log(mongoId);
  return (
    <>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th
          scope="row"
          className="px-6 py-4 font-medium whitespace-nowrap dark:text-white text-purple-500"
        >
          {id}
        </th>
        <td className={` ${complete ? "line-through" : ""} px-6 py-4`}>
          {title}
        </td>
        <td className={` ${complete ? "line-through" : ""} px-6 py-4`}>
          {" "}
          {description}{" "}
        </td>
        <td className={` ${complete ? "line-through" : ""} px-6 py-4`}>
          {complete ? "Complete" : "InComplete"}
        </td>
        <td className={` ${complete ? "line-through" : ""} px-6 py-4`}>
          <button
            onClick={() => deleteTodo(mongoId)}
            className="bg-green-500 text-white px-12 py-2 hover:bg-green-700 duration-300 transition-all"
          >
            Delete
          </button>
          {!complete && (
            <button
              onClick={() => updateTodo(mongoId)}
              className="bg-purple-500 text-white px-12 py-2 hover:bg-purple-700 duration-300 transition-all"
            >
              Update
            </button>
          )}
        </td>
      </tr>
    </>
  );
};

export default Todo;
