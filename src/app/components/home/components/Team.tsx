"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import abouts from "@/data/abouts";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Team() {
  return (
    <div className="w-full h-full bg-slate-100 py-24">
      <div className="space-y-5 mb-14">
        <h5 className="font-semibold text-amber-500 text-center">
          Professional Team
        </h5>
        <h3 className="text-center text-2xl">Meet Our Experience Doctors</h3>
      </div>
      <AnimatePresence mode="popLayout">
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, when: "beforeChildren" }}
          className="max-w-6xl mx-auto w-full flex space-x-5"
        >
          <Carousel className="w-full max-w-6xl mx-auto">
            <CarouselContent className="-ml-1 gap-5">
              {abouts.teams.map((team, idx) => (
                <CarouselItem
                  key={idx}
                  className="pl-1 md:basis-1/2 lg:basis-1/3"
                >
                  <Card key={team.id} className="border-none shadow">
                    <CardContent className="p-3">
                      <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                          duration: 2,
                          delay: idx,
                          staggerChildren: 0.5,
                        }}
                        className="pb-5 text-center"
                      >
                        <Image
                          src={team.photo}
                          alt=""
                          width={300}
                          height={300}
                          className="w-full mb-5 max-h-[300px] object-cover rounded object-top"
                        />
                        <h4 className="font-semibold text-primary">
                          {team.name}
                        </h4>
                        <span className="text-sm text-foreground">
                          {team.role}
                        </span>
                      </motion.div>
                      <CardDescription className="space-x-5 flex justify-center">
                        <Button
                          variant="outline"
                          size={"icon"}
                          className="rounded-full border-input"
                        >
                          <Facebook />
                        </Button>
                        <Button
                          variant="outline"
                          size={"icon"}
                          className="rounded-full"
                        >
                          <Twitter />
                        </Button>
                        <Button
                          variant="outline"
                          size={"icon"}
                          className="rounded-full"
                        >
                          <Instagram />
                        </Button>
                      </CardDescription>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </motion.section>
      </AnimatePresence>
    </div>
  );
}
