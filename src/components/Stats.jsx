"use client";

import { useSelector, useDispatch } from "react-redux";
import Tooltip from "@mui/material/Tooltip";
import { changeWordList } from "@/redux/typingTest/typingTestSlice";

const Stats = () => {
  const {
    WPM,
    timer: { time },
    wordListType,
    fetchWordList: { status },
  } = useSelector((state) => state.typingTest);

  const dispatch = useDispatch();

  return (
    <div className="flex flex-row items-center justify-center relative">
      {status == "succeeded" && (
        <div className="absolute left-0">
          <select
            name="wordListType"
            id="wordListType"
            className="p-1 rounded-lg px-2"
            onChange={(e) => dispatch(changeWordList(e.target.value))}
            value={wordListType}
          >
            <option value="oxford-3000">Oxford 3000</option>
            <option value="words-2000">Common Words 2000</option>
          </select>
        </div>
      )}

      <div className="flex">
        <div className="traingle left"></div>
        <div className="flex bg-black flex-row items-center justify-center">
          <Tooltip title="Time">
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
    </div>
  );
};

export default Stats;
