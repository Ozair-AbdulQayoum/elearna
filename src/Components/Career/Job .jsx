import React from "react";
import { motion } from "framer-motion";

export default function JobOpenings() {
  const jobOpeningData = {
    heading: {
      title: "Job Opening",
      subtitle: "Be a part of our faculty",
    },

    jobs: [
      {
        title: "Software Development Instructor",
        posts: "50 Posts available",
        location: "4367 Lula Shores, Derekton 48438",
        salary: "$23K - $35K",
        desc: "Lorem ipsum dolor sit amet consectetur.",
        type: "Full-time, Permanent",
        exp: "2 years",
        button: "Apply Now",
      },
      {
        title: "Machine Learning Educator",
        posts: "35 Posts available",
        location: "4367 Lula Shores, Derekton 48438",
        salary: "$20K - $35K",
        desc: "Lorem ipsum dolor sit amet consectetur.",
        type: "Full-time, Permanent",
        exp: "2 years",
        button: "Apply Now",
      },
      {
        title: "Blockchain Technology Instructor",
        posts: "47 Posts available",
        location: "4367 Lula Shores, Derekton 48438",
        salary: "$26K - $40K",
        desc: "Lorem ipsum dolor sit amet consectetur.",
        type: "Full-time, Permanent",
        exp: "3 years",
        button: "Apply Now",
      },
      {
        title: "Digital Design & UX Instructor",
        posts: "50 Posts available",
        location: "4367 Lula Shores, Derekton 48438",
        salary: "$23K - $35K",
        desc: "Lorem ipsum dolor sit amet consectetur.",
        type: "Full-time, Permanent",
        exp: "2 years",
        button: "Apply Now",
      },
    ],
  };

  const { heading, jobs } = jobOpeningData;

  return (
    <section className="w-full py-20 px-6 md:px-20 bg-gray-50">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold mb-2">{heading.title}</h2>
        <p className="text-gray-600 text-lg">{heading.subtitle}</p>
      </motion.div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-8">
        {jobs.map((job, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300"
          >
            <h3 className="text-xl font-bold">{job.title}</h3>

            <p className="text-blue-600 font-medium mt-1">{job.posts}</p>

            <p className="text-gray-500 text-sm mt-1">{job.location}</p>

            <div className="flex items-center justify-between mt-4">
              <p className="text-lg font-bold text-gray-800">{job.salary}</p>

              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                {job.button}
              </button>
            </div>

            <div className="mt-6 text-sm text-gray-700 space-y-2">
              <p>
                <span className="font-semibold">Job Description :</span>
                <br />
                {job.desc}
              </p>

              <p>
                <span className="font-semibold">Job Type :</span> {job.type}
              </p>

              <p>
                <span className="font-semibold">Experience :</span> {job.exp}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
