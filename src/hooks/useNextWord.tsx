import React, { useEffect, useState } from "react";

/**
 * Returns the current word, method to get the next word and remembered words count.
 * @param wordList - Selection of words
 */
export default function useNextWord(wordList: {
    currentSelection: TextWithTranslations[];
    nextSelection: () => void;
}) {
    let [currentWord, setCurrentWord] = useState<TextWithTranslations | null>(
        wordList.currentSelection[0]
    );
    let [currentSelection, setCurrentSelection] = useState([
        ...wordList.currentSelection,
    ]);
    let [currentWordIndex, setCurrentWordIndex] = useState(0);

    // Обновляем подборку слов
    useEffect(() => {
        if (wordList.currentSelection.length === 0) {
            setCurrentWord(null);
        } else {
            setCurrentSelection([...wordList.currentSelection]);
            setCurrentWord(wordList.currentSelection[0]);
        }
        return () => {};
    }, [wordList.currentSelection]);

    useEffect(() => {
        if (!(currentSelection.length === 0)) return;
        wordList.nextSelection();

        return () => {};
    }, [currentSelection]);

    // Удаляем запомненое слово
    const removeWordFromSelection = () => {
        const temp = [...currentSelection];
        temp.splice(currentWordIndex, 1);

        if (currentWordIndex === temp.length) {
            setCurrentWord(temp[0]);
            setCurrentWordIndex(0);
        } else {
            setCurrentWord(temp[currentWordIndex]);
        }

        setCurrentSelection([...temp]);
    };

    // Устанавливаем следующее слово
    const nextWord = (remembered: boolean) => {
        if (remembered) return removeWordFromSelection();

        if (currentWordIndex + 1 < currentSelection.length) {
            setCurrentWord(currentSelection[currentWordIndex + 1]);
            setCurrentWordIndex(currentWordIndex + 1);
        } else {
            setCurrentWord(currentSelection[0]);
            setCurrentWordIndex(0);
        }
    };

    return {
        currentWord,
        nextWord,
        rememberedWordsCount:
            wordList.currentSelection.length - currentSelection.length,
    };
}
