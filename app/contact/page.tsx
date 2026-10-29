"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ContactPage() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed to send message");

      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg("Failed to send message. Please try again.");
    }
  };

  // Fungsi untuk menutup tab (jika dibuka lewat window.open) atau kembali ke home
  const handleCloseTab = () => {
    if (window.opener) {
      window.opener.focus();
      window.close();
    } else {
      router.push("/");
    }
  };

  return (
    <main className="min-h-screen w-full text-slate-900 dark:text-white transition-colors duration-300 py-6 px-4">
      <div className="w-full max-w-5xl mx-auto rounded-3xl border border-slate-200 dark:border-slate-700/60 bg-white dark:bg-gradient-to-b dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 px-6 md:px-10 pt-6 pb-10 shadow-xl overflow-hidden">

        {/* HEADER DENGAN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-start gap-4 pt-4 mb-8">

          {/* TOMBOL BACK TO HOME */}
          <div className="flex justify-center md:justify-start md:mt-2">
            <button
              onClick={() => {
                window.open("", "_self");
                window.close();
              }}
              className="inline-flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-600 px-4 py-2 rounded-lg transition-all duration-200 cursor-pointer shadow-sm group">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </button>
          </div>

          {/* TEKS TENGAH */}
          <div className="text-center flex flex-col items-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-orange-500/10 border border-orange-500/30 mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-[#ff7b00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold mb-1">
              <span className="text-[#ff7b00]">Contact</span> Us
            </h1>
            <p className="text-slate-700 dark:text-slate-300 text-sm">
              Have a question, suggestion, or bug report? Send us a message.
            </p>
          </div>

          {/* KOLOM KANAN KOSONG */}
          <div className="hidden md:block"></div>
        </div>

        {/* FORM CARD */}
        <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/60 backdrop-blur-md p-6 md:p-8 shadow-lg">

          {status === "success" ? (
            <div className="text-center py-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-emerald-500 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Message Sent!</h2>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-6">Thank you, we will get back to you soon.</p>
              <button
                onClick={() => setStatus("idle")}
                className="px-6 py-2 rounded-lg bg-[#ff7b00] hover:bg-[#e66a00] text-white text-sm font-semibold transition">
                Send Another Message
              </button>
            </div>
           ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wider">Name</label>
                  <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Your full name"
                    className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800/60 px-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 outline-none focus:border-[#ff7b00] transition" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wider">Email</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="email@example.com"
                    className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800/60 px-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 outline-none focus:border-[#ff7b00] transition" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wider">Subject</label>
                <input type="text" name="subject" value={form.subject} onChange={handleChange} required placeholder="e.g. Staking support"
                  className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800/60 px-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 outline-none focus:border-[#ff7b00] transition" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wider">Message</label>
                <textarea name="message" value={form.message} onChange={handleChange} required rows={6} placeholder="Write your message here..."
                  className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800/60 px-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 outline-none focus:border-[#ff7b00] transition resize-none" />
              </div>
              {status === "error" && (
                <p className="text-xs text-red-500 dark:text-red-400 bg-red-500/10 border border-red-500/30 rounded-lg px-3 py-2">{errorMsg}</p>
              )}
              <button type="submit" disabled={status === "sending"}
                className="w-full py-3 rounded-lg bg-gradient-to-r from-[#ff7b00] to-orange-600 hover:from-orange-600 hover:to-[#ff7b00] text-white text-sm font-bold transition-all duration-300 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 disabled:opacity-50 disabled:cursor-not-allowed">
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
            </form>
           )}

          <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700/60 text-center">
            <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">Or contact us directly via email:</p>
            <a href="mailto:contact@alfadzc.xyz" className="text-sm text-[#ff7b00] hover:text-orange-400 font-semibold transition">contact@alfadzc.xyz</a>
          </div>
        </div>
      </div>
    </main>
  );
}
