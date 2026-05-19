import Link from "next/link";

function getCurrentYear() {
  return new Date().getFullYear();
}

export default function Home() {
  const currentYear = getCurrentYear();

  return (
    <>
      <meta httpEquiv="refresh" content="0; url=/en/" />
      <script
        dangerouslySetInnerHTML={{
          __html: "window.location.replace('/en/');",
        }}
      />
      <main className="flex min-h-dvh items-center justify-center px-6 py-12">
        <div className="max-w-xl text-center">
          <p className="text-sm font-semibold text-rra-blue">Rwanda Revenue Authority</p>
          <h1 className="mt-3 text-3xl font-bold text-rra-black sm:text-4xl">
            RRA Tax Handbook {currentYear}
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
    </>
  );
}
