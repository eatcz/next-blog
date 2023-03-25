import React from "react";
import Image from "next/image";
import profilePic from "@/assets/imgs/preview.gif";
export default function Cover() {
  return (
    <header className="relative mb-5 h-halfvh animate__fadeInDown animate__animated">
      <div className="absolute w-full h-full header-cover cover-bg opacity-80 dark:opacity-10">
        <Image
          className="object-fill w-full h-full pointer-events-none"
          src={profilePic}
          alt={"bg-cover"}
          width={500}
        />
      </div>
    </header>
  );
}
