import { useEffect, useState } from "react";

export function useSelection(wordList: word[], selectionSize: number = 5) {
    // Разбиваем исходный список на подборки слов
    const selectionsList: word[][] = [];

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
