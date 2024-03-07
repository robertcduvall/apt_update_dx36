"use client";
import Problem from "../components/problem";
import { useSearchParams } from "next/navigation";

type ProblemId = keyof typeof problemData;

const problemData = {
  totality: {
    title: "Totality APT",
    description:
      "The phrases even keeled, odd job, and total eclipse might come to mind as you solve this APT. Given an array of int values, return the sum of those values that are at odd indexes, even indexes, or every index depending on whether the value of the String stype is 'odd', 'even', or 'all', respectively. See examples for details.",
    example1: ["a = [1, 2, 3, 4, 5]", "stype= odd", "return 6"],
  },
  accessLevel: {
    title: "Access Level APT",
    description:
      "In many computer systems and networks, different users are granted different levels of access to different resources. In this case, you are given a int[] rights, indicating the privilege level of each user to use some system resource. You are also given a int minPermission, which is the minimum permission a user must have to use this resource. You are to return a String indicating which users can and cannot access this resource. Each character in the return value corresponds to the element of users with the same index. 'A' indicates the user is allowed access, while 'D' indicates the user is denied access.",
    example1: ["a = [0, 1, 2, 3, 4, 5]", "2", "return 'DDAAAA"],
  },
  gravity: {
    title: "Gravity APT",
    description:
      "Elphaba has decided to try to defy gravity. She's going to drop or throw an object from the top of an infinitely tall building and see how far it falls. She knows exactly what speed she throws the object and has a stop watch she uses to time how long it falls. Write method falling that returns the number of meters the object has fallen after time seconds have elapsed when the object is thrown with an initial velocity of velo meters/sec. Ignore any forces due to friction, air-resistance, etc. The infinitely tall building is located in a vacuum. However, the building is on the earth, so accelaration due to earth's gravity should be part of your calculations. .",
    example1: ["time = 3", "velo = 5", "return 59.1"],
  },
  starter: {
    title: "Starter APT",
    description:
      "Determine how many unique words in an array of words start with a specified letter. Write a method that determines how many different strings in words have a first letter equal to first.",
    example1: [
      "words = ['easy', 'lies', 'the', 'head', 'that', 'wears', 'yellow']",
      "first = 'e'",
      "return 1",
    ],
  },
  circlesCountry: {
    title: "Circles Country APT",
    description:
      "Circles Country is a country that contains several circular-shaped districts. Some districts may be situated inside other districts, but their borders do not intersect or touch. Qatam is a resident of Circles Country. When he travels between two locations, he always tries to cross the fewest number of district borders as possible because crossing borders is usually a laborious task. Imagine Circles Country as an infinite plane. You are given int[] x and int[] y and int[] r, where (x[i],y[i]) are the coordinates of the i-th district's center and r[i] is its radius. Qatam is currently at point (x1,y1) and he needs to get to point (x2,y2). Neither of these points lies on a district border. Return the minimal number of district borders he must cross to get to his destination. ",
    example1: ["[0], [0], [2], -5, 1, 5, 1", "return", "0"],
  },
  dnaMax: {
    title: "DNA Max APT",
    description:
      "Write code to find which of the strands representing DNA in an array String[] strand representing strands of DNA has the most occurrences of the nucleotide represented by parameter nuc. If more than one strand has the same maximal number of the specified nucleotide you should return the longest strand with the maximal number. All DNA strands have different lengths in this problem so the maximal strand will be unique when length is accounted for. Return this uniquely maximal strand. Each String representing a DNA strand will contain only cytosine, guanine, thymine, and adenine, represented by the characters 'c', 'g', 't', and 'a', respectively. If no strand in the array contains the specified nucleotide return the empty string",
    example1: [
      "['agt', 'aagt', 'taattt', 'caatg']",
      "nuc = 'a'",
      "return 'taattt'",
    ],
  },
  sandwichBar: {
    title: "SandwichBar APT",
    description:
      "It's time to get something to eat and I've come across a sandwich bar. Like most people, I prefer certain types of sandwiches. In fact, I keep a list of the types of sandwiches I like. The sandwich bar has certain ingredients available. I will list the types of sandwiches I like in order of preference and buy the first sandwich the bar can make for me. In order for the bar to make a sandwich for me, it must include all of the ingredients I desire. Given a String[] available, a list of ingredients the sandwich bar can use, and a String[] orders, the types of sandwiches I like, in order of preference (most preferred first), return the 0-based index of the sandwich I will buy. Each element of orders represents one type of sandwich I like as a space-separated list of ingredients in the sandwich. If the bar can make no sandwiches I like, return -1. ",
    example1: ["['ham', 'cheese', 'mustard']", "['ham', 'cheese']", "return 0"],
  },
  wordGame: {
    title: "Simple Word Game APT",
    description:
      "The Simple Word Game is a game where a player tries to remember as many words as possible from a given dictionary. The score for each distinct word that the player remembers correctly is the square of the word's length. You are given a String[] player, each element of which is a word remembered by the player. There may be duplicate words, but if the same word appears multiple times, it should only be counted once. You are given the dictionary in the String[] dictionary, each element of which is a single distinct word. Return the player's total score. ",
    example1: [
      "['apple', 'orange', 'strawberry']",
      "['strawberry', 'orange', 'grapefruit', 'watermelon']",
      "136",
    ],
  },
  txtMsg: {
    title: "TxMsg APT",
    description:
      "Strange abbreviations are often used to write text messages on uncomfortable mobile devices. One particular strategy for encoding texts composed of alphabetic characters and spaces is the following: Spaces are maintained, and each word is encoded individually. A word is a consecutive string of alphabetic characters. If the word is composed only of vowels, it is written exactly as in the original message. If the word has at least one consonant, write only the consonants that do not have another consonant immediately before them. Do not write any vowels. The letters considered vowels in these rules are 'a', 'e', 'i', 'o' and 'u'. All other letters are considered consonants. For instance, 'ps i love u' would be abbreviated as 'p i lv u' while 'please please me' would be abbreviated as 'ps ps m'. You will be given the original message in the string parameter original. Return a string with the message abbreviated using the described strategy. ",
    example1: ["text message", "return", "tx msg"],
  },
  common: {
    title: "Common APT",
    description:
      "Two strings have a letter in common if it appears in both strings. The position of letter is not important for it to be counted as common. Once a particular letter is counted as in common, it cannot be counted again. For example, an o appearing twice in one word but only once in the other counts only as one letter in common. However, an o appearing twice both words counts as two letters in common. Write a function that takes two strings and returns the number of letters they have in common. Hint: you will need some way to avoid counting a letter more than once if it is in common to both words. Recall that strings are immutable. ",
    example1: ["horse", "mirth", "returns: 2"],
  },
  lengthSort: {
    title: "LengthSort APT",
    description:
      "Sometimes sorting helps in recognizing patterns. Given an array of strings, write the method recognize that returns an array of the same strings, but sorted by length with the shortest strings first and the longest strings last in the returned array. You can create a new array or sort the array parameter value, but you must return a sorted array containing the same strings that are in values. In the returned array, strings that are the same length should be sorted in alphabetical order. See the examples for details. ",
    example1: [
      "values = ['ant', 'batter', 'catapult', 'dog']",
      "return",
      "['ant', 'dog', 'batter', 'catapult']",
    ],
  },
  sortByFreqs: {
    title: "Sort By Freqs APT",
    description:
      "The frequency with which data occurs is sometimes an important statistic. In this problem you are given an array of strings and must determine how frequently the strings occur. Return an array of strings that is sorted (ordered) by frequency. The first element of the returned array is the most frequently occurring string, the last element is the least frequently occurring. Ties are broken by listing strings in lexicographic/alphabetical order. The returned array contains one occurrence of each unique string from the array parameter. ",
    example1: [
      "data = ['apple', 'pear', 'cherry', 'apple', 'pear', 'apple', 'banana']",
      "return",
      "['apple', 'pear', 'banana', 'cherry']",
    ],
  },
  sortedFreqs: {
    title: "Sorted Freqs APT",
    description:
      "The phrases even keeled, odd job, and total eclipse might come to mind as you solve this APT. Given an array of int values, return the sum of those values that are at odd indexes, even indexes, or every index depending on whether the value of the String stype is 'odd', 'even', or 'all', respectively. See examples for details.",
    example1: [
      "data = ['apple', 'pear', 'cherry', 'apple', 'cherry', 'pear', 'apple', 'banana']",
      "return",
      "[3, 1, 2, 2]",
    ],
  },
  medalTable: {
    title: "Medal Table APT",
    description:
      "The Olympic Games will be held, and have been held (and might be being held). Given the results of the olympic disciplines, generate and return the medal table. The results of the disciplines are given as a String[] results, where each element is in the format 'GGG SSS BBB'. GGG, SSS and BBB are the 3-letter country codes (three capital letters from 'A' to 'Z') of the countries winning the gold, silver and bronze medal, respectively. The medal table is a String[] with an element for each country appearing in results. Each element has to be in the format 'CCO G S B' (quotes for clarity), where G, S and B are the number of gold, silver and bronze medals won by country CCO, e.g. 'AUT 1 4 1'. The numbers should not have any extra leading zeros. Sort the elements by the number of gold medals won in decreasing order. If several countries are tied, sort the tied countries by the number of silver medals won in decreasing order. If some countries are still tied, sort the tied countries by the number of bronze medals won in decreasing order. If a tie still remains, sort the tied countries by their 3-letter code in ascending alphabetical order. ",
    example1: [
      "['ITA JPN AUS', 'KOR TPE UKR', 'KOR KOR GBR', 'KOR, CHN, TPE']",
      "return",
      "['KOR 3 1 0', 'ITA 1 0 0', 'TPE 0 1 1', 'CHN 0 1 0', 'JPN 0 1 0', 'AUS 0 0 1', 'GBR 0 0 1', 'UKR 0 0 1']",
    ],
  },
  syllableSort: {
    title: "Syllable Sort APT",
    description:
      "Syllable sorting is a method of sorting words based on their syllabic decompositions. The first step is to decompose each word into syllables. A syllable is defined as a maximal non-empty substring of consonants followed by a maximal non-empty substring of vowels. The only vowels are 'a', 'e', 'i', 'o' and 'u'. All other letters are considered consonants. All words will start with a consonant and end with a vowel. ",
    example1: [
      "['xiaoxiao', 'yamagawa', 'gawayama']",
      "return",
      "['gawayama', 'yamagawa', 'gawayama']",
    ],
  },
};

export default function Home() {
  const [searchParams] = useSearchParams();
  const problemId = searchParams[1] as ProblemId;
  const problem = problemData[problemId];
  console.log(problem);
  return (
    <main className="flex min-h-screen flex-col  p-24">
      <Problem
        title={problem.title}
        description={problem.description}
        example1={problem.example1}
      />
    </main>
  );
}
