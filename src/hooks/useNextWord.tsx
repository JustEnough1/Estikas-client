import React, { useEffect, useState } from "react";

export default function useNextWord(wordList: word[]) {
    let [currentWord, setCurrentWord] = useState(wordList[0]);
    let [currentWordList, setCurrentWordList] = useState<word[]>(wordList);

    useEffect(() => {
        setCurrentWordList(wordList);
        setCurrentWord(wordList[0]);
        return () => {};
    }, [wordList]);

    const nextWord = (remembered: boolean) => {
        setCurrentWordList((prevWordList) => {
            const updatedWordList = remembered
                ? prevWordList.filter((word) => word !== currentWord)
                : [...prevWordList];

            const currentIndex = updatedWordList.indexOf(currentWord);

            const nextIndex =
                updatedWordList.length > 0
                    ? (currentIndex + 1) % updatedWordList.length
                    : 0;

            const nextWord =
                nextIndex < updatedWordList.length
                    ? updatedWordList[nextIndex]
                    : updatedWordList[0];

            if (nextWord) setCurrentWord(nextWord);

            return updatedWordList;
        });
    };

    return { currentWord, nextWord };
}
