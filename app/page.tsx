"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.location.replace("/en/");
  }, []);

  return (
    <main className="flex min-h-dvh items-center justify-center px-6 py-12">
      <div className="max-w-xl text-center">
        <p className="text-sm font-semibold text-rra-blue">Rwanda Revenue Authority</p>
        <h1 className="mt-3 text-3xl font-bold text-rra-black sm:text-4xl">
          RRA Tax Handbook 2025
        </h1>
        <p className="mt-4 text-base leading-7 text-rra-black/75">
          Opening the English handbook...
        </p>
        <Link
          href="/en/"
          className="mt-6 inline-flex rounded-md bg-rra-blue px-5 py-3 text-sm font-semibold text-rra-white"
        >
          Open handbook
        </Link>
      </div>
    </main>
  );
}
