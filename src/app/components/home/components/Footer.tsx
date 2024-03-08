import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import menus from "@/data/menus";
import {
  ChevronRight,
  Facebook,
  Instagram,
  MapPin,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";

export default function Footer() {
  return (
    <footer className="w-full h-full bg-emerald-600 text-emerald-50">
      <section className="max-w-6xl mx-auto px-5 md:px-0 gap-5 md:gap-0 w-full flex flex-wrap justify-between py-20">
        <article>
          <div className="flex space-x-2 items-center">
            <Image
              src={"/heartbeat.png"}
              alt="heartbeat"
              width={36}
              height={36}
            />
            <h2 className="text-2xl font-mono">HealthUnit</h2>
          </div>
          <p>Health insurance pays for your medical expenses</p>
          <section>
            <div className="flex space-x-5 py-5">
              <Button
                variant="ghost"
                size={"icon"}
                className="rounded-full bg-black/10 hover:text-emerald-600"
              >
                <Facebook />
              </Button>
              <Button
                variant="ghost"
                size={"icon"}
                className="rounded-full bg-black/10 hover:text-emerald-600"
              >
                <Twitter />
              </Button>
              <Button
                variant="ghost"
                size={"icon"}
                className="rounded-full bg-black/10 hover:text-emerald-600"
              >
                <Instagram />
              </Button>
            </div>
          </section>
        </article>
        <article>
          <h4 className="font-semibold mb-3">About Us</h4>
          <menu className="flex flex-col gap-3">
            {menus.footerMenus.about.map((about, idx) => (
              <Link
                key={idx}
                href={about.url}
                className="text-sm flex items-center gap-3"
              >
                <ChevronRight size={14} />
                {about.name}
              </Link>
            ))}
          </menu>
        </article>
        <article>
          <h4 className="font-semibold mb-3">Our Services</h4>
          <menu className="flex flex-col gap-3">
            {menus.footerMenus.services.map((service, idx) => (
              <Link
                key={idx}
                href={service.url}
                className="text-sm flex items-center gap-3"
              >
                <ChevronRight size={14} />
                {service.name}
              </Link>
            ))}
          </menu>
        </article>
        <article>
          <h4 className="font-semibold mb-4">Contact Info</h4>
          <menu className="flex flex-col gap-3">
            {menus.footerMenus.contact.map((contact, idx) => {
              const phone = `tel:${contact.value}`;
              const email = `mailto:${contact.value}`;
              const link =
                contact.title === "phone"
                  ? phone
                  : contact.title === "email"
                  ? email
                  : "#";
              return (
                <Fragment key={idx}>
                  <Link
                    key={idx}
                    href={link}
                    title={contact.title}
                    className="text-sm flex items-center gap-3"
                  >
                    <contact.icon size={16} />
                    {contact.value}
                  </Link>
                </Fragment>
              );
            })}
            <div className="text-sm flex items-center gap-3">
              <MapPin size={16} />
              <span>21 King Street Ikeja, 3000, Nigeria</span>
            </div>
          </menu>
        </article>
      </section>
      <Separator className="w-full bg-emerald-300" />
      <p className="p-3 text-center text-sm">
        Copyright © HealthUnit {new Date(Date.now()).getFullYear()}. All rights
        reserved
      </p>
    </footer>
  );
}
