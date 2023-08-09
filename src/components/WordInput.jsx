"use client";

import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { handleInputChange } from "@/redux/typingTest/typingTestSlice";

const WordInput = () => {
  const dispatch = useDispatch();
  const val = useSelector((state) => state.typingTest.input);

  return (
    <div className="flex items-center justify-center py-5">
      <input
        className="border-slate border rounded-lg px-2 py-1"
        type="text"
        value={val}
        onChange={(e) => dispatch(handleInputChange({ input: e.target.value }))}
      />
    </div>
  );
};

export default WordInput;
