import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Github from "../components/GitHub";
import Select from "react-tailwindcss-select";
import { useState } from "react";
import { optionsFirst, optionsSecond, optionsThird } from "./../data";
import { Toaster, toast } from "react-hot-toast";

export default function Home() {
  const [firstOption, setFirstOption] = useState(null);
  const [secondOption, setSecondOption] = useState(null);
  const [thirdOption, setThirdOption] = useState(null);
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);
  const [nb, setNb] = useState("");
  const [usage, setUsage] = useState("");

  function onFirstChange(selectedOption) {
    if (secondOption) {
      setFirstOption(selectedOption);
      setShowSecond(true);
      setSecondOption(null);
      setShowThird(false);
      setNb("");
      setUsage("");
    } else if (optionsSecond[selectedOption.value].length === 1) {
      setFirstOption(selectedOption);
      setShowSecond(true);
      onSecondChange(optionsSecond[selectedOption.value][0]);
    } else {
      setFirstOption(selectedOption);
      setShowSecond(true);
    }
  }
  function onSecondChange(selectedOption) {
    if (selectedOption.usage) {
      setSecondOption(selectedOption);
      setShowThird(false);
      setNb(selectedOption.nb);
      setUsage(selectedOption.usage);
      setThirdOption(null);
    } else if (optionsThird[selectedOption.value].length === 1) {
      setSecondOption(selectedOption);
      setShowThird(true);
      setThirdOption(null);
      setNb("");
      setUsage("");
      onThirdChange(optionsThird[selectedOption.value][0]);
    } else {
      setSecondOption(selectedOption);
      setShowThird(true);
      setThirdOption(null);
      setNb("");
      setUsage("");
    }
  }
  function onThirdChange(selectedOption) {
    setThirdOption(selectedOption);
    setNb(selectedOption.nb);
    setUsage(selectedOption.usage);
  }
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl min-h-screen py-2 mx-auto">
      <Head>
        <title>Git Command Explorer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <svg
          className="relative left-1/2 -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-40rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9089FC" />
              <stop offset={1} stopColor="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <svg
          className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9089FC" />
              <stop offset={1} stopColor="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <Header />
      <main className="flex flex-col items-center flex-1 w-full px-4 mt-12 text-center sm:mt-20">
        <a
          className="flex items-center justify-center px-4 py-2 mb-5 space-x-2 text-sm text-gray-600 transition-colors bg-white border border-gray-300 rounded-full shadow-md max-w-fit hover:bg-gray-100"
          href="https://github.com/su-yash-7/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github />
          <p>Star on GitHub</p>
        </a>
        <h1 className="max-w-[708px] text-4xl font-bold text-slate-900 sm:text-6xl">
          Git <span className="text-[#9333ea]">Command</span> Explorer{" "}
        </h1>
        <p className="mt-5 text-slate-500">
          {" "}
          Find the right commands you need without digging through the web.
        </p>
        <div className="w-full max-w-lg">
          <div className="flex items-center mt-10 space-x-3">
            <p className="text-2xl font-bold text-left">I want to:</p>
          </div>
          <div className="flex flex-col items-center justify-center max-w-lg mx-auto mt-5 space-y-8">
            <Select
              placeholder="..."
              value={firstOption}
              options={optionsFirst}
              onChange={onFirstChange}
              classNames={{
                menuButton: ({ isDisabled }) =>
                  `pl-3 flex text-sm text-gray-700 border border-gray-300 cursor-pointer rounded shadow-sm transition ease-in--out duration-100 focus:outline-none ${
                    isDisabled
                      ? "bg-gray-200"
                      : "bg-white hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-black "
                  }`,
                menu: "absolute z-10 w-full bg-white shadow-lg border rounded py-1 mt-1.5 text-sm text-gray-700 ",
                listItem: ({ isSelected }) =>
                  `block transition duration-200 px-4 py-2 cursor-pointer select-none w-full text-left flex items-center space-x-3 justify-between
                    ${
                      isSelected
                        ? `text-gray-700 bg-gray-200`
                        : `text-gray-700 hover:bg-gray-100 hover:text-gray-900`
                    }`,
              }}
            />
            {showSecond ? (
              <Select
                placeholder="..."
                value={secondOption}
                options={optionsSecond[firstOption.value]}
                onChange={onSecondChange}
                classNames={{
                  menuButton: ({ isDisabled }) =>
                    `pl-3 flex text-sm text-gray-700 border border-gray-300 cursor-pointer rounded shadow-sm transition ease-in--out duration-100 focus:outline-none ${
                      isDisabled
                        ? "bg-gray-200"
                        : "bg-white hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-black "
                    }`,
                  menu: "absolute z-10 w-full bg-white shadow-lg border rounded py-1 mt-1.5 text-sm text-gray-700 ",
                  listItem: ({ isSelected }) =>
                    `block transition duration-200 px-4 py-2 cursor-pointer select-none w-full text-left flex items-center space-x-3 justify-between
                    ${
                      isSelected
                        ? `text-gray-700 bg-gray-200`
                        : `text-gray-700 hover:bg-gray-100 hover:text-gray-900`
                    }`,
                }}
              />
            ) : null}
            {showThird ? (
              <Select
                placeholder="..."
                onChange={onThirdChange}
                value={thirdOption}
                options={optionsThird[secondOption.value]}
                classNames={{
                  menuButton: ({ isDisabled }) =>
                    `pl-3 flex text-sm text-gray-700 border border-gray-300 cursor-pointer rounded shadow-sm transition ease-in--out duration-100 focus:outline-none ${
                      isDisabled
                        ? "bg-gray-200"
                        : "bg-white hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-black "
                    }`,
                  menu: "absolute z-10 w-full bg-white shadow-lg border rounded py-1 mt-1.5 text-sm text-gray-700 ",
                  listItem: ({ isSelected }) =>
                    `block transition duration-200 px-4 py-2 cursor-pointer select-none w-full text-left flex items-center space-x-3 justify-between
                    ${
                      isSelected
                        ? `text-gray-700 bg-gray-200`
                        : `text-gray-700 hover:bg-gray-100 hover:text-gray-900`
                    }`,
                }}
              />
            ) : null}
          </div>
        </div>
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{ duration: 2000 }}
        />
        {usage && (
          <>
            <div className="w-full max-w-lg mt-10 mb-5 space-y-10">
              <p className="text-2xl font-bold text-left">Usage</p>
            </div>
            <div className="flex flex-col items-center justify-center max-w-lg mx-auto space-y-6">
              <div
                className="p-4 transition bg-white border shadow-md cursor-copy rounded-xl hover:bg-gray-100"
                onClick={() => {
                  navigator.clipboard.writeText(usage);
                  toast("Copied to clipboard", {
                    icon: "✂️",
                  });
                }}
              >
                <p>{usage}</p>
              </div>
            </div>
          </>
        )}
        {nb && (
          <>
            <div className="w-full max-w-lg mt-10 mb-5 space-y-10">
              <p className="text-2xl font-bold text-left">Note</p>
            </div>
            <div className="flex flex-col items-center justify-center max-w-lg mx-auto space-y-8">
              <div className="p-4 transition bg-white border shadow-md rounded-xl hover:bg-gray-100">
                <p>{nb}</p>
              </div>
            </div>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
