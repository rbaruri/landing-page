import React from "react";

const Hero1 = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="/images/stock/photo-1635805737707-575885ab0820.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h2 className="text-5xl font-bold">Streamlined Task Management</h2>
          <p className="py-6">
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
