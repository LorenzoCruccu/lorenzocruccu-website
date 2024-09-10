import Link from "next/link";

export default function Footer() {
  const currentDate = new Date()
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; {currentDate.getFullYear()} Lorenzo. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend, Vercel hosting.
      </p>
      <span className="text-xs">
        <Link
          href="https://github.com/ByteGrad/portfolio-website"
          target="_blank" rel="noopener noreferrer">See more</Link>
      </span>
    </footer>
  );
}
