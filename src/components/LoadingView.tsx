"use client";

import { JSX } from "react";

import { VscLoading } from "react-icons/vsc";
export default function LoadingView({
  className,
}: {
  className?: string;
}): JSX.Element {
  return (
    <div
      className={
        className ||
        "h-[75dvh] w-full gap-y-1 text-primary text-4xl flex flex-col items-center justify-center text-center"
      }
    >
      <VscLoading className="animate-spin " />
      <p className="text-3xl">Loading....</p>
    </div>
  );
}
