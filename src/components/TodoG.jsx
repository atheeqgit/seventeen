import React from "react";

const Gdata = [
  "/todo-g-1.jpeg",
  "/todo-g-2.jpeg",
  "/todo-g-3.jpeg",
  "/todo-g-4.jpeg",
  "/todo-g-5.jpeg",
];

const TodoG = () => {
  return (
    <div className=" flex flex-col gap-2 mt-5 justify-center items-center mb-4">
      <div className=" w-full flex flex-row gap-4 justify-between items-center mb-3 md:mb-6">
        <h4 className="text-2xl md:text-4xl font-medium capitalize">
          Todo gaurentees
        </h4>
      </div>
      <div className="grid gap-5 grid-cols-6 ">
        {Gdata.map((data, idx) => {
          return (
            <div
              key={idx}
              className="col-span-2 md:col-span-1 lg:col-span-1 gap-4"
            >
              <img src={data} className="rounded-xl shadow-lg" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TodoG;
