import Head from "next/head";
import Header from "../components/Header";
import Github from "../components/GitHub";

export default function Home() {
  return (
    <div className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center py-2">
      <Head>
        <title>Git Command Explorer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="mt-12 flex w-full flex-1 flex-col items-center justify-center px-4 text-center sm:mt-20">
        <a
          className="mb-5 flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm text-gray-600 shadow-md transition-colors hover:bg-gray-100"
          href="https://github.com/su-yash-7/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github />
          <p>Star on GitHub</p>
        </a>
        <h1 className="max-w-[708px] text-4xl font-bold text-slate-900 sm:text-6xl">
          Git <span className="text-gray-600">Command</span> Explorer{" "}
        </h1>
        <p className="mt-5 text-slate-500">
          {" "}
          Find the right commands you need without digging through the web.
        </p>
      </main>
    </div>
  );
}
