import React from "react";
import Head from "next/head";
export default function Layout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <>
      {/* <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
          rel="stylesheet"
        />
      </Head> */}
      <div className="flex flex-col text-gray-900 transition-all main-container bg-gray-50 dark:bg-gray-900 dark:text-white">
        {/* <main className="flex-1 h-full mb-8 overflow-y-hidden main"> */}
        {children}
        {/* </main> */}
      </div>
    </>
  );
}
