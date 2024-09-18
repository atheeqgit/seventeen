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
    <div className="flex flex-col gap-2 mt-5 justify-center items-center mb-4">
      <div className="w-full flex flex-row gap-4 justify-between items-center mb-3 md:mb-6">
        <h4 className="text-2xl md:text-4xl font-medium capitalize">
          Todo guarantees
        </h4>
      </div>

      {/* Scrollable container */}
      <div className="todoG-scroll-container flex gap-5 overflow-x-auto w-full px-4">
        {Gdata.map((data, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-1/3 md:w-1/6 lg:w-1/6 gap-4"
          >
            <img
              src={data}
              className="rounded-xl shadow-lg w-full h-auto"
              alt="guarantee"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoG;
