import React from "react";

const Hero1 = () => {
  return (
    <div className="hero min-h-screen bg-base-200 px-20">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="https://i.imgur.com/Xqx80C5.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h2 className="text-5xl font-bold mx-10">Streamlined Task Management</h2>
          <p className="py-6 mx-10">
            Effortlessly add, edit, and organize
            tasks in the productivity planner for a seamless workflow.
            Categorize tasks as "To-Do," "Doing," and "Done" with ease.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero1;
