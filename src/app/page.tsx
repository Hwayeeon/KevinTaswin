import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-3xl m-auto text-center font-bold">Welcome To <span className="text-red-500">Mendo.corp</span></h1>
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]"></ol>
        <Image
          className="m-auto rounded-lg"
          src="/mendoCorp.png"
          alt="Mendo Corporation Logo"
          width={90}
          height={90}
        />
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Our Website
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer">
            Follow our Github
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex flex-col gap-4 items-center justify-center text-sm text-gray-600 dark:text-gray-400 p-4 sm:p-6 border-t border-gray-200 dark:border-gray-700 w-full">
        <div className="flex gap-6 flex-wrap items-center justify-center">
          <a href="/about" className="hover:underline">
            About Us
          </a>
          <a href="/services" className="hover:underline">
            Services
          </a>
          <a href="/contact" className="hover:underline">
            Contact
          </a>
          <a href="/privacy" className="hover:underline">
            Privacy Policy
          </a>
        </div>
        <div className="flex gap-4">
          <a href="https://github.com/Hwayeeon/" target="_blank" rel="noopener noreferrer" className="hover:underline">
            <span className="sr-only">GitHub</span>
            <img
              src="/github.svg"
              alt="GitHub"
              className="w-6 h-6"
            />
          </a>
          <a href="https://github.com/Hwayeeon/" target="_blank" rel="noopener noreferrer" className="hover:underline">
            <span className="sr-only">Twitter</span>
            <img
              src="/twitter.svg"
              alt="Twitter"
              className="w-6 h-6 bg-white rounded-full p-1"
            />
          </a>
          <a href="https://github.com/Hwayeeon/" target="_blank" rel="noopener noreferrer" className="hover:underline">
            <span className="sr-only">LinkedIn</span>
            <img
              src="/linkedin.svg"
              alt="LinkedIn"
              className="w-6 h-6"
            />
          </a>
        </div>
        <p className="text-center text-xs sm:text-sm">
          © {new Date().getFullYear()} Mendo.corp. All rights reserved.
        </p>
      </footer>

    </div>
  );
}
