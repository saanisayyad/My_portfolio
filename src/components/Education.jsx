import React from "react";

const Education = () => {
  return (
    <section
      id="Education"
      className="scroll-mt-15 min-h-screen bg-blue-50 px-10 py-10"
    >
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-15 tracking-wide underline underline-offset-8">
          EDUCATION
        </h1>
        <div className="max-w-3xl mx-auto space-y-10">
          {/* Engineering */}
          <div className="bg-white shadow-md rounded-xl p-6 border-l-4 border-blue-700">
            <h2 className="text-xl font-semibold">
              Bachelor of Engineering in Computer Science
            </h2>
            <p className="text-gray-700">
              Amrutvahini College of Engineering, Sangamner
            </p>
            <p className="text-sm text-gray-500">2021 – 2025 | CGPA: 7.76</p>
          </div>

          {/* HSC */}
          <div className="bg-white shadow-md rounded-xl p-6 border-l-4 border-blue-700">
            <h2 className="text-xl font-semibold">HSC (12th)</h2>
            <p className="text-gray-700">
              Shri Chhatrapati Junior College of Science
            </p>
            <p className="text-sm text-gray-500">
              2019 – 2021 | Percentage: 85.33%
            </p>
          </div>

          {/* SSC */}
          <div className="bg-white shadow-md rounded-xl p-6 border-l-4 border-blue-700">
            <h2 className="text-xl font-semibold">SSC (10th)</h2>
            <p className="text-gray-700">De Paul English High School</p>
            <p className="text-sm text-gray-500">
              2007 – 2019 | Percentage: 87.20%
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
