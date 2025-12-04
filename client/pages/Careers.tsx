"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Header from "@/components/Header";
import { Footer } from "@/components/ContactAndFooter";

const jobs = [
  {
    title: "Cloud Engineer",
    location: "Remote",
    type: "Full Time",
    exp: "2-4 years",
    skills: "AWS, Terraform, Kubernetes"
  },
  {
    title: "Frontend Developer",
    location: "Bangalore, India",
    type: "Full Time",
    exp: "1-3 years",
    skills: "React.js, Tailwind, Framer Motion"
  },
  {
    title: "AI Automation Engineer",
    location: "Remote",
    type: "Full Time",
    exp: "3-6 years",
    skills: "Python, LLMs, LangChain, RPA"
  },
  {
    title: "DevOps Engineer",
    location: "Hyderabad, India",
    type: "Full Time",
    exp: "2-5 years",
    skills: "Docker, CI/CD, Azure DevOps"
  }
];

export default function Careers() {
  const [search, setSearch] = useState("");
  const [selectedJob, setSelectedJob] = useState(null);

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      {/* HERO SECTION */}
      <section className="min-h-[50vh] flex flex-col items-center justify-center text-center px-6 relative">
        {/* <video
          src="/video/origin.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        /> */}
        <div className="absolute inset-0 bg-black/50" />

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-extrabold z-10 mb-4"
        >
          Ready to <span className="text-cyan-400">Explore?</span>
        </motion.h1>

        <p className="z-10 text-lg max-w-2xl text-gray-300">
          Your next chapter begins here. Find the role where your skills,
          curiosity, and ambition can shape the future.
        </p>
      </section>

      {/* SEARCH + JOB LIST */}
      <section className="px-6 lg:px-20 py-16 flex gap-10">

        {/* FILTER SIDEBAR */}
        <div className="hidden lg:block w-[300px] border-r border-white/20 pr-6">
          <h3 className="text-xl font-semibold mb-4">Filters</h3>
          
          <div>
            <label className="text-sm text-gray-400">Search Location</label>
            <input
              type="text"
              className="mt-2 w-full bg-[#0F1C22] border border-white/10 text-white p-3 rounded-xl focus:ring-2 focus:ring-cyan-400 outline-none"
              placeholder="Remote, India..."
            />
          </div>

        </div>

        {/* JOB RESULTS */}
        <div className="flex-1">

          {/* Search Bar */}
          <div className="mb-6">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-[#0F1C22] border border-white/10 text-white text-lg p-4 rounded-xl outline-none focus:ring-2 focus:ring-cyan-400"
              placeholder="🔍 Search job title..."
            />
          </div>

          {/* Job Count */}
          <p className="text-gray-400 mb-4">{filteredJobs.length} openings</p>

          {/* Job Cards */}
          <div className="space-y-6">
            {filteredJobs.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-[#0F1C22] border border-white/10 p-6 rounded-2xl shadow-lg hover:shadow-[0_0_25px_cyan] transition cursor-pointer"
              >
                <h3 className="text-2xl font-semibold">{job.title}</h3>
                <p className="text-gray-400 mt-2">{job.location} • {job.type}</p>
                <p className="text-sm text-gray-500">Experience: {job.exp}</p>
                <p className="text-md text-gray-300 mt-3">
                  Skills: <span className="text-cyan-400 font-mono">{job.skills}</span>
                </p>

                <button
                  onClick={() => setSelectedJob(job)}
                  className="mt-5 px-6 py-3 border border-cyan-400 rounded-xl hover:bg-cyan-400 hover:text-black transition"
                >
                  Apply Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATION FORM MODAL */}
      <AnimatePresence>
        {selectedJob && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md flex justify-center items-center z-50 p-6"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-[#0F1C22] p-10 rounded-3xl border border-cyan-400 w-full max-w-lg"
            >
              <h2 className="text-3xl font-bold mb-4">
                Apply for <span className="text-cyan-400">{selectedJob.title}</span>
              </h2>

              <form className="space-y-5">
                <input className="w-full bg-black/40 border border-white/10 p-3 rounded-lg" placeholder="Full Name" />
                <input className="w-full bg-black/40 border border-white/10 p-3 rounded-lg" placeholder="Email Address" />
                <input className="w-full bg-black/40 border border-white/10 p-3 rounded-lg" placeholder="Phone Number" />

                <label className="text-gray-300">Upload Resume</label>
                <input type="file" className="w-full bg-black/40 border border-white/10 p-3 rounded-lg" />

                <textarea className="w-full bg-black/40 border border-white/10 p-3 rounded-lg h-24" placeholder="Why should we hire you?"/>

                <button className="w-full py-4 bg-cyan-400 text-black font-semibold rounded-xl hover:bg-white transition">
                  Submit Application
                </button>
              </form>

              <button
                onClick={() => setSelectedJob(null)}
                className="mt-5 text-gray-400 hover:text-white underline text-center w-full"
              >
                Cancel
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}
