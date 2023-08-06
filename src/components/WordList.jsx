"use client";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Word from "./Word";
import {
  fetchWordList,
} from "@/redux/typingTest/typingTestSlice";
import { useEffect } from "react";

const WordList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchWordList({ wordListType: "words-2000" }));
  }, []);

  const {
    completedCount,
    limits,
    wordList,
    fetchWordListStatus,
  } = useSelector((state) => state.typingTest);

  return (
    <div className="bg-black text-white flex flex-row justify-center flex-wrap py-3 px-3 rounded-t-lg">
      {fetchWordListStatus !== "failed" ? (
        wordList.slice(limits.start, limits.end).map((word, index) => {
          if (index == completedCount - limits.start) {
            return <Word word={word} className="bg-gray-400 rounded-lg" />;
          } else return <Word word={word} className="" />;
        })
      ) : (
        <div>There was a problem, please reload the page.</div>
      )}
    </div>
  );
};

export default WordList;
