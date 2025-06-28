import React from "react";
import photo from "../assets/photo1.jpg";

const Hero = () => {
  return (
    <section
  id="Hero"
  className="min-h-screen pt-25 flex items-center justify-center bg-blue-50 px-6 py-10"
>
  <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-6xl mx-auto">
    {/* Left: Text Section */}
    <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
      <h1 className="text font-medium">Hi, I'm</h1>
      <h1 className="text-3xl font-bold">MOHAMMADSAANI SAYYAD</h1>
      <p className="text-lg mt-4 text-justify">
        An aspiring Data Analyst with a strong foundation in statistics,
        data visualization, and business intelligence tools. Proficient in
        Excel, SQL, Python, and Power BI, with hands-on experience in
        analyzing real-world datasets and deriving actionable insights.
        Passionate about turning raw data into clear, meaningful narratives
        that support decision-making. Eager to apply analytical thinking and
        problem-solving skills in a collaborative, data-driven environment.
      </p>
    </div>

    {/* Right: Image */}
    <div className="md:w-1/2 flex justify-center">
      <img
        src={photo}
        alt="Profile"
  className="w-40 h-40 md:w-100 md:h-100 border object-cover shadow-lg rounded-full"
      />
    </div>
  </div>
</section>

  );
};

export default Hero;
