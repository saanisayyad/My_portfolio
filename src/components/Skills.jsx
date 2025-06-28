import React from "react";
import { SiJupyter } from "react-icons/si";
import { FaDatabase, FaPython, FaComments, FaFileExcel } from "react-icons/fa";
import PowerBIIcon from "../assets/power-bi.png";

const Skills = () => {
  return (
    <section id="Skills" className="scroll-mt-15 min-h-screen bg-blue-50 px-10 py-10">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold mb-15 tracking-wide underline underline-offset-8">
          SKILLS
        </h2>
      </div>

      <div className="max-w-6xl mx-auto grid gap-6 px-6 sm:grid-cols-2 md:grid-cols-3">
        <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6 flex flex-col items-center text-center">
          <FaDatabase size={36} className="text-blue-700 mb-4" />
          <h3 className="text-xl font-semibold text-blue-900 mb-2">SQL</h3>
          <p className="text-gray-600 text-sm">
            Working with relational databases and writing optimized queries.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6 flex flex-col items-center text-center">
          <img
            src={PowerBIIcon}
            alt="Power BI"
            className="w-8 h-9 hover:scale-110 transition mb-4"
          />{" "}
          <h3 className="text-xl font-semibold text-blue-900 mb-2">Power BI</h3>
          <p className="text-gray-600 text-sm">
            Designing dashboards and visual reports using business data.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6 flex flex-col items-center text-center">
          <SiJupyter size={36} className="text-orange-500 mb-4" />
          <h3 className="text-xl font-semibold text-blue-900 mb-2">
            Jupyter Notebook
          </h3>
          <p className="text-gray-600 text-sm">
            Performing exploratory data analysis using Python notebooks.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6 flex flex-col items-center text-center">
          <FaPython size={36} className="text-yellow-500 mb-4" />
          <h3 className="text-xl font-semibold text-blue-900 mb-2">Python</h3>
          <p className="text-gray-600 text-sm">
            Writing clean scripts for automation, data processing, and logic.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6 flex flex-col items-center text-center">
          <FaFileExcel size={36} className="text-green-600 mb-4" />
          <h3 className="text-xl font-semibold text-blue-900 mb-2">MS Excel</h3>
          <p className="text-gray-600 text-sm">
            Advanced spreadsheet operations with formulas, charts, and pivot
            tables.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6 flex flex-col items-center text-center">
          <FaComments size={36} className="text-blue-500 mb-4" />
          <h3 className="text-xl font-semibold text-blue-900 mb-2">
            Communication Skills
          </h3>
          <p className="text-gray-600 text-sm">
            Strong verbal and written communication for teams and clients.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
