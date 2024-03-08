"use client";
import menu from "@/data/menus";
import { MenuIcon, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion, useAnimationControls } from "framer-motion";

export default function Menu() {
  const [open, setOpen] = React.useState(false);
  const control = useAnimationControls();

  function handleClose() {
    control.start({
      y: -100,
      opacity: 0,
      transition: { duration: 1 },
      animation: "ease-in-out",
    });

    setTimeout(() => {
      setOpen(false);
    }, 1000);
  }
  function handleOpen() {
    setOpen(true);
    control.start({
      y: 0,
      opacity: 1,
      transition: { duration: 1 },
      animation: "ease-in-out",
    });
  }
  return (
    <motion.menu className="max-w-6xl px-5 lg:px-0 py-5 mx-auto flex justify-between items-center">
      <div className="flex space-x-2 items-center">
        <Image src={"/heartbeat.png"} alt="heartbeat" width={36} height={36} />
        <h2 className="text-2xl font-mono">HealthUnit</h2>
      </div>
      <div className="hidden lg:flex gap-5">
        {menu.navigations.map((nav) => (
          <Link key={nav.id} href={nav.url}>
            <span className="capitalize">{nav.name}</span>
          </Link>
        ))}
      </div>
      {open ? (
        <>
          <motion.div
            animate={control}
            className="w-full top-0 right-0 p-5 bg-emerald-900 text-emerald-50 flex flex-col lg:hidden gap-5 absolute"
          >
            <div className="flex w-full justify-between items-center">
              <div className="flex space-x-2 items-center">
                <Image
                  src={"/heartbeat.png"}
                  alt="heartbeat"
                  width={36}
                  height={36}
                />
                <h2 className="text-2xl font-mono">HealthUnit</h2>
              </div>
              <X className="md:hidden" onClick={handleClose} />
            </div>
            <div className="flex flex-col gap-5 text-center items-center justify-center">
              {menu.navigations.map((nav) => (
                <Link
                  key={nav.id}
                  href={nav.url}
                  className="text-lg hover:text-emerald-300"
                >
                  <span className="capitalize">{nav.name}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        </>
      ) : (
        <MenuIcon className="md:hidden" onClick={handleOpen} />
      )}
    </motion.menu>
  );
}
