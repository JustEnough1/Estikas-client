import { useState } from "react";

/**
 * Returns an array of word arrays
 * @param wordList - Array of words
 * @param selectionSize - Number of words in each selection
 */
export default function useSelection(
    wordList: TextWithTranslations[],
    selectionSize: number = 10
) {
    // Разбиваем исходный список на подборки слов
    const selectionsList: TextWithTranslations[][] = [];
    for (let index = 0; index < wordList.length; index += selectionSize) {
        selectionsList.push(wordList.slice(index, index + selectionSize));
    }

    const [currentSelection, setCurrentSelection] = useState(selectionsList[0]);
    const [currentSelectionIndex, setCurrentSelectionIndex] = useState(0);

    const nextSelection = () => {
        if (currentSelectionIndex < selectionsList.length - 1) {
            setCurrentSelection(selectionsList[currentSelectionIndex + 1]);
            setCurrentSelectionIndex(currentSelectionIndex + 1);
        } else {
            setCurrentSelection([]);
        }
    };

    return { currentSelection, nextSelection };
}
