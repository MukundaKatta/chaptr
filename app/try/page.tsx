"use client";

import { useState } from "react";
import Link from "next/link";

const AVATAR_COLORS = [
  "from-indigo-400 to-purple-500",
  "from-teal-400 to-emerald-500",
  "from-amber-400 to-orange-500",
  "from-pink-400 to-rose-500",
  "from-sky-400 to-blue-500",
  "from-lime-400 to-green-500",
];

const FAKE_NAMES = ["Alex", "Jordan", "Sam", "Riley", "Casey", "Morgan"];

export default function TryPage() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [price, setPrice] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim()) return;
    setSubmitted(true);
  }

  function handleReset() {
    setName("");
    setTagline("");
    setPrice("");
    setSubmitted(false);
  }

  return (
    <div className="min-h-screen bg-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="flex items-center gap-2 text-lg font-bold tracking-tight">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-indigo-500" />
          Chaptr
        </Link>
        <Link
          href="/#waitlist"
          className="rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-neutral-700"
        >
          Get early access
        </Link>
      </nav>

      <div className="mx-auto max-w-2xl px-6 py-12">
        {!submitted ? (
          <>
            <div className="mb-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600">
                Community builder
              </p>
              <h1 className="mt-1 text-2xl font-bold tracking-tight">
                Set up your community in 30 seconds.
              </h1>
            </div>

            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm"
            >
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">
                    Community name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Music Producers Collective"
                    className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm placeholder-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-4 focus:ring-neutral-900/10"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">
                    Tagline
                  </label>
                  <input
                    type="text"
                    value={tagline}
                    onChange={(e) => setTagline(e.target.value)}
                    placeholder="Where producers connect, learn, and grow"
                    className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm placeholder-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-4 focus:ring-neutral-900/10"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">
                    Price per month (USD)
                  </label>
                  <input
                    type="number"
                    min="0"
                    step="1"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="9"
                    className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm placeholder-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-4 focus:ring-neutral-900/10"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="mt-6 w-full rounded-xl bg-neutral-900 px-4 py-3 text-sm font-medium text-white transition hover:bg-neutral-700"
              >
                Preview my community
              </button>
            </form>
          </>
        ) : (
          <>
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600">
                  Preview
                </p>
                <h1 className="mt-1 text-2xl font-bold tracking-tight">{name}</h1>
              </div>
              <button
                onClick={handleReset}
                className="rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium transition hover:border-neutral-900"
              >
                Start over
              </button>
            </div>

            <div className="rounded-3xl border border-neutral-200 bg-white overflow-hidden shadow-sm">
              {/* Community header */}
              <div className="border-b border-neutral-200 bg-indigo-50 px-5 py-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="font-semibold text-indigo-900">{name}</h2>
                    {tagline && (
                      <p className="mt-0.5 text-xs text-indigo-700">{tagline}</p>
                    )}
                  </div>
                  {price && Number(price) > 0 && (
                    <span className="rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white">
                      ${price}/mo
                    </span>
                  )}
                </div>
                {/* Member avatars */}
                <div className="mt-3 flex items-center gap-1">
                  {AVATAR_COLORS.map((color, i) => (
                    <div
                      key={i}
                      className={`h-7 w-7 rounded-full bg-gradient-to-br ${color} -ml-1 first:ml-0 ring-2 ring-indigo-50`}
                    />
                  ))}
                  <span className="ml-2 text-xs text-indigo-700">6 members</span>
                </div>
              </div>

              {/* Welcome post */}
              <div className="p-5">
                <div className="flex items-center gap-2 text-sm">
                  <div className="h-7 w-7 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500" />
                  <span className="font-medium">You</span>
                  <span className="text-xs text-neutral-400">&middot; just now</span>
                </div>
                <p className="mt-2 text-sm leading-relaxed">
                  Welcome to {name}! This is your community space.
                  {tagline
                    ? ` ${tagline}. `
                    : " "}
                  Drop a quick intro below and let everyone know what you are working on.
                </p>
                <div className="mt-3 flex gap-4 text-xs text-neutral-500">
                  <span>3 likes</span>
                  <span>1 reply</span>
                </div>
              </div>

              {/* A couple of fake member posts */}
              <div className="border-t border-neutral-200 p-5">
                <div className="flex items-center gap-2 text-sm">
                  <div className="h-7 w-7 rounded-full bg-gradient-to-br from-teal-400 to-emerald-500" />
                  <span className="font-medium">{FAKE_NAMES[1]}</span>
                  <span className="text-xs text-neutral-400">&middot; 5m</span>
                </div>
                <p className="mt-2 text-sm leading-relaxed">
                  Glad to be here! Looking forward to connecting with everyone.
                </p>
                <div className="mt-3 flex gap-4 text-xs text-neutral-500">
                  <span>1 like</span>
                </div>
              </div>

              <div className="border-t border-neutral-200 p-5">
                <div className="flex items-center gap-2 text-sm">
                  <div className="h-7 w-7 rounded-full bg-gradient-to-br from-amber-400 to-orange-500" />
                  <span className="font-medium">{FAKE_NAMES[2]}</span>
                  <span className="text-xs text-neutral-400">&middot; 3m</span>
                </div>
                <p className="mt-2 text-sm leading-relaxed">
                  Quick intro: been in this space for two years, excited to learn from all of you.
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm text-center">
              <p className="text-neutral-600">
                This is a preview. The real thing will have threaded chat, events, payments, and
                more.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
                <Link
                  href="/#waitlist"
                  className="rounded-full bg-neutral-900 px-7 py-3.5 font-medium text-white transition hover:bg-neutral-700"
                >
                  Get early access
                </Link>
                <button
                  onClick={handleReset}
                  className="rounded-full border border-neutral-300 px-7 py-3.5 font-medium text-neutral-900 transition hover:border-neutral-900"
                >
                  Try another
                </button>
              </div>
            </div>
          </>
        )}

        <p className="mt-6 text-center text-xs text-neutral-400">
          This is a v0 preview.{" "}
          <Link href="/#waitlist" className="underline hover:text-neutral-600">
            Join the waitlist
          </Link>{" "}
          for the full platform.
        </p>
      </div>
    </div>
  );
}
