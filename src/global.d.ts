type TextWithTranslations = { estonian: string; russian: string };

type WordSelection = {
    id: string;
    category: string;
    title: string;
    description: string;
    level: SelectionLevel;
    tags: string[];
};

type SelectionLevel = "easy" | "medium" | "hard";
