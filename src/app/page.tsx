'use client'; // if using app router
import React from 'react';
import { Mail, Linkedin, Phone, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white font-sans">
      <section className="text-center py-20 px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
        >
          Hey, I'm Ashish
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-lg mt-4 text-gray-300"
        >
          Backend Developer crafting scalable apps with Ruby on Rails & Python.
        </motion.p>

        {/* ✅ Contact Info */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-2 sm:gap-4 mt-6 text-sm text-gray-400 text-center">
          <a
            href="mailto:developerashishchouhan@gmail.com"
            className="hover:text-white flex items-center gap-2"
          >
            <Mail size={18} /> developerashishchouhan@gmail.com
          </a>
          <a
            href="tel:+919644001717"
            className="hover:text-white flex items-center gap-2"
          >
            <Phone size={18} /> +91 9644001717
          </a>
          <a
            href="https://linkedin.com/in/anshk1717"
            target="_blank"
            className="hover:text-white flex items-center gap-2"
          >
            <Linkedin size={18} /> LinkedIn
          </a>
          <a
            href="https://www.instagram.com/workshyansh/"
            target="_blank"
            className="hover:text-white flex items-center gap-2"
          >
            <Instagram size={18} /> Instagram
          </a>
        </div>
      </section>

      {/* ✅ Objective */}
      <section className="max-w-3xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-semibold mb-4 text-blue-400">Objective 🎯</h2>
        <p className="text-gray-300">
          Backend Developer with expertise in Ruby on Rails and Python. Passionate about building scalable, secure, and performant web applications. Seeking to contribute technical excellence and problem-solving skills to forward-thinking development teams.
        </p>
      </section>

      {/* ✅ Skills */}
      <section className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-semibold mb-6 text-pink-400">My Toolbox 🧰</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-200">
          <li>Ruby on Rails</li>
          <li>Python</li>
          <li>REST APIs</li>
          <li>Docker</li>
          <li>Sidekiq & Redis</li>
          <li>PostgreSQL / MySQL</li>
          <li>Git & GitHub</li>
          <li>RSpec</li>
          <li>CI/CD</li>
        </ul>
      </section>

      {/* ✅ Work Experience */}
      <section className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-semibold mb-6 text-purple-400">Work Experience 💼</h2>
        <div className="space-y-6">
          <div className="bg-transparent p-6 rounded-xl shadow hover:shadow-purple-400/30 transition">
            <h3 className="text-xl font-bold text-white">Globant, Pune</h3>
            <p className="text-sm text-gray-400 mb-2">Jr Adv Ruby on Rails Developer | Aug 2024 - June 2025</p>
            <ul className="list-disc list-inside text-gray-300">
              <li>Developed end-to-end features in a Ruby on Rails microservices architecture</li>
              <li>Integrated Sidekiq and Redis for background processing</li>
              <li>Collaborated with React developers to design scalable APIs</li>
              <li>Used Docker for dev and staging environments</li>
            </ul>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl shadow hover:shadow-purple-400/30 transition">
            <h3 className="text-xl font-bold text-white">Bestpeers, Indore</h3>
            <p className="text-sm text-gray-400 mb-2">Jr Ruby on Rails Developer | Sept 2021 - Aug 2024</p>
            <ul className="list-disc list-inside text-gray-300">
              <li>Built RESTful APIs with authentication and service design patterns</li>
              <li>Wrote RSpec tests and optimized ActiveRecord queries</li>
              <li>Debugged and maintained backend systems using Rails console and byebug</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-10">
  <h2 className="text-3xl font-semibold mb-10 text-yellow-400 text-center">Featured Projects 🚀</h2>
  <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-yellow-500/30 transition-all duration-300 hover:-translate-y-1"
    >
      <h3 className="text-xl font-bold text-white mb-2">Sewamo</h3>
      <p className="text-sm text-gray-300 mb-4">A household service booking platform connecting users with local trusted providers.</p>
      <div className="flex flex-wrap gap-2 text-xs text-yellow-300">
        <span className="bg-gray-800 px-2 py-1 rounded">Ruby on Rails</span>
        <span className="bg-gray-700 px-2 py-1 rounded">PostgreSQL</span>
        <span className="bg-gray-700 px-2 py-1 rounded">Redis</span>
      </div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-pink-500/30 transition-all duration-300 hover:-translate-y-1"
    >
      <h3 className="text-xl font-bold text-white mb-2">Puravankara</h3>
      <p className="text-sm text-gray-300 mb-4">Real estate discovery & admin platform to manage projects, users, and property listings.</p>
      <div className="flex flex-wrap gap-2 text-xs text-pink-300">
        <span className="bg-gray-700 px-2 py-1 rounded">Rails</span>
        <span className="bg-gray-700 px-2 py-1 rounded">Active Admin</span>
        <span className="bg-gray-700 px-2 py-1 rounded">Sidekiq</span>
      </div>
    </motion.div>
  </div>
</section>

      {/* ✅ Projects */}
      <section className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-semibold mb-6 text-purple-400">Work Experience 💼</h2>
        <div className="space-y-6">
          <div className="bg-transparent p-6 rounded-xl shadow hover:shadow-purple-400/30 transition">
            <h3 className="text-xl font-bold text-white">Globant, Pune</h3>
            <p className="text-sm text-gray-400 mb-2">Jr Adv Ruby on Rails Developer | Aug 2024 - June 2025</p>
            <ul className="list-disc list-inside text-gray-300">
              <li>Developed end-to-end features in a Ruby on Rails microservices architecture</li>
              <li>Integrated Sidekiq and Redis for background processing</li>
              <li>Collaborated with React developers to design scalable APIs</li>
              <li>Used Docker for dev and staging environments</li>
            </ul>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl shadow hover:shadow-purple-400/30 transition">
            <h3 className="text-xl font-bold text-white">Bestpeers, Indore</h3>
            <p className="text-sm text-gray-400 mb-2">Jr Ruby on Rails Developer | Sept 2021 - Aug 2024</p>
            <ul className="list-disc list-inside text-gray-300">
              <li>Built RESTful APIs with authentication and service design patterns</li>
              <li>Wrote RSpec tests and optimized ActiveRecord queries</li>
              <li>Debugged and maintained backend systems using Rails console and byebug</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-10">
  <h2 className="text-3xl font-semibold mb-10 text-yellow-400 text-center">Featured Projects 🚀</h2>
  <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-yellow-500/30 transition-all duration-300 hover:-translate-y-1"
    >
      <h3 className="text-xl font-bold text-white mb-2">Sewamo</h3>
      <p className="text-sm text-gray-300 mb-4">A household service booking platform connecting users with local trusted providers.</p>
      <div className="flex flex-wrap gap-2 text-xs text-yellow-300">
        <span className="bg-gray-800 px-2 py-1 rounded">Ruby on Rails</span>
        <span className="bg-gray-700 px-2 py-1 rounded">PostgreSQL</span>
        <span className="bg-gray-700 px-2 py-1 rounded">Redis</span>
      </div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-pink-500/30 transition-all duration-300 hover:-translate-y-1"
    >
      <h3 className="text-xl font-bold text-white mb-2">Puravankara</h3>
      <p className="text-sm text-gray-300 mb-4">Real estate discovery & admin platform to manage projects, users, and property listings.</p>
      <div className="flex flex-wrap gap-2 text-xs text-pink-300">
        <span className="bg-gray-700 px-2 py-1 rounded">Rails</span>
        <span className="bg-gray-700 px-2 py-1 rounded">Active Admin</span>
        <span className="bg-gray-700 px-2 py-1 rounded">Sidekiq</span>
      </div>
    </motion.div>
  </div>
</section>

      {/* ✅ Certifications */}
      <section className="max-w-3xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-semibold mb-4 text-green-400">Certifications 📜</h2>
        <ul className="list-disc list-inside text-gray-300">
          <li>Python Programming – Udemy</li>
          <li>FastAPI – Udemy</li>
        </ul>
      </section>

      <footer className="text-center text-sm text-gray-500 py-10">
        Made with ❤️ by Ashish Chouhan — {new Date().getFullYear()}
      </footer>
    </main>
  );
}
