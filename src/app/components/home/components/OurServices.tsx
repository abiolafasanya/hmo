"use client";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { services } from "@/data/services";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";

export default function OurServices() {
  return (
    <div className="w-full h-full py-14 text-emerald-500">
      <div className="max-w-6xl mx-auto flex items-center justify-center flex-col gap-5">
        <h5 className="text-amber-500 font-semibold">Our Services</h5>
        <motion.h3
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, damping: 50 }}
          className="text-2xl px-5 lg:text-3xl lg:w-[650px] text-center"
        >
          Professional Psychology Therapy Services You Can Choose
        </motion.h3>

        <motion.article
          className="w-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, when: "beforChildren" }}
        >
          <Carousel className="w-full max-w-6xl mx-auto">
            <CarouselContent className="-ml-1 gap-5">
              {services.map((service, idx) => (
                <CarouselItem
                  key={idx}
                  className="pl-1 md:basis-1/2 lg:basis-1/3"
                >
                  <Card key={service.id} className="border-none shadow">
                    <motion.div initial={{x: -10, opacity: 0}} whileInView={{ x:0, opacity: 1}} transition={{duration: idx, staggerChildren: 0.2}} className="p-2.5 flex flex-col space-y-3 pb-3 items-center justify-center">
                      <Image
                        src={service.photo}
                        alt={service.name}
                        width={300}
                        height={300}
                        className="w-full h-[200px] rounded object-cover object-center"
                      />
                      <div className="text-center py-4 space-y-2">
                        <h3 className="text-xl font-semibold">
                          {service.name}
                        </h3>
                        <CardDescription className="line-clamp-2 text-primary font-light">
                          {service.desc}
                        </CardDescription>
                        <Link
                          href={"#"}
                          className="text-sm text-emerald-500 flex items-center justify-center"
                        >
                          <span> Read More</span>{" "}
                          <ChevronRight
                            size={18}
                            className="text-sm mt-1 inline"
                          />
                        </Link>
                      </div>
                    </motion.div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </motion.article>
      </div>
    </div>
  );
}
