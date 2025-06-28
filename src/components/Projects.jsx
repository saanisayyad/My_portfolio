import React from "react";

const Projects = () => {
  return (
    <section
      id="Projects"
      className="scroll-mt-15 min-h-screen bg-blue-50 px-10 py-10"
    >
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-6 tracking-wide underline underline-offset-8">
          PROJECTS
        </h1>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mt-10">
        {/* Project 1 */}
        <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-200">
          <h3 className="text-xl font-semibold">
            Big Basket Product Analysis
          </h3>
          <p className="mt-2 text-gray-700">
            Designed an interactive Power BI dashboard to analyze sales
            performance, profit trends, and regional insights for a global
            retail chain.
          </p>
          <p className="mt-2 text-sm text-gray-600">
            <strong>Tools:</strong> Power BI, Excel
          </p>
          <ul className="list-disc list-inside mt-3 text-gray-700 text-sm">
            <li>Cleaned and transformed raw sales data using Power Query.</li>
            <li>Built KPIs and visualizations: Sales, Profit, Top Categories.</li>
            <li>Applied slicers for dynamic regional and time-based filters.</li>
          </ul>
          <div className="mt-4 flex space-x-4">
            <a
              href="/BigBasket.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-500 hover:underline"
            >
              🔗 View Dashboard
            </a>
            <a
              href="https://github.com/saanisayyad/Big-Basket-Product-Analysis"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-700 hover:underline"
            >
              📁 GitHub Repo
            </a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-200">
          <h3 className="text-xl font-semibold">
            COVID-19 Global Impact Analysis
          </h3>
          <p className="mt-2 text-gray-700">
            Analyzed global COVID-19 trends to understand the impact across
            countries using interactive visuals and statistical insights.
          </p>
          <p className="mt-2 text-sm text-gray-600">
            <strong>Tools:</strong> Power BI, Python (Pandas), Jupyter Notebook
          </p>
          <ul className="list-disc list-inside mt-3 text-gray-700 text-sm">
            <li>Processed global COVID data with Pandas.</li>
            <li>
              Visualized daily trends, mortality rates, and recovery ratios.
            </li>
            <li>Highlighted top 10 countries by case count with filters.</li>
          </ul>
          <div className="mt-4 flex space-x-4">
            <a
              href="/Covid19.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-500 hover:underline"
            >
              🔗 View Dashboard
            </a>
            <a
              href="https://github.com/saanisayyad/COVID-19-Global-Impact-Dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-700 hover:underline"
            >
              📁 GitHub Repo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
