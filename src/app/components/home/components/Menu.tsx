import menu from "@/data/menus";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Menu() {
  return (
    <menu className="max-w-6xl py-5 mx-auto flex justify-between items-center">
      <div className="flex space-x-2 items-center">
        <Image src={"/heartbeat.png"} alt="heartbeat" width={36} height={36} />
        <h2 className="text-2xl font-mono">HealthUnit</h2>
      </div>
      <div className="flex gap-5">
        {menu.navigations.map((nav) => (
          <Link key={nav.id} href={nav.url}>
            <span className="capitalize">{nav.name}</span>
          </Link>
        ))}
      </div>
    </menu>
  );
}
