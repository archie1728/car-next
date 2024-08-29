"use client";
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center space-y-4">
      <h1 className="text-6xl font-bold">About Me</h1>
      <div className="space-x-4">
        <Link href="/">
          <button className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition">
            Go to Home Page
          </button>
        </Link>
        <Link href="/vat">
          <button className="px-4 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700 transition">
            Go to VAT Page
          </button>
        </Link>
      </div>
    </main>
  );
}
