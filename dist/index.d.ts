import { JSX } from 'react/jsx-runtime';

declare const charactersByGroup: {
    readonly hiragana_basic: KanaChar[];
    readonly hiragana_dakuten: KanaChar[];
    readonly hiragana_combination: KanaChar[];
    readonly katakana_basic: KanaChar[];
    readonly katakana_dakuten: KanaChar[];
    readonly katakana_combination: KanaChar[];
};

export declare type CharGroup = keyof typeof charactersByGroup;

export declare interface CharProgress {
    srsLevel: SRSLevel;
    correctCount: number;
    incorrectCount: number;
    lastReview?: number;
    nextReview?: number;
}

export declare function JPNLearning(): JSX.Element;

export declare interface KanaChar {
    id: string;
    kana: string;
    romaji: string;
    type: 'hiragana' | 'katakana';
    category: 'basic' | 'dakuten' | 'combination';
    row: string;
}

export declare type ProgressMap = Record<string, CharProgress>;

export declare type SRSLevel = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export declare type StudySelection = {
    hiragana_basic: boolean;
    hiragana_dakuten: boolean;
    hiragana_combination: boolean;
    katakana_basic: boolean;
    katakana_dakuten: boolean;
    katakana_combination: boolean;
};

export { }
