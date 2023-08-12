"use client";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Word from "./Word";
import { fetchWordList } from "@/redux/typingTest/typingTestSlice";
import { useEffect } from "react";
import { CircularProgress } from "@mui/material";

const WordList = () => {
  const dispatch = useDispatch();
  const {
    completedCount,
    limits,
    wordList,
    wordClassNames,
    correctTypedWordIndexes,
    wordListType,
  } = useSelector((state) => state.typingTest);

  useEffect(() => {
    dispatch(fetchWordList({ wordListType: wordListType }));
  }, [wordListType]);

  const classNames = ["bg-gray-500", "bg-blue-500", "bg-red-500"];

  const fetchWordListStatus = useSelector(
    (state) => state.typingTest.fetchWordList.status
  );

  return (
    <div className="bg-black text-white flex flex-row justify-center flex-wrap py-3 px-3 rounded-t-lg w-full">
      {fetchWordListStatus == "succeeded" && wordList[0] ? (
        wordList.slice(limits.start, limits.end).map((word, index) => {
          if (index == completedCount - limits.start) {
            // returns the current word
            return (
              <Word
                key={index}
                word={word}
                className={classNames[wordClassNames] + " rounded-lg"}
              />
            );
          } else if (limits.start + index < completedCount) {
            if (correctTypedWordIndexes.includes(limits.start + index)) {
              // returns the current word correct typed words
              return <Word key={index} word={word} className="text-blue-500" />;
            } else {
              return <Word key={index} word={word} className="text-red-500" />;
            }
          } else {
            // returns the normal words
            return <Word key={index} word={word} />;
          }
        })
      ) : fetchWordListStatus == "pending" || fetchWordListStatus == "idle" ? (
        <div className="flex flex-col items-center justify-center w-full">
          <CircularProgress color="inherit" sx={{ width: "100%" }} />
          <div className="text-center ">Loading...</div>
        </div>
      ) : (
        <div>There was a problem, please reload the page.</div>
      )}
    </div>
  );
};

export default WordList;
