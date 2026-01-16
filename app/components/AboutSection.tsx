'use client';

import { motion } from "motion/react"

export default function AboutSection() {
  
  return (
    <section id="about">
    <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col items-start justify-center h-screen text-white">
            <motion.h2 
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0}}
                transition={{ duration: 0.8, ease: "easeInOut", delay: 0.1 }}
                className="mb-5 text-6xl"
            >
                <b>About us</b>
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity :1, y: 0}}
                transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3 }}
                className="mb-5"
            >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, placeat consectetur illum, eveniet molestiae nemo quas iusto exercitationem doloremque dignissimos optio id? Et earum vitae assumenda harum, est facilis nihil!
            </motion.p>
            <motion.p
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity :1, y: 0}}
                transition={{ duration: 0.8, ease: "easeInOut", delay: 0.6 }}
            >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, placeat consectetur illum, eveniet molestiae nemo quas iusto exercitationem doloremque dignissimos optio id? Et earum vitae assumenda harum, est facilis nihil!
            </motion.p>
        </div>
        </div>
    </div>
    </section>
  );
}