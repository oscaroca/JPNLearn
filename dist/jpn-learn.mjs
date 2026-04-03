import { jsxs as n, jsx as a, Fragment as P } from "react/jsx-runtime";
import { useState as h, useCallback as A, useRef as aa, useEffect as F } from "react";
const ea = [
  // Vowels
  { id: "h_a", kana: "あ", romaji: "a", type: "hiragana", category: "basic", row: "vowel" },
  { id: "h_i", kana: "い", romaji: "i", type: "hiragana", category: "basic", row: "vowel" },
  { id: "h_u", kana: "う", romaji: "u", type: "hiragana", category: "basic", row: "vowel" },
  { id: "h_e", kana: "え", romaji: "e", type: "hiragana", category: "basic", row: "vowel" },
  { id: "h_o", kana: "お", romaji: "o", type: "hiragana", category: "basic", row: "vowel" },
  // K row
  { id: "h_ka", kana: "か", romaji: "ka", type: "hiragana", category: "basic", row: "k" },
  { id: "h_ki", kana: "き", romaji: "ki", type: "hiragana", category: "basic", row: "k" },
  { id: "h_ku", kana: "く", romaji: "ku", type: "hiragana", category: "basic", row: "k" },
  { id: "h_ke", kana: "け", romaji: "ke", type: "hiragana", category: "basic", row: "k" },
  { id: "h_ko", kana: "こ", romaji: "ko", type: "hiragana", category: "basic", row: "k" },
  // S row
  { id: "h_sa", kana: "さ", romaji: "sa", type: "hiragana", category: "basic", row: "s" },
  { id: "h_shi", kana: "し", romaji: "shi", type: "hiragana", category: "basic", row: "s" },
  { id: "h_su", kana: "す", romaji: "su", type: "hiragana", category: "basic", row: "s" },
  { id: "h_se", kana: "せ", romaji: "se", type: "hiragana", category: "basic", row: "s" },
  { id: "h_so", kana: "そ", romaji: "so", type: "hiragana", category: "basic", row: "s" },
  // T row
  { id: "h_ta", kana: "た", romaji: "ta", type: "hiragana", category: "basic", row: "t" },
  { id: "h_chi", kana: "ち", romaji: "chi", type: "hiragana", category: "basic", row: "t" },
  { id: "h_tsu", kana: "つ", romaji: "tsu", type: "hiragana", category: "basic", row: "t" },
  { id: "h_te", kana: "て", romaji: "te", type: "hiragana", category: "basic", row: "t" },
  { id: "h_to", kana: "と", romaji: "to", type: "hiragana", category: "basic", row: "t" },
  // N row
  { id: "h_na", kana: "な", romaji: "na", type: "hiragana", category: "basic", row: "n" },
  { id: "h_ni", kana: "に", romaji: "ni", type: "hiragana", category: "basic", row: "n" },
  { id: "h_nu", kana: "ぬ", romaji: "nu", type: "hiragana", category: "basic", row: "n" },
  { id: "h_ne", kana: "ね", romaji: "ne", type: "hiragana", category: "basic", row: "n" },
  { id: "h_no", kana: "の", romaji: "no", type: "hiragana", category: "basic", row: "n" },
  // H row
  { id: "h_ha", kana: "は", romaji: "ha", type: "hiragana", category: "basic", row: "h" },
  { id: "h_hi", kana: "ひ", romaji: "hi", type: "hiragana", category: "basic", row: "h" },
  { id: "h_fu", kana: "ふ", romaji: "fu", type: "hiragana", category: "basic", row: "h" },
  { id: "h_he", kana: "へ", romaji: "he", type: "hiragana", category: "basic", row: "h" },
  { id: "h_ho", kana: "ほ", romaji: "ho", type: "hiragana", category: "basic", row: "h" },
  // M row
  { id: "h_ma", kana: "ま", romaji: "ma", type: "hiragana", category: "basic", row: "m" },
  { id: "h_mi", kana: "み", romaji: "mi", type: "hiragana", category: "basic", row: "m" },
  { id: "h_mu", kana: "む", romaji: "mu", type: "hiragana", category: "basic", row: "m" },
  { id: "h_me", kana: "め", romaji: "me", type: "hiragana", category: "basic", row: "m" },
  { id: "h_mo", kana: "も", romaji: "mo", type: "hiragana", category: "basic", row: "m" },
  // Y row
  { id: "h_ya", kana: "や", romaji: "ya", type: "hiragana", category: "basic", row: "y" },
  { id: "h_yu", kana: "ゆ", romaji: "yu", type: "hiragana", category: "basic", row: "y" },
  { id: "h_yo", kana: "よ", romaji: "yo", type: "hiragana", category: "basic", row: "y" },
  // R row
  { id: "h_ra", kana: "ら", romaji: "ra", type: "hiragana", category: "basic", row: "r" },
  { id: "h_ri", kana: "り", romaji: "ri", type: "hiragana", category: "basic", row: "r" },
  { id: "h_ru", kana: "る", romaji: "ru", type: "hiragana", category: "basic", row: "r" },
  { id: "h_re", kana: "れ", romaji: "re", type: "hiragana", category: "basic", row: "r" },
  { id: "h_ro", kana: "ろ", romaji: "ro", type: "hiragana", category: "basic", row: "r" },
  // W row
  { id: "h_wa", kana: "わ", romaji: "wa", type: "hiragana", category: "basic", row: "w" },
  { id: "h_wo", kana: "を", romaji: "wo", type: "hiragana", category: "basic", row: "w" },
  // N
  { id: "h_n", kana: "ん", romaji: "n", type: "hiragana", category: "basic", row: "n_standalone" }
], na = [
  // G row (k+dakuten)
  { id: "h_ga", kana: "が", romaji: "ga", type: "hiragana", category: "dakuten", row: "g" },
  { id: "h_gi", kana: "ぎ", romaji: "gi", type: "hiragana", category: "dakuten", row: "g" },
  { id: "h_gu", kana: "ぐ", romaji: "gu", type: "hiragana", category: "dakuten", row: "g" },
  { id: "h_ge", kana: "げ", romaji: "ge", type: "hiragana", category: "dakuten", row: "g" },
  { id: "h_go", kana: "ご", romaji: "go", type: "hiragana", category: "dakuten", row: "g" },
  // Z row (s+dakuten)
  { id: "h_za", kana: "ざ", romaji: "za", type: "hiragana", category: "dakuten", row: "z" },
  { id: "h_ji", kana: "じ", romaji: "ji", type: "hiragana", category: "dakuten", row: "z" },
  { id: "h_zu", kana: "ず", romaji: "zu", type: "hiragana", category: "dakuten", row: "z" },
  { id: "h_ze", kana: "ぜ", romaji: "ze", type: "hiragana", category: "dakuten", row: "z" },
  { id: "h_zo", kana: "ぞ", romaji: "zo", type: "hiragana", category: "dakuten", row: "z" },
  // D row (t+dakuten)
  { id: "h_da", kana: "だ", romaji: "da", type: "hiragana", category: "dakuten", row: "d" },
  { id: "h_di", kana: "ぢ", romaji: "di", type: "hiragana", category: "dakuten", row: "d" },
  { id: "h_du", kana: "づ", romaji: "du", type: "hiragana", category: "dakuten", row: "d" },
  { id: "h_de", kana: "で", romaji: "de", type: "hiragana", category: "dakuten", row: "d" },
  { id: "h_do", kana: "ど", romaji: "do", type: "hiragana", category: "dakuten", row: "d" },
  // B row (h+dakuten)
  { id: "h_ba", kana: "ば", romaji: "ba", type: "hiragana", category: "dakuten", row: "b" },
  { id: "h_bi", kana: "び", romaji: "bi", type: "hiragana", category: "dakuten", row: "b" },
  { id: "h_bu", kana: "ぶ", romaji: "bu", type: "hiragana", category: "dakuten", row: "b" },
  { id: "h_be", kana: "べ", romaji: "be", type: "hiragana", category: "dakuten", row: "b" },
  { id: "h_bo", kana: "ぼ", romaji: "bo", type: "hiragana", category: "dakuten", row: "b" },
  // P row (h+handakuten)
  { id: "h_pa", kana: "ぱ", romaji: "pa", type: "hiragana", category: "dakuten", row: "p" },
  { id: "h_pi", kana: "ぴ", romaji: "pi", type: "hiragana", category: "dakuten", row: "p" },
  { id: "h_pu", kana: "ぷ", romaji: "pu", type: "hiragana", category: "dakuten", row: "p" },
  { id: "h_pe", kana: "ぺ", romaji: "pe", type: "hiragana", category: "dakuten", row: "p" },
  { id: "h_po", kana: "ぽ", romaji: "po", type: "hiragana", category: "dakuten", row: "p" }
], ra = [
  // kya/kyu/kyo
  { id: "h_kya", kana: "きゃ", romaji: "kya", type: "hiragana", category: "combination", row: "ky" },
  { id: "h_kyu", kana: "きゅ", romaji: "kyu", type: "hiragana", category: "combination", row: "ky" },
  { id: "h_kyo", kana: "きょ", romaji: "kyo", type: "hiragana", category: "combination", row: "ky" },
  // sha/shu/sho
  { id: "h_sha", kana: "しゃ", romaji: "sha", type: "hiragana", category: "combination", row: "sh" },
  { id: "h_shu", kana: "しゅ", romaji: "shu", type: "hiragana", category: "combination", row: "sh" },
  { id: "h_sho", kana: "しょ", romaji: "sho", type: "hiragana", category: "combination", row: "sh" },
  // cha/chu/cho
  { id: "h_cha", kana: "ちゃ", romaji: "cha", type: "hiragana", category: "combination", row: "ch" },
  { id: "h_chu", kana: "ちゅ", romaji: "chu", type: "hiragana", category: "combination", row: "ch" },
  { id: "h_cho", kana: "ちょ", romaji: "cho", type: "hiragana", category: "combination", row: "ch" },
  // nya/nyu/nyo
  { id: "h_nya", kana: "にゃ", romaji: "nya", type: "hiragana", category: "combination", row: "ny" },
  { id: "h_nyu", kana: "にゅ", romaji: "nyu", type: "hiragana", category: "combination", row: "ny" },
  { id: "h_nyo", kana: "にょ", romaji: "nyo", type: "hiragana", category: "combination", row: "ny" },
  // hya/hyu/hyo
  { id: "h_hya", kana: "ひゃ", romaji: "hya", type: "hiragana", category: "combination", row: "hy" },
  { id: "h_hyu", kana: "ひゅ", romaji: "hyu", type: "hiragana", category: "combination", row: "hy" },
  { id: "h_hyo", kana: "ひょ", romaji: "hyo", type: "hiragana", category: "combination", row: "hy" },
  // mya/myu/myo
  { id: "h_mya", kana: "みゃ", romaji: "mya", type: "hiragana", category: "combination", row: "my" },
  { id: "h_myu", kana: "みゅ", romaji: "myu", type: "hiragana", category: "combination", row: "my" },
  { id: "h_myo", kana: "みょ", romaji: "myo", type: "hiragana", category: "combination", row: "my" },
  // rya/ryu/ryo
  { id: "h_rya", kana: "りゃ", romaji: "rya", type: "hiragana", category: "combination", row: "ry" },
  { id: "h_ryu", kana: "りゅ", romaji: "ryu", type: "hiragana", category: "combination", row: "ry" },
  { id: "h_ryo", kana: "りょ", romaji: "ryo", type: "hiragana", category: "combination", row: "ry" },
  // gya/gyu/gyo
  { id: "h_gya", kana: "ぎゃ", romaji: "gya", type: "hiragana", category: "combination", row: "gy" },
  { id: "h_gyu", kana: "ぎゅ", romaji: "gyu", type: "hiragana", category: "combination", row: "gy" },
  { id: "h_gyo", kana: "ぎょ", romaji: "gyo", type: "hiragana", category: "combination", row: "gy" },
  // ja/ju/jo
  { id: "h_ja", kana: "じゃ", romaji: "ja", type: "hiragana", category: "combination", row: "j" },
  { id: "h_ju", kana: "じゅ", romaji: "ju", type: "hiragana", category: "combination", row: "j" },
  { id: "h_jo", kana: "じょ", romaji: "jo", type: "hiragana", category: "combination", row: "j" },
  // bya/byu/byo
  { id: "h_bya", kana: "びゃ", romaji: "bya", type: "hiragana", category: "combination", row: "by" },
  { id: "h_byu", kana: "びゅ", romaji: "byu", type: "hiragana", category: "combination", row: "by" },
  { id: "h_byo", kana: "びょ", romaji: "byo", type: "hiragana", category: "combination", row: "by" },
  // pya/pyu/pyo
  { id: "h_pya", kana: "ぴゃ", romaji: "pya", type: "hiragana", category: "combination", row: "py" },
  { id: "h_pyu", kana: "ぴゅ", romaji: "pyu", type: "hiragana", category: "combination", row: "py" },
  { id: "h_pyo", kana: "ぴょ", romaji: "pyo", type: "hiragana", category: "combination", row: "py" }
], ta = [
  // Vowels
  { id: "k_a", kana: "ア", romaji: "a", type: "katakana", category: "basic", row: "vowel" },
  { id: "k_i", kana: "イ", romaji: "i", type: "katakana", category: "basic", row: "vowel" },
  { id: "k_u", kana: "ウ", romaji: "u", type: "katakana", category: "basic", row: "vowel" },
  { id: "k_e", kana: "エ", romaji: "e", type: "katakana", category: "basic", row: "vowel" },
  { id: "k_o", kana: "オ", romaji: "o", type: "katakana", category: "basic", row: "vowel" },
  // K row
  { id: "k_ka", kana: "カ", romaji: "ka", type: "katakana", category: "basic", row: "k" },
  { id: "k_ki", kana: "キ", romaji: "ki", type: "katakana", category: "basic", row: "k" },
  { id: "k_ku", kana: "ク", romaji: "ku", type: "katakana", category: "basic", row: "k" },
  { id: "k_ke", kana: "ケ", romaji: "ke", type: "katakana", category: "basic", row: "k" },
  { id: "k_ko", kana: "コ", romaji: "ko", type: "katakana", category: "basic", row: "k" },
  // S row
  { id: "k_sa", kana: "サ", romaji: "sa", type: "katakana", category: "basic", row: "s" },
  { id: "k_shi", kana: "シ", romaji: "shi", type: "katakana", category: "basic", row: "s" },
  { id: "k_su", kana: "ス", romaji: "su", type: "katakana", category: "basic", row: "s" },
  { id: "k_se", kana: "セ", romaji: "se", type: "katakana", category: "basic", row: "s" },
  { id: "k_so", kana: "ソ", romaji: "so", type: "katakana", category: "basic", row: "s" },
  // T row
  { id: "k_ta", kana: "タ", romaji: "ta", type: "katakana", category: "basic", row: "t" },
  { id: "k_chi", kana: "チ", romaji: "chi", type: "katakana", category: "basic", row: "t" },
  { id: "k_tsu", kana: "ツ", romaji: "tsu", type: "katakana", category: "basic", row: "t" },
  { id: "k_te", kana: "テ", romaji: "te", type: "katakana", category: "basic", row: "t" },
  { id: "k_to", kana: "ト", romaji: "to", type: "katakana", category: "basic", row: "t" },
  // N row
  { id: "k_na", kana: "ナ", romaji: "na", type: "katakana", category: "basic", row: "n" },
  { id: "k_ni", kana: "ニ", romaji: "ni", type: "katakana", category: "basic", row: "n" },
  { id: "k_nu", kana: "ヌ", romaji: "nu", type: "katakana", category: "basic", row: "n" },
  { id: "k_ne", kana: "ネ", romaji: "ne", type: "katakana", category: "basic", row: "n" },
  { id: "k_no", kana: "ノ", romaji: "no", type: "katakana", category: "basic", row: "n" },
  // H row
  { id: "k_ha", kana: "ハ", romaji: "ha", type: "katakana", category: "basic", row: "h" },
  { id: "k_hi", kana: "ヒ", romaji: "hi", type: "katakana", category: "basic", row: "h" },
  { id: "k_fu", kana: "フ", romaji: "fu", type: "katakana", category: "basic", row: "h" },
  { id: "k_he", kana: "ヘ", romaji: "he", type: "katakana", category: "basic", row: "h" },
  { id: "k_ho", kana: "ホ", romaji: "ho", type: "katakana", category: "basic", row: "h" },
  // M row
  { id: "k_ma", kana: "マ", romaji: "ma", type: "katakana", category: "basic", row: "m" },
  { id: "k_mi", kana: "ミ", romaji: "mi", type: "katakana", category: "basic", row: "m" },
  { id: "k_mu", kana: "ム", romaji: "mu", type: "katakana", category: "basic", row: "m" },
  { id: "k_me", kana: "メ", romaji: "me", type: "katakana", category: "basic", row: "m" },
  { id: "k_mo", kana: "モ", romaji: "mo", type: "katakana", category: "basic", row: "m" },
  // Y row
  { id: "k_ya", kana: "ヤ", romaji: "ya", type: "katakana", category: "basic", row: "y" },
  { id: "k_yu", kana: "ユ", romaji: "yu", type: "katakana", category: "basic", row: "y" },
  { id: "k_yo", kana: "ヨ", romaji: "yo", type: "katakana", category: "basic", row: "y" },
  // R row
  { id: "k_ra", kana: "ラ", romaji: "ra", type: "katakana", category: "basic", row: "r" },
  { id: "k_ri", kana: "リ", romaji: "ri", type: "katakana", category: "basic", row: "r" },
  { id: "k_ru", kana: "ル", romaji: "ru", type: "katakana", category: "basic", row: "r" },
  { id: "k_re", kana: "レ", romaji: "re", type: "katakana", category: "basic", row: "r" },
  { id: "k_ro", kana: "ロ", romaji: "ro", type: "katakana", category: "basic", row: "r" },
  // W row
  { id: "k_wa", kana: "ワ", romaji: "wa", type: "katakana", category: "basic", row: "w" },
  { id: "k_wo", kana: "ヲ", romaji: "wo", type: "katakana", category: "basic", row: "w" },
  // N
  { id: "k_n", kana: "ン", romaji: "n", type: "katakana", category: "basic", row: "n_standalone" }
], oa = [
  // G row
  { id: "k_ga", kana: "ガ", romaji: "ga", type: "katakana", category: "dakuten", row: "g" },
  { id: "k_gi", kana: "ギ", romaji: "gi", type: "katakana", category: "dakuten", row: "g" },
  { id: "k_gu", kana: "グ", romaji: "gu", type: "katakana", category: "dakuten", row: "g" },
  { id: "k_ge", kana: "ゲ", romaji: "ge", type: "katakana", category: "dakuten", row: "g" },
  { id: "k_go", kana: "ゴ", romaji: "go", type: "katakana", category: "dakuten", row: "g" },
  // Z row
  { id: "k_za", kana: "ザ", romaji: "za", type: "katakana", category: "dakuten", row: "z" },
  { id: "k_ji", kana: "ジ", romaji: "ji", type: "katakana", category: "dakuten", row: "z" },
  { id: "k_zu", kana: "ズ", romaji: "zu", type: "katakana", category: "dakuten", row: "z" },
  { id: "k_ze", kana: "ゼ", romaji: "ze", type: "katakana", category: "dakuten", row: "z" },
  { id: "k_zo", kana: "ゾ", romaji: "zo", type: "katakana", category: "dakuten", row: "z" },
  // D row
  { id: "k_da", kana: "ダ", romaji: "da", type: "katakana", category: "dakuten", row: "d" },
  { id: "k_di", kana: "ヂ", romaji: "di", type: "katakana", category: "dakuten", row: "d" },
  { id: "k_du", kana: "ヅ", romaji: "du", type: "katakana", category: "dakuten", row: "d" },
  { id: "k_de", kana: "デ", romaji: "de", type: "katakana", category: "dakuten", row: "d" },
  { id: "k_do", kana: "ド", romaji: "do", type: "katakana", category: "dakuten", row: "d" },
  // B row
  { id: "k_ba", kana: "バ", romaji: "ba", type: "katakana", category: "dakuten", row: "b" },
  { id: "k_bi", kana: "ビ", romaji: "bi", type: "katakana", category: "dakuten", row: "b" },
  { id: "k_bu", kana: "ブ", romaji: "bu", type: "katakana", category: "dakuten", row: "b" },
  { id: "k_be", kana: "ベ", romaji: "be", type: "katakana", category: "dakuten", row: "b" },
  { id: "k_bo", kana: "ボ", romaji: "bo", type: "katakana", category: "dakuten", row: "b" },
  // P row
  { id: "k_pa", kana: "パ", romaji: "pa", type: "katakana", category: "dakuten", row: "p" },
  { id: "k_pi", kana: "ピ", romaji: "pi", type: "katakana", category: "dakuten", row: "p" },
  { id: "k_pu", kana: "プ", romaji: "pu", type: "katakana", category: "dakuten", row: "p" },
  { id: "k_pe", kana: "ペ", romaji: "pe", type: "katakana", category: "dakuten", row: "p" },
  { id: "k_po", kana: "ポ", romaji: "po", type: "katakana", category: "dakuten", row: "p" }
], ia = [
  // kya/kyu/kyo
  { id: "k_kya", kana: "キャ", romaji: "kya", type: "katakana", category: "combination", row: "ky" },
  { id: "k_kyu", kana: "キュ", romaji: "kyu", type: "katakana", category: "combination", row: "ky" },
  { id: "k_kyo", kana: "キョ", romaji: "kyo", type: "katakana", category: "combination", row: "ky" },
  // sha/shu/sho
  { id: "k_sha", kana: "シャ", romaji: "sha", type: "katakana", category: "combination", row: "sh" },
  { id: "k_shu", kana: "シュ", romaji: "shu", type: "katakana", category: "combination", row: "sh" },
  { id: "k_sho", kana: "ショ", romaji: "sho", type: "katakana", category: "combination", row: "sh" },
  // cha/chu/cho
  { id: "k_cha", kana: "チャ", romaji: "cha", type: "katakana", category: "combination", row: "ch" },
  { id: "k_chu", kana: "チュ", romaji: "chu", type: "katakana", category: "combination", row: "ch" },
  { id: "k_cho", kana: "チョ", romaji: "cho", type: "katakana", category: "combination", row: "ch" },
  // nya/nyu/nyo
  { id: "k_nya", kana: "ニャ", romaji: "nya", type: "katakana", category: "combination", row: "ny" },
  { id: "k_nyu", kana: "ニュ", romaji: "nyu", type: "katakana", category: "combination", row: "ny" },
  { id: "k_nyo", kana: "ニョ", romaji: "nyo", type: "katakana", category: "combination", row: "ny" },
  // hya/hyu/hyo
  { id: "k_hya", kana: "ヒャ", romaji: "hya", type: "katakana", category: "combination", row: "hy" },
  { id: "k_hyu", kana: "ヒュ", romaji: "hyu", type: "katakana", category: "combination", row: "hy" },
  { id: "k_hyo", kana: "ヒョ", romaji: "hyo", type: "katakana", category: "combination", row: "hy" },
  // mya/myu/myo
  { id: "k_mya", kana: "ミャ", romaji: "mya", type: "katakana", category: "combination", row: "my" },
  { id: "k_myu", kana: "ミュ", romaji: "myu", type: "katakana", category: "combination", row: "my" },
  { id: "k_myo", kana: "ミョ", romaji: "myo", type: "katakana", category: "combination", row: "my" },
  // rya/ryu/ryo
  { id: "k_rya", kana: "リャ", romaji: "rya", type: "katakana", category: "combination", row: "ry" },
  { id: "k_ryu", kana: "リュ", romaji: "ryu", type: "katakana", category: "combination", row: "ry" },
  { id: "k_ryo", kana: "リョ", romaji: "ryo", type: "katakana", category: "combination", row: "ry" },
  // gya/gyu/gyo
  { id: "k_gya", kana: "ギャ", romaji: "gya", type: "katakana", category: "combination", row: "gy" },
  { id: "k_gyu", kana: "ギュ", romaji: "gyu", type: "katakana", category: "combination", row: "gy" },
  { id: "k_gyo", kana: "ギョ", romaji: "gyo", type: "katakana", category: "combination", row: "gy" },
  // ja/ju/jo
  { id: "k_ja", kana: "ジャ", romaji: "ja", type: "katakana", category: "combination", row: "j" },
  { id: "k_ju", kana: "ジュ", romaji: "ju", type: "katakana", category: "combination", row: "j" },
  { id: "k_jo", kana: "ジョ", romaji: "jo", type: "katakana", category: "combination", row: "j" },
  // bya/byu/byo
  { id: "k_bya", kana: "ビャ", romaji: "bya", type: "katakana", category: "combination", row: "by" },
  { id: "k_byu", kana: "ビュ", romaji: "byu", type: "katakana", category: "combination", row: "by" },
  { id: "k_byo", kana: "ビョ", romaji: "byo", type: "katakana", category: "combination", row: "by" },
  // pya/pyu/pyo
  { id: "k_pya", kana: "ピャ", romaji: "pya", type: "katakana", category: "combination", row: "py" },
  { id: "k_pyu", kana: "ピュ", romaji: "pyu", type: "katakana", category: "combination", row: "py" },
  { id: "k_pyo", kana: "ピョ", romaji: "pyo", type: "katakana", category: "combination", row: "py" }
], O = [
  ...ea,
  ...na,
  ...ra,
  ...ta,
  ...oa,
  ...ia
], ca = {
  hiragana_basic: ea,
  hiragana_dakuten: na,
  hiragana_combination: ra,
  katakana_basic: ta,
  katakana_dakuten: oa,
  katakana_combination: ia
}, sa = {
  hiragana_basic: "Hiragana Basic",
  hiragana_dakuten: "Hiragana Dakuten",
  hiragana_combination: "Hiragana Combinations",
  katakana_basic: "Katakana Basic",
  katakana_dakuten: "Katakana Dakuten",
  katakana_combination: "Katakana Combinations"
}, ua = {
  hiragana_basic: ["あ", "い", "う", "え"],
  hiragana_dakuten: ["が", "ざ", "だ", "ば"],
  hiragana_combination: ["きゃ", "しゃ", "ちゃ", "にゃ"],
  katakana_basic: ["ア", "イ", "ウ", "エ"],
  katakana_dakuten: ["ガ", "ザ", "ダ", "バ"],
  katakana_combination: ["キャ", "シャ", "チャ", "ニャ"]
}, ja = {
  1: 120,
  // 2 hours
  2: 480,
  // 8 hours
  3: 1440,
  // 24 hours
  4: 2880,
  // 48 hours (Guru)
  5: 10080,
  // 1 week (Guru 2)
  6: 20160,
  // 2 weeks (Master)
  7: 43200,
  // 30 days (Enlightened)
  8: 172800
  // ~4 months (Burned)
}, ka = "jpnlearn_progress", da = "jpnlearn_selection", ya = "jpnlearn_streak", J = {
  hiragana_basic: !0,
  hiragana_dakuten: !1,
  hiragana_combination: !1,
  katakana_basic: !1,
  katakana_dakuten: !1,
  katakana_combination: !1
};
function ba() {
  try {
    const e = localStorage.getItem(ka);
    return e ? JSON.parse(e) : {};
  } catch {
    return {};
  }
}
function wa() {
  try {
    const e = localStorage.getItem(da);
    return e ? JSON.parse(e) : J;
  } catch {
    return J;
  }
}
function _a() {
  try {
    const e = localStorage.getItem(ya);
    return e ? parseInt(e, 10) : 0;
  } catch {
    return 0;
  }
}
function H(e) {
  localStorage.setItem(ka, JSON.stringify(e));
}
function Y(e) {
  localStorage.setItem(da, JSON.stringify(e));
}
function V(e) {
  localStorage.setItem(ya, String(e));
}
function la(e) {
  return e === 0 ? "New" : e <= 4 ? "Apprentice" : e <= 6 ? "Guru" : e === 7 ? "Master" : e === 8 ? "Enlightened" : "Burned";
}
function $(e) {
  return e === 0 ? "#555555" : e <= 4 ? "#9FDC7F" : e <= 6 ? "#8DDEFC" : e === 7 ? "#CCD3F0" : e === 8 ? "#4C9057" : "#8D7E61";
}
function W(e, r) {
  return r ? Math.min(9, e + 1) : e === 0 ? 0 : Math.max(1, e - 2);
}
function va(e) {
  const r = ja[e] ?? 0;
  return Date.now() + r * 60 * 1e3;
}
function ha(e, r) {
  return e.filter((o) => {
    const c = `${o.type}_${o.category}`;
    return r[c] === !0;
  });
}
function U(e, r, o) {
  const c = ha(e, o), k = Date.now();
  return c.filter((i) => {
    const m = r[i.id];
    return !m || m.srsLevel === 0 || m.srsLevel === 9 || m.nextReview === void 0 ? !1 : m.nextReview <= k;
  });
}
function Z(e, r, o) {
  return ha(e, o).filter((k) => {
    const i = r[k.id];
    return !i || i.srsLevel === 0;
  });
}
function fa() {
  const [e, r] = h(ba), [o, c] = h(wa), [k, i] = h(_a), m = A(
    (p, y) => {
      r((j) => {
        const f = j[p] ?? {
          srsLevel: 0,
          correctCount: 0,
          incorrectCount: 0
        }, t = W(f.srsLevel, y), g = {
          srsLevel: t,
          correctCount: f.correctCount + (y ? 1 : 0),
          incorrectCount: f.incorrectCount + (y ? 0 : 1),
          lastReview: Date.now(),
          nextReview: t === 9 ? void 0 : va(t)
        }, x = { ...j, [p]: g };
        return H(x), x;
      });
      const C = e[p] ?? { srsLevel: 0 };
      return W(C.srsLevel, y);
    },
    [e]
  ), u = A(() => {
    r({}), H({}), i(0), V(0);
  }, []), d = A((p) => {
    c(p), Y(p);
  }, []), s = A((p) => {
    c((y) => {
      const C = { ...y, [p]: !y[p] };
      return Y(C), C;
    });
  }, []), L = A(() => {
    i((p) => {
      const y = p + 1;
      return V(y), y;
    });
  }, []), w = A(() => {
    i(0), V(0);
  }, []);
  return {
    progress: e,
    selection: o,
    streak: k,
    updateProgress: m,
    resetProgress: u,
    setSelection: d,
    toggleGroup: s,
    incrementStreak: L,
    resetStreak: w
  };
}
function ma(e) {
  const r = [...e];
  for (let o = r.length - 1; o > 0; o--) {
    const c = Math.floor(Math.random() * (o + 1));
    [r[o], r[c]] = [r[c], r[o]];
  }
  return r;
}
function Na(e) {
  return `srs-badge-${la(e).toLowerCase()}`;
}
const Ca = 5, Sa = 3;
function pa({ current: e, total: r, label: o }) {
  const c = r === 0 ? 0 : Math.round(e / r * 100);
  return /* @__PURE__ */ n("div", { className: "jpn-progress-wrap", children: [
    /* @__PURE__ */ n("div", { className: "jpn-progress-label", children: [
      /* @__PURE__ */ a("span", { children: o ?? `${e} / ${r}` }),
      /* @__PURE__ */ n("span", { children: [
        c,
        "%"
      ] })
    ] }),
    /* @__PURE__ */ a("div", { className: "jpn-progress-track", children: /* @__PURE__ */ a("div", { className: "jpn-progress-fill", style: { width: `${c}%` } }) })
  ] });
}
function q({ level: e }) {
  return /* @__PURE__ */ a(
    "span",
    {
      className: `jpn-badge ${Na(e)}`,
      style: { color: $(e) },
      children: la(e)
    }
  );
}
function La({ checked: e, onChange: r, id: o }) {
  return /* @__PURE__ */ n("label", { className: "jpn-toggle", htmlFor: o, onClick: (c) => c.stopPropagation(), children: [
    /* @__PURE__ */ a("input", { id: o, type: "checkbox", checked: e, onChange: r }),
    /* @__PURE__ */ a("span", { className: "jpn-toggle-slider" })
  ] });
}
function Ra({
  dueCount: e,
  newCount: r,
  progress: o,
  selection: c,
  streak: k,
  onStartLesson: i,
  onStartReview: m,
  onOpenSelector: u,
  onToggleGroup: d,
  onReset: s
}) {
  const L = Object.values(o), w = L.filter((t) => t.srsLevel > 0).length, p = L.reduce(
    (t, g) => t + g.correctCount + g.incorrectCount,
    0
  ), y = L.reduce((t, g) => t + g.correctCount, 0), C = p === 0 ? 0 : Math.round(y / p * 100), j = [
    { label: "New", level: 0, count: 0, color: $(0) },
    { label: "Apprentice", level: 1, count: 0, color: $(1) },
    { label: "Guru", level: 5, count: 0, color: $(5) },
    { label: "Master", level: 7, count: 0, color: $(7) },
    { label: "Enlightened", level: 8, count: 0, color: $(8) },
    { label: "Burned", level: 9, count: 0, color: $(9) }
  ];
  L.forEach((t) => {
    const g = t.srsLevel;
    g === 0 ? j[0].count++ : g <= 4 ? j[1].count++ : g <= 6 ? j[2].count++ : g === 7 ? j[3].count++ : g === 8 ? j[4].count++ : j[5].count++;
  });
  const f = Object.keys(c);
  return /* @__PURE__ */ n(P, { children: [
    /* @__PURE__ */ n("div", { className: "jpn-hero", children: [
      /* @__PURE__ */ a("span", { className: "jpn-hero-kanji", children: "日本語" }),
      /* @__PURE__ */ a("h1", { className: "jpn-hero-title", children: "JPNLearn" }),
      /* @__PURE__ */ a("p", { className: "jpn-hero-subtitle", children: "Master Hiragana & Katakana" })
    ] }),
    /* @__PURE__ */ n("div", { className: "jpn-container", children: [
      /* @__PURE__ */ n("div", { className: "jpn-stats-bar", children: [
        /* @__PURE__ */ n("div", { className: "jpn-stat-card", children: [
          /* @__PURE__ */ a("span", { className: "jpn-stat-value", children: w }),
          /* @__PURE__ */ a("div", { className: "jpn-stat-label", children: "Total Learned" })
        ] }),
        /* @__PURE__ */ n("div", { className: "jpn-stat-card", children: [
          /* @__PURE__ */ a("span", { className: "jpn-stat-value", children: e }),
          /* @__PURE__ */ a("div", { className: "jpn-stat-label", children: "Due for Review" })
        ] }),
        /* @__PURE__ */ n("div", { className: "jpn-stat-card", children: [
          /* @__PURE__ */ n("span", { className: "jpn-stat-value", children: [
            C,
            "%"
          ] }),
          /* @__PURE__ */ a("div", { className: "jpn-stat-label", children: "Accuracy" })
        ] }),
        /* @__PURE__ */ n("div", { className: "jpn-stat-card", children: [
          /* @__PURE__ */ a("span", { className: "jpn-stat-value", children: k }),
          /* @__PURE__ */ a("div", { className: "jpn-stat-label", children: "Streak" })
        ] })
      ] }),
      /* @__PURE__ */ n("div", { className: "jpn-srs-breakdown", children: [
        /* @__PURE__ */ a("h3", { children: "SRS Breakdown" }),
        /* @__PURE__ */ a("div", { className: "jpn-srs-bars", children: j.map((t) => /* @__PURE__ */ n("div", { className: "jpn-srs-bar-item", children: [
          /* @__PURE__ */ a(
            "div",
            {
              className: "jpn-srs-bar-fill",
              style: { background: t.color, opacity: 0.8 }
            }
          ),
          /* @__PURE__ */ a("span", { className: "jpn-srs-bar-count", style: { color: t.color }, children: t.count }),
          /* @__PURE__ */ a("span", { className: "jpn-srs-bar-name", children: t.label })
        ] }, t.label)) })
      ] }),
      /* @__PURE__ */ n("div", { className: "jpn-actions", children: [
        /* @__PURE__ */ n(
          "button",
          {
            className: "jpn-btn jpn-btn-primary",
            onClick: i,
            disabled: r === 0,
            children: [
              "Start Lessons",
              /* @__PURE__ */ a("span", { className: "jpn-badge srs-badge-new", style: { marginLeft: "0.25rem" }, children: r })
            ]
          }
        ),
        /* @__PURE__ */ n(
          "button",
          {
            className: "jpn-btn jpn-btn-secondary",
            onClick: m,
            disabled: e === 0,
            children: [
              "Start Review",
              /* @__PURE__ */ a(
                "span",
                {
                  className: "jpn-badge srs-badge-apprentice",
                  style: { marginLeft: "0.25rem", color: $(1) },
                  children: e
                }
              )
            ]
          }
        )
      ] }),
      /* @__PURE__ */ a("div", { className: "jpn-divider" }),
      /* @__PURE__ */ n("div", { className: "jpn-quick-selector", children: [
        /* @__PURE__ */ a("h3", { children: "Study Groups" }),
        /* @__PURE__ */ a("div", { className: "jpn-quick-chips", children: f.map((t) => /* @__PURE__ */ n(
          "button",
          {
            className: `jpn-chip${c[t] ? " active" : ""}`,
            onClick: () => d(t),
            children: [
              sa[t],
              /* @__PURE__ */ n("span", { style: { opacity: 0.6 }, children: [
                "(",
                ca[t].length,
                ")"
              ] })
            ]
          },
          t
        )) }),
        /* @__PURE__ */ a("div", { style: { marginTop: "0.75rem" }, children: /* @__PURE__ */ a("button", { className: "jpn-configure-link", onClick: u, children: "Configure groups →" }) })
      ] }),
      /* @__PURE__ */ a("div", { style: { textAlign: "right", marginTop: "1rem" }, children: /* @__PURE__ */ a("button", { className: "jpn-btn jpn-btn-danger jpn-btn-sm", onClick: s, children: "Reset Progress" }) })
    ] })
  ] });
}
function za({
  selection: e,
  onToggleGroup: r,
  onBack: o,
  onStartLesson: c,
  onStartReview: k,
  dueCount: i,
  newCount: m
}) {
  const u = Object.keys(e);
  return /* @__PURE__ */ n("div", { className: "jpn-container", children: [
    /* @__PURE__ */ n("div", { className: "jpn-selector-header", children: [
      /* @__PURE__ */ a("button", { className: "jpn-back-btn", onClick: o, children: "← Dashboard" }),
      /* @__PURE__ */ a("h2", { children: "Study Groups" }),
      /* @__PURE__ */ a("p", { children: "Toggle the groups you want to study. All enabled characters appear in lessons and reviews." })
    ] }),
    /* @__PURE__ */ a("div", { className: "jpn-selector-grid", children: u.map((d) => /* @__PURE__ */ n(
      "div",
      {
        className: `jpn-selector-card${e[d] ? " active" : ""}`,
        onClick: () => r(d),
        children: [
          /* @__PURE__ */ n("div", { className: "jpn-selector-card-top", children: [
            /* @__PURE__ */ n("div", { children: [
              /* @__PURE__ */ a("div", { className: "jpn-selector-card-title", children: sa[d] }),
              /* @__PURE__ */ n("div", { className: "jpn-selector-card-count", children: [
                ca[d].length,
                " characters"
              ] })
            ] }),
            /* @__PURE__ */ a(
              La,
              {
                id: `toggle-${d}`,
                checked: e[d],
                onChange: () => r(d)
              }
            )
          ] }),
          /* @__PURE__ */ a("div", { className: "jpn-selector-previews", children: ua[d].map((s) => /* @__PURE__ */ a("span", { className: "jpn-preview-char", children: s }, s)) })
        ]
      },
      d
    )) }),
    /* @__PURE__ */ n("div", { className: "jpn-selector-actions", children: [
      /* @__PURE__ */ n(
        "button",
        {
          className: "jpn-btn jpn-btn-primary",
          onClick: c,
          disabled: m === 0,
          children: [
            "Start Lessons (",
            m,
            ")"
          ]
        }
      ),
      /* @__PURE__ */ n(
        "button",
        {
          className: "jpn-btn jpn-btn-secondary",
          onClick: k,
          disabled: i === 0,
          children: [
            "Start Review (",
            i,
            ")"
          ]
        }
      )
    ] })
  ] });
}
function Ea({ chars: e, onComplete: r, onBack: o, updateProgress: c }) {
  const k = e.slice(0, Ca), [i, m] = h(0), [u, d] = h(0), [s, L] = h([]), [w, p] = h("display"), [y, C] = h(0), [j, f] = h(""), [t, g] = h(!1), [x, D] = h(!1), [B, I] = h([]), [T, b] = h(""), M = aa(null), S = k[i], N = s[y], v = (l, _) => {
    const E = ma(k.slice(_, l));
    L(E), d(l), C(0), f(""), g(!1), b(""), p("quiz");
  }, R = () => {
    const l = i + 1, _ = l >= k.length, E = l % Sa === 0;
    _ || E ? (m(l), v(l, u)) : m(l);
  };
  F(() => {
    w === "quiz" && M.current && M.current.focus();
  }, [w, y]), F(() => {
    if (w === "display") {
      const l = (_) => {
        _.key === "Enter" && R();
      };
      return document.addEventListener("keydown", l), () => document.removeEventListener("keydown", l);
    }
    if (w === "quiz" && t) {
      const l = (_) => {
        _.key === "Enter" && K();
      };
      return document.addEventListener("keydown", l), () => document.removeEventListener("keydown", l);
    }
  }, [w, t, i, y]);
  const G = A(() => {
    if (!N || t) return;
    const _ = j.trim().toLowerCase() === N.romaji.toLowerCase();
    D(_), g(!0), b(_ ? "Correct!" : `Incorrect — ${N.romaji}`);
    const E = c(N.id, _);
    I((ga) => [...ga, { char: N, correct: _, newSrsLevel: E }]);
  }, [N, t, j, c]), K = () => {
    y < s.length - 1 ? (C((l) => l + 1), f(""), g(!1), b("")) : i < k.length ? (p("display"), f(""), g(!1), b("")) : r(B);
  }, Q = (l) => {
    l.key === "Enter" && (t ? K() : G());
  }, z = k.length;
  return /* @__PURE__ */ n("div", { className: "jpn-container", children: [
    /* @__PURE__ */ n("div", { className: "jpn-lesson-header", children: [
      /* @__PURE__ */ a("button", { className: "jpn-back-btn", onClick: o, children: "← Back" }),
      /* @__PURE__ */ a("div", { className: "jpn-lesson-phase", children: w === "display" ? "Learn" : "Practice Quiz" }),
      /* @__PURE__ */ a(
        pa,
        {
          current: Math.min(i, k.length),
          total: k.length,
          label: `${Math.min(i + 1, k.length)} / ${k.length} characters`
        }
      )
    ] }),
    /* @__PURE__ */ a("div", { className: "jpn-lesson-dots", children: Array.from({ length: z }).map((l, _) => {
      const E = _ < i ? "seen" : _ === i ? "current" : "";
      return /* @__PURE__ */ a("div", { className: `jpn-lesson-dot ${E}` }, _);
    }) }),
    w === "display" && S && /* @__PURE__ */ n("div", { className: "jpn-lesson-card", children: [
      /* @__PURE__ */ a("span", { className: "jpn-kana-display", children: S.kana }),
      /* @__PURE__ */ a("div", { className: "jpn-romaji-display", children: S.romaji }),
      /* @__PURE__ */ n(
        "span",
        {
          className: `jpn-type-badge ${S.type === "hiragana" ? "jpn-type-hiragana" : "jpn-type-katakana"}`,
          children: [
            S.type,
            " · ",
            S.category
          ]
        }
      ),
      /* @__PURE__ */ a("div", { className: "jpn-lesson-nav", children: /* @__PURE__ */ a("button", { className: "jpn-btn jpn-btn-primary", onClick: R, children: "Got It →" }) })
    ] }),
    w === "quiz" && N && /* @__PURE__ */ n("div", { className: "jpn-quiz-card", children: [
      /* @__PURE__ */ a("div", { className: "jpn-quiz-prompt", children: "What is the romaji for this character?" }),
      /* @__PURE__ */ a("span", { className: "jpn-kana-display jpn-kana-display-sm", children: N.kana }),
      /* @__PURE__ */ a(
        "span",
        {
          className: `jpn-type-badge ${N.type === "hiragana" ? "jpn-type-hiragana" : "jpn-type-katakana"}`,
          style: { marginBottom: "1.25rem" },
          children: N.type
        }
      ),
      t ? /* @__PURE__ */ n(P, { children: [
        /* @__PURE__ */ a("div", { className: `jpn-feedback ${x ? "correct" : "incorrect"}`, children: T }),
        /* @__PURE__ */ a("button", { className: "jpn-btn jpn-btn-outline", onClick: K, children: y < s.length - 1 ? "Next Character" : i < k.length ? "Continue Learning" : "Finish Lesson" })
      ] }) : /* @__PURE__ */ n("div", { className: "jpn-input-wrap", style: { justifyContent: "center" }, children: [
        /* @__PURE__ */ a(
          "input",
          {
            ref: M,
            className: "jpn-input",
            style: { maxWidth: 260 },
            placeholder: "Type romaji...",
            value: j,
            onChange: (l) => f(l.target.value),
            onKeyDown: Q,
            autoComplete: "off"
          }
        ),
        /* @__PURE__ */ a(
          "button",
          {
            className: "jpn-btn jpn-btn-primary",
            onClick: G,
            disabled: j.trim() === "",
            children: "Check"
          }
        )
      ] })
    ] })
  ] });
}
function $a({
  chars: e,
  progress: r,
  streak: o,
  onComplete: c,
  onBack: k,
  updateProgress: i,
  incrementStreak: m,
  resetStreak: u
}) {
  const [d] = h(() => ma(e)), [s, L] = h(0), [w, p] = h(""), [y, C] = h(!1), [j, f] = h(!1), [t, g] = h([]), [x, D] = h(""), [B, I] = h(""), T = aa(null), b = d[s], S = (b ? r[b.id] : void 0)?.srsLevel ?? 0;
  F(() => {
    !y && T.current && T.current.focus();
  }, [s, y]), F(() => {
    if (!y) return;
    const z = (l) => {
      l.key === "Enter" && v();
    };
    return document.addEventListener("keydown", z), () => document.removeEventListener("keydown", z);
  }, [y, s]);
  const N = A(() => {
    if (!b || y) return;
    const l = w.trim().toLowerCase() === b.romaji.toLowerCase();
    f(l), C(!0), l ? (m(), D("Correct!"), I("feedback-correct")) : (u(), D(`Incorrect — correct answer: ${b.romaji}`), I("feedback-incorrect"));
    const _ = i(b.id, l);
    g((E) => [...E, { char: b, correct: l, newSrsLevel: _ }]), setTimeout(() => I(""), 600);
  }, [b, y, w, i, m, u]), v = () => {
    if (s >= d.length - 1) {
      c(t);
      return;
    }
    L((z) => z + 1), p(""), C(!1), D(""), f(!1);
  }, R = (z) => {
    z.key === "Enter" && (y ? v() : N());
  };
  if (!b)
    return /* @__PURE__ */ a("div", { className: "jpn-container", children: /* @__PURE__ */ n("div", { className: "jpn-empty-state", children: [
      /* @__PURE__ */ a("p", { children: "No more characters to review." }),
      /* @__PURE__ */ a("button", { className: "jpn-btn jpn-btn-primary", onClick: () => c(t), children: "See Results" })
    ] }) });
  const G = $(S), K = `rgba(${X(G)}, 0.08)`, Q = `rgba(${X(G)}, 0.25)`;
  return /* @__PURE__ */ n("div", { className: "jpn-container", children: [
    /* @__PURE__ */ n("div", { className: "jpn-review-header", children: [
      /* @__PURE__ */ a("button", { className: "jpn-back-btn", onClick: k, children: "← Back" }),
      /* @__PURE__ */ n("div", { className: "jpn-review-meta", children: [
        /* @__PURE__ */ a(
          pa,
          {
            current: s,
            total: d.length,
            label: `${s} / ${d.length} reviewed`
          }
        ),
        /* @__PURE__ */ n("div", { className: "jpn-streak", children: [
          "⚡ ",
          o,
          " streak"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ n(
      "div",
      {
        className: `jpn-review-card ${B}`,
        style: { background: K, borderColor: Q },
        children: [
          /* @__PURE__ */ a(q, { level: S }),
          /* @__PURE__ */ a("span", { className: "jpn-kana-display", children: b.kana }),
          /* @__PURE__ */ a(
            "span",
            {
              className: `jpn-type-badge ${b.type === "hiragana" ? "jpn-type-hiragana" : "jpn-type-katakana"}`,
              children: b.type
            }
          )
        ]
      }
    ),
    y ? /* @__PURE__ */ n(P, { children: [
      /* @__PURE__ */ a("div", { className: `jpn-feedback ${j ? "correct" : "incorrect"}`, children: j ? /* @__PURE__ */ n(P, { children: [
        "Correct! ",
        /* @__PURE__ */ a(q, { level: t[t.length - 1]?.newSrsLevel ?? S })
      ] }) : /* @__PURE__ */ n(P, { children: [
        "Incorrect",
        /* @__PURE__ */ n("span", { className: "jpn-feedback-answer", children: [
          "— ",
          b.romaji
        ] }),
        /* @__PURE__ */ n("div", { className: "jpn-level-change", children: [
          "SRS level adjusted to",
          " ",
          /* @__PURE__ */ a(q, { level: t[t.length - 1]?.newSrsLevel ?? S })
        ] })
      ] }) }),
      /* @__PURE__ */ a("div", { style: { display: "flex", justifyContent: "center" }, children: /* @__PURE__ */ n("button", { className: "jpn-btn jpn-btn-primary", onClick: v, children: [
        s >= d.length - 1 ? "See Results" : "Next ",
        s < d.length - 1 && /* @__PURE__ */ a(P, { children: "→" })
      ] }) })
    ] }) : /* @__PURE__ */ n("div", { className: "jpn-input-wrap", children: [
      /* @__PURE__ */ a(
        "input",
        {
          ref: T,
          className: "jpn-input",
          placeholder: "Type romaji and press Enter...",
          value: w,
          onChange: (z) => p(z.target.value),
          onKeyDown: R,
          autoComplete: "off",
          autoCapitalize: "none"
        }
      ),
      /* @__PURE__ */ a(
        "button",
        {
          className: "jpn-btn jpn-btn-primary",
          onClick: N,
          disabled: w.trim() === "",
          children: "Submit"
        }
      )
    ] })
  ] });
}
function xa({ results: e, onDashboard: r, onReviewAgain: o, mode: c }) {
  const k = e.filter((u) => u.correct).length, i = e.length - k, m = e.length === 0 ? 0 : Math.round(k / e.length * 100);
  return /* @__PURE__ */ n("div", { className: "jpn-container", children: [
    /* @__PURE__ */ n("div", { className: "jpn-results-header", children: [
      /* @__PURE__ */ a("h2", { children: c === "lesson" ? "Lesson Complete" : "Review Complete" }),
      /* @__PURE__ */ n("span", { className: "jpn-results-accuracy", children: [
        m,
        "%"
      ] }),
      /* @__PURE__ */ n("p", { className: "jpn-results-sub", children: [
        "Accuracy across ",
        e.length,
        " character",
        e.length !== 1 ? "s" : ""
      ] })
    ] }),
    /* @__PURE__ */ n("div", { className: "jpn-results-summary", children: [
      /* @__PURE__ */ n("div", { className: "jpn-result-stat", children: [
        /* @__PURE__ */ a("span", { className: "jpn-result-stat-value", style: { color: "#9FDC7F" }, children: k }),
        /* @__PURE__ */ a("span", { className: "jpn-result-stat-label", children: "Correct" })
      ] }),
      /* @__PURE__ */ n("div", { className: "jpn-result-stat", children: [
        /* @__PURE__ */ a("span", { className: "jpn-result-stat-value", style: { color: "#f88" }, children: i }),
        /* @__PURE__ */ a("span", { className: "jpn-result-stat-label", children: "Incorrect" })
      ] })
    ] }),
    e.length > 0 && /* @__PURE__ */ n("div", { className: "jpn-results-list", children: [
      /* @__PURE__ */ a("div", { className: "jpn-results-list-header", children: "Characters Reviewed" }),
      e.map((u, d) => /* @__PURE__ */ n("div", { className: "jpn-result-item", children: [
        /* @__PURE__ */ a("span", { className: "jpn-result-kana", children: u.char.kana }),
        /* @__PURE__ */ n("div", { className: "jpn-result-romaji", children: [
          /* @__PURE__ */ a("div", { children: u.char.romaji }),
          /* @__PURE__ */ a("div", { style: { fontSize: "0.75rem", marginTop: "0.1rem" }, children: /* @__PURE__ */ a(q, { level: u.newSrsLevel }) })
        ] }),
        /* @__PURE__ */ a("span", { className: `jpn-result-status ${u.correct ? "correct" : "incorrect"}`, children: u.correct ? "Correct" : "Wrong" })
      ] }, `${u.char.id}-${d}`))
    ] }),
    /* @__PURE__ */ n("div", { className: "jpn-results-actions", children: [
      /* @__PURE__ */ a("button", { className: "jpn-btn jpn-btn-primary", onClick: r, children: "Return to Dashboard" }),
      i > 0 && /* @__PURE__ */ a("button", { className: "jpn-btn jpn-btn-outline", onClick: o, children: "Review Missed" })
    ] })
  ] });
}
function X(e) {
  const r = e.replace("#", ""), o = parseInt(r, 16), c = o >> 16 & 255, k = o >> 8 & 255, i = o & 255;
  return `${c}, ${k}, ${i}`;
}
function Ta() {
  const {
    progress: e,
    selection: r,
    streak: o,
    updateProgress: c,
    resetProgress: k,
    toggleGroup: i,
    incrementStreak: m,
    resetStreak: u
  } = fa(), [d, s] = h("dashboard"), [L, w] = h([]), [p, y] = h([]), [C, j] = h([]), [f, t] = h("review"), [g, x] = h([]), D = U(O, e, r), B = Z(O, e, r), I = () => {
    const v = Z(O, e, r);
    v.length !== 0 && (w(v), s("lesson"));
  }, T = () => {
    const v = U(O, e, r);
    v.length !== 0 && (y(v), s("review"));
  }, b = (v) => {
    j(v), t("lesson"), x(v.filter((R) => !R.correct).map((R) => R.char)), s("results");
  }, M = (v) => {
    j(v), t("review"), x(v.filter((R) => !R.correct).map((R) => R.char)), s("results");
  }, S = () => {
    if (g.length === 0) {
      s("dashboard");
      return;
    }
    y(g), s("review");
  }, N = () => {
    window.confirm("Reset all progress? This cannot be undone.") && (k(), s("dashboard"));
  };
  return /* @__PURE__ */ n("div", { className: "jpn-page", children: [
    d === "dashboard" && /* @__PURE__ */ a(
      Ra,
      {
        dueCount: D.length,
        newCount: B.length,
        progress: e,
        selection: r,
        streak: o,
        onStartLesson: I,
        onStartReview: T,
        onOpenSelector: () => s("selector"),
        onToggleGroup: i,
        onReset: N
      }
    ),
    d === "selector" && /* @__PURE__ */ a(
      za,
      {
        selection: r,
        onToggleGroup: i,
        onBack: () => s("dashboard"),
        onStartLesson: () => {
          I();
        },
        onStartReview: () => {
          T();
        },
        dueCount: D.length,
        newCount: B.length
      }
    ),
    d === "lesson" && /* @__PURE__ */ a(
      Ea,
      {
        chars: L,
        onComplete: b,
        onBack: () => s("dashboard"),
        updateProgress: c
      }
    ),
    d === "review" && /* @__PURE__ */ a(
      $a,
      {
        chars: p,
        progress: e,
        streak: o,
        onComplete: M,
        onBack: () => s("dashboard"),
        updateProgress: c,
        incrementStreak: m,
        resetStreak: u
      }
    ),
    d === "results" && /* @__PURE__ */ a(
      xa,
      {
        results: C,
        onDashboard: () => s("dashboard"),
        onReviewAgain: S,
        mode: f
      }
    )
  ] });
}
export {
  Ta as JPNLearning
};
//# sourceMappingURL=jpn-learn.mjs.map
