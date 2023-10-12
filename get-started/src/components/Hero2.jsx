import React from "react";

const Hero2 = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="/images/stock/photo-1635805737707-575885ab0820.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h2 className="text-5xl font-bold">Your Productivity, Your Way</h2>
          <p className="py-6">
            Tailor your task management with
            multiple customized lists for work, personal projects, and beyond.
            Elevate precision and focus while closely tracking your progress.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
