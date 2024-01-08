"use client";
import Navbar from "@/component/Navbar";
import Todo from "@/component/Todo";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function Home() {
  const [todo, setTodo] = useState({
    title: "",
    description: "",
  });

  const [allTodos, setAllTodos] = useState([]);

  const setTitle = (e) => {
    setTodo({ ...todo, ["title"]: e.target.value });
  };

  const setDescriptions = (e) => {
    setTodo({ ...todo, ["description"]: e.target.value });
  };

  const fetchTodos = async () => {
    try {
      const response = await axios.get("/api");
      setAllTodos(response.data.todos);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const reset = () => {
    setTodo({
      title: "",
      description: "",
    });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      // api code
      const response = await axios.post("/api", todo);
      await fetchTodos();
      toast.success(response.data.msg);
      reset();
    } catch (error) {
      toast.error(error);
      console.log(error);
    }
  };

  const deleteTodo = async (id) => {
    alert(id);
    try {
      const response = await axios.delete(`/api`, {
        params: {
          id: id,
        },
      });

      toast.success("Delete message successfully");
      await fetchTodos();
    } catch (error) {
      toast.error(error);
      console.log(error);
    }
  };

  const updateTodo = async (id) => {
    try {
      const response = await axios.put(
        `/api`,
        {},
        {
          params: {
            id: id,
          },
        }
      );

      toast.success("update message successfully");
      await fetchTodos();
    } catch (error) {
      toast.error(error);
      console.log(error);
    }
  };

  return (
    <>
      <section className="w-full md:w-[70%] mx-auto py-24 px-2">
        <form onSubmit={onSubmitHandler}>
          <div className="mb-3">
            <input
              type="text"
              className="w-full px-3 py-2 h-10 outline-none border-2 border-purple-500"
              placeholder="Enter Title"
              value={todo.title}
              onChange={setTitle}
            />
          </div>
          <div className="mb-3">
            <textarea
              className="w-full px-3 py-2  outline-none border-2
            border-purple-500"
              placeholder="Enter Descriptions"
              rows={"8"}
              value={todo.description}
              onChange={setDescriptions}
            ></textarea>
          </div>
          <div className="mb-3">
            <button className="bg-purple-500 text-white px-12 py-2 hover:bg-purple-700 duration-300 transition-all">
              Add todo
            </button>
          </div>
        </form>

        <div className="py-10">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Id
                </th>
                <th scope="col" className="px-6 py-3">
                  Title
                </th>
                <th scope="col" className="px-6 py-3">
                  Descriptions
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {allTodos.length > 0 &&
                allTodos.map((item, index) => {
                  return (
                    <Todo
                      key={index + 1}
                      id={index + 1}
                      title={item.title}
                      description={item.description}
                      complete={item.isComplete}
                      mongoId={item._id}
                      deleteTodo={deleteTodo}
                      updateTodo={updateTodo}
                    />
                  );
                })}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
