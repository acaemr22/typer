"use client";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  handleInputChange,
  fetchWordList,
  decreaseTimer,
  handleFinish,
  changeIntervalId,
} from "@/redux/typingTest/typingTestSlice";

const WordInput = () => {
  const {
    input,
    intervalId,
    timer: { status },
    wordListType,
  } = useSelector((state) => state.typingTest);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "pending") {
      handleInterval();
    } else if (status === "finished") {
      dispatch(handleFinish());
      handleClick();
    }
  }, [status]);

  const handleInterval = () => {
    const intervalId = setInterval(() => {
      dispatch(decreaseTimer());
    }, 1000);
    dispatch(changeIntervalId(intervalId));
  };

  const handleClick = () => {
    clearInterval(intervalId);
    dispatch(fetchWordList({ wordListType: wordListType }));
  };

  const handleInput = (e) => {
    dispatch(handleInputChange({ input: e.target.value }));
  };

  return (
    <div className="flex items-center justify-center bg-gray-200 rounded-b-lg pr-2 gap-x-3">
      <input
        className="border-slate border outline-none rounded-b-lg w-full px-2 py-1"
        type="text"
        value={input}
        onChange={(e) => handleInput(e)}
      />
      <button onClick={handleClick}>Restart</button>
    </div>
  );
};

export default WordInput;
