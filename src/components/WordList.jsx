"use client";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Word from "./Word";
import { fetchWordList } from "@/redux/typingTest/typingTestSlice";
import { useEffect } from "react";

const WordList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchWordList({ wordListType: "words-2000" }));
  }, []);

  const classNames = ["bg-gray-500", "bg-blue-500", "bg-red-500"];

  const {
    completedCount,
    limits,
    wordList,
    wordClassNames,
    correctTypedWordIndexes,
  } = useSelector((state) => state.typingTest);

  const fetchWordListStatus = useSelector(
    (state) => state.typingTest.fetchWordList.status
  );

  return (
    <div className="bg-black text-white flex flex-row justify-center flex-wrap py-3 px-3 rounded-t-lg w-full">
      {fetchWordListStatus !== "failed" ? (
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
      ) : (
        <div>There was a problem, please reload the page.</div>
      )}
    </div>
  );
};

export default WordList;
