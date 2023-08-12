"use client";

import { useSelector } from "react-redux";
import React from "react";

const Result = () => {
  const results = useSelector((state) => state.typingTest.results);
  return (
    <section className="bg-gray-100 w-full py-10">
      {results[0] ? (
        <div className="flex flex-row justify-evenly flex-wrap w-full gap-5 py-10 px-10">
          {results.map((result, index) => (
            <div
              key={index}
              className="bg-white flex w-[280px] flex-col overflow-clip rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-200"
            >
              <div className="bg-blue-600 text-white flex flex-row p-1 px-3">
                <span>Results</span>
              </div>
              <div className="divide-y-2 flex flex-col pb-2">
                <div className="flex flex-col items-center justify-center p-2 py-8">
                  <span className="text-green-700 font-bold text-4xl">
                    {result.wpm} WPM
                  </span>
                  <span>(Words Per Minute)</span>
                </div>
                <div className="flex flex-row items-center justify-between p-2 px-5">
                  <span>Accuracy</span>
                  <span className="font-bold">{result.accuracy}%</span>
                </div>
                <div className="flex flex-row items-center justify-between p-2 px-5">
                  <span>Correct Words</span>
                  <span className="text-green-600 font-bold">
                    {result.correctNum}
                  </span>
                </div>
                <div className="flex flex-row items-center justify-between p-2 px-5">
                  <span>Wrong Words</span>
                  <span className="text-red-600 font-bold">
                    {result.wrongNum}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center w-full italic text-gray-400 font-semibold ">
          There aren't any results to show.
        </div>
      )}
    </section>
  );
};

export default Result;
