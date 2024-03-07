"use client";
import { useState } from "react";
import Modal from "./components/modal";
import { useRouter } from "next/navigation";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [showVideo2Modal, setShowVideo2Modal] = useState(false);
  const [showVideo3Modal, setShowVideo3Modal] = useState(false);
  const router = useRouter();
  const handleNavigate = (problemId: string) => {
    router.push(`/problem?name=${problemId}`);
  };

  return (
    <main className="flex min-h-screen flex-col  p-24">
      <div className="text-2xl">David Xu&apos;s Updated APT System</div>
      <div className="relative flex before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]"></div>
      <div className="py-8 flex flex-col items-start">
        <div className="flex flex-row justify-center items-center">
          <h2 className="text-xl"> Problem Set 1 - Arrays</h2>
          <div className="pl-8">
            <button
              onClick={() => setShowModal(true)}
              className="cursor-pointer px-3 py-2 rounded-full  bg-purple-600"
            >
              <p className="text-sm">Related problems</p>
            </button>
          </div>
          <div className="pl-8">
            <button
              onClick={() => setShowVideoModal(true)}
              className="cursor-pointer px-3 py-2 rounded-full  bg-red-900"
            >
              <p className="text-sm">Video solutions</p>
            </button>
          </div>
        </div>
        <div className="pt-5 flex flex-row">
          <div>
            <button
              onClick={() => handleNavigate("totality")}
              className="px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-700 transition duration-150"
            >
              ☄️ Totality
            </button>
          </div>
          <div className="pl-16">
            <button
              onClick={() => handleNavigate("accessLevel")}
              className="px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-700 transition duration-150"
            >
              🧞 Access Level
            </button>
          </div>
          <div className="pl-16">
            <button
              onClick={() => handleNavigate("gravity")}
              className="px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-700 transition duration-150"
            >
              😶‍🌫️ Gravity
            </button>
          </div>
          <div className="pl-16">
            <button
              onClick={() => handleNavigate("starter")}
              className="px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-700 transition duration-150"
            >
              🤞 Starter
            </button>
          </div>
          <div className="pl-16">
            <button
              onClick={() => handleNavigate("circlesCountry")}
              className="px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-700 transition duration-150"
            >
              🌐 Circles Country
            </button>
          </div>
        </div>
      </div>
      <div className="py-8 flex flex-col items-start">
        <div className="flex flex-row justify-center items-center">
          <h2 className="text-xl"> Problem Set 2 - Arrays + String</h2>
          <div className="pl-8">
            <button
              onClick={() => setShowModal(true)}
              className="cursor-pointer px-3 py-2 rounded-full  bg-pink-600"
            >
              <p className="text-sm">Related problems</p>
            </button>
          </div>
          <div className="pl-8">
            <button
              onClick={() => setShowVideo2Modal(true)}
              className="cursor-pointer px-3 py-2 rounded-full  bg-blue-500"
            >
              <p className="text-sm">Video solutions</p>
            </button>
          </div>
        </div>
        <div className="pt-5 flex flex-row">
          <div>
            <button
              onClick={() => handleNavigate("dnaMax")}
              className="px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-700 transition duration-150"
            >
              🧬 DNAMaxNucleotide
            </button>
          </div>
          <div className="pl-16">
            <button
              onClick={() => handleNavigate("sandwichBar")}
              className="px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-700 transition duration-150"
            >
              🥪 SandwichBar
            </button>
          </div>
          <div className="pl-16">
            <button
              onClick={() => handleNavigate("wordGame")}
              className="px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-700 transition duration-150"
            >
              🗨️ SimpleWordGame
            </button>
          </div>
          <div className="pl-16">
            <button
              onClick={() => handleNavigate("txtMsg")}
              className="px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-700 transition duration-150"
            >
              ☄️ TxMsg
            </button>
          </div>
          <div className="pl-16">
            <button
              onClick={() => handleNavigate("common")}
              className="px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-700 transition duration-150"
            >
              🏔️ Common
            </button>
          </div>
        </div>
      </div>
      <div className="py-8 flex flex-col items-start">
        <div className="flex flex-row justify-center items-center">
          <h2 className="text-xl"> Problem Set 2 - Sorting</h2>
          <div className="pl-8">
            <button
              onClick={() => setShowModal3(true)}
              className="cursor-pointer px-3 py-2 rounded-full  bg-fuchsia-600"
            >
              <p className="text-sm">Related problems</p>
            </button>
          </div>
          <div className="pl-8">
            <button
              onClick={() => setShowVideo3Modal(true)}
              className="cursor-pointer px-3 py-2 rounded-full  bg-orange-500"
            >
              <p className="text-sm">Video solutions</p>
            </button>
          </div>
        </div>
        <div className="pt-5 flex flex-row">
          <div>
            <button
              onClick={() => handleNavigate("lengthSort")}
              className="px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-700 transition duration-150"
            >
              🙉 LengthSort
            </button>
          </div>
          <div className="pl-16">
            <button
              onClick={() => handleNavigate("sortByFreqs")}
              className="px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-700 transition duration-150"
            >
              🫀 SortByFreqs
            </button>
          </div>
          <div className="pl-16">
            <button
              onClick={() => handleNavigate("sortedFreqs")}
              className="px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-700 transition duration-150"
            >
              🚣‍♂️ SortedFreqs
            </button>
          </div>
          <div className="pl-16">
            <button
              onClick={() => handleNavigate("medalTable")}
              className="px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-700 transition duration-150"
            >
              🐨 MedalTable
            </button>
          </div>
          <div className="pl-16">
            <button
              onClick={() => handleNavigate("syllableSort")}
              className="px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-700 transition duration-150"
            >
              🚵‍♂️ SyllableSort
            </button>
          </div>
        </div>
      </div>
      <Modal
        links={[
          "https://leetcode.com/problems/contains-duplicate/",
          "https://leetcode.com/problems/two-sum/",
          "https://leetcode.com/problems/group-anagrams/",
          "https://leetcode.com/problems/daily-temperatures/",
          "https://leetcode.com/problems/valid-parentheses/",
        ]}
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
      <Modal
        links={[
          "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
          "https://leetcode.com/problems/permutation-in-string/",
          "https://leetcode.com/problems/longest-repeating-character-replacement/",
          "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
          "https://leetcode.com/problems/sliding-window-maximum/",
        ]}
        isOpen={showModal2}
        onClose={() => setShowModal2(false)}
      />
      <Modal
        links={[
          "https://leetcode.com/problems/number-of-islands/",
          "https://leetcode.com/problems/max-area-of-island/",
          "https://leetcode.com/problems/course-schedule/",
          "https://leetcode.com/problems/course-schedule-ii/",
          "https://leetcode.com/problems/rotting-oranges/",
        ]}
        isOpen={showModal3}
        onClose={() => setShowModal3(false)}
      />
      <Modal
        links={[
          "https://youtu.be/3OamzN90kPg",
          "https://youtu.be/KLlXCFG5TnA",
          "https://youtu.be/vzdNOK2oB2E",
          "https://youtu.be/cTBiBSnjO3c",
          "https://youtu.be/WTzjTskDFMg",
        ]}
        isOpen={showVideoModal}
        onClose={() => setShowVideoModal(false)}
      />
      <Modal
        links={[
          "https://youtu.be/1pkOgXD63yU",
          "https://youtu.be/UbyhOgBN834",
          "https://youtu.be/gqXU1UyA8pk",
          "https://youtu.be/wiGpQwVHdE0",
          "https://youtu.be/DfljaUwZsOk",
        ]}
        isOpen={showVideo2Modal}
        onClose={() => setShowVideo2Modal(false)}
      />
      <Modal
        links={[
          "https://youtu.be/pV2kpPD66nE",
          "https://youtu.be/iJGr1OtmH0c",
          "https://youtu.be/EgI5nU9etnU",
          "https://youtu.be/Akt3glAwyfY",
          "https://youtu.be/y704fEOx0s0",
        ]}
        isOpen={showVideo3Modal}
        onClose={() => setShowVideo3Modal(false)}
      />
    </main>
  );
}
