import React from "react";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div className="flex flex-col text-gray-900 transition-all main-container bg-gray-50 dark:bg-gray-900 dark:text-white">
      {children}
    </div>
  );
}
