import Image from "next/image";
import React from "react";
import Menu from "./Menu";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="bg-cover w-full bg-hero-bg bg-blend-saturation">
      <section className="w-full bg-opacity-80 backdrop-blur-sm bg-emerald-700 text-emerald-50 bg-blend-overlay">
        <Menu />
        <article className="flex max-w-6xl mx-auto h-screen items-center justify-center">
          <div className="w-1/2 space-y-4">
            <h4 className="text-sm text-white">Welcome To The HealthUnit</h4>
            <h2 className="text-4xl font-semibold">
              We Always Provide Best Health Care Services For You.
            </h2>
            <p className="text-base text-white">
              You need health care that is easy, individualized, of high
              quality, and affordable for you to be healthy
            </p>
            <div className="flex space-x-5">
              <Button className="h-14 bg-amber-600 hover:bg-amber-700">
                Book Appointment
              </Button>
              <Button variant={"secondary"} className="h-14">
                Read More
              </Button>
            </div>
          </div>
          <div className="w-1/2 flex items-center justify-between">
            <picture className="rounded-full w-[350px] h-[350px] overflow-hidden ml-auto">
              <Image
                src={"/work-time.jpg"}
                alt="duration of work"
                width={200}
                height={200}
                className="w-full h-full "
              />
            </picture>
          </div>
        </article>
      </section>
    </div>
  );
}
