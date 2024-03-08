"use client";
import React from "react";
import abouts from "@/data/abouts";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { homeAnimation } from "@/data/animation";

export default function AboutUs() {
  const {about} = homeAnimation;
  return (
    <div className="bg-amber-50/90 w-full h-full py-24 px-5 md:px-0">
      <div className="w-full max-w-6xl mx-auto h-full">
        <h5 className="text-amber-500 font-semibold">About us</h5>
        <article className="flex w-full py-5 gap-10 items-center justify-between">
          <section className="w-full">
            <h3 className="text-2xl">
              A Better Life Starts with a Beautiful Smile
            </h3>
            <p className="text-primary py-5">
              Quis nostrud exercitation ullamco laboris nisi aut aliquio modo
              consequat ruis aute irure dolor in reprehenderit in voluptate
              velit esse cillum fugiat dolore.
            </p>
            <AnimatePresence>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {abouts.values.map((value, idx) => (
                  <motion.p
                    key={idx}
                    variants={about(idx)}
                    initial="hidden"
                    whileInView="visible"
                    className="text-sm bg-white shadow rounded p-2 bg-blend-difference"
                  >
                    <CheckCircle2
                      size={16}
                      className="inline mr-2 text-amber-500"
                    />
                    <span>{value.name}</span>
                    {": "}
                    <span>{value.desc}</span>
                  </motion.p>
                ))}
              </div>
            </AnimatePresence>
            <Button className="hover:bg-amber-600 hover:text-amber-50 font-semibold min-w-[200px] bg-emerald-600 text-emerald-50 h-14 mt-5">
              Learn More
            </Button>
          </section>
          <section className="hidden md:block w-full">
            <div className="w-full flex items-center justify-center relative">
              <Image
                src={"/medic2.jpg"}
                alt="medical photo"
                width={300}
                height={300}
                className="w-[350px] h-[350px] object-cover object-center rounded-full"
              />
              <Image
                src={"/medic1.jpg"}
                alt="medical photo"
                width={300}
                height={300}
                className="absolute -top-5 right-4 border-2 border-white w-[150px] h-[150px] object-cover object-center rounded-full"
              />
            </div>
          </section>
        </article>
      </div>
    </div>
  );
}
