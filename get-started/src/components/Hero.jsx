import React from "react";
const Hero = () => {
  return (
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(https://i.imgur.com/5a1hcZA.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60 hero min-h-screen p-4 md:p-20">
          <div className="hero-content flex-col lg:flex-row items-center justify-center">
            <div>
              <h1 className="mb-5 text-5xl font-bold text-white">
                ProSync: Elevate Your Productivity
              </h1>
              <p className="py-6 text-white">
                Master your time and achieve your goals with ProSync, your
                ultimate productivity companion. Streamline tasks, set
                priorities, and unlock your full potential today!
              </p>
              <div className="text-center">
                <a href='https://productivity-planner-client.vercel.app/signup' className="btn btn-primary">Sign Up</a>
              </div>
            </div>
          </div>
        </div>
      </div>

  );
};

export default Hero;
