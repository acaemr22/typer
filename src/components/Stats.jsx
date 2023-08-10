"use client";

import { useSelector } from "react-redux";
import Tooltip from "@mui/material/Tooltip";

const Stats = () => {
  const {
    WPM,
    timer: { time },
  } = useSelector((state) => state.typingTest);

  return (
    <div className="flex justify-center">
      <div className="traingle left"></div>
      <div className="flex bg-black flex-row items-center justify-center">
        <Tooltip title="time">
          <div className="hover:bg-indigo-800 cursor-pointer select-none text-2xl m-1 text-white p-1 px-2 rounded-lg">
            {time}
          </div>
        </Tooltip>
        <Tooltip title="WPM (Words Per Minute)">
          <div className="hover:bg-indigo-800 cursor-pointer select-none text-2xl m-1 text-white p-1 px-2 rounded-lg">
            {WPM}
          </div>
        </Tooltip>
      </div>
      <div className="traingle right"></div>
    </div>
  );
};

export default Stats;
