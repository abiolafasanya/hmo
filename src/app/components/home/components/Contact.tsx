"use client";
import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import contact from "@/data/contact";
import { motion } from "framer-motion";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

export default function Contact() {
  const { form, onSubmit } = useContactForm();
  return (
    <div id="contact" className="w-full h-full">
      <section className="flex">
        <motion.article
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="hidden md:block w-1/2"
        >
          <Image
            src={"/medic1.jpg"}
            alt="contact us image"
            width={500}
            height={500}
            className="w-full h-full"
          />
        </motion.article>
        <article className="w-full md:w-1/2 py-20 px-5 md:px-12">
          <div className="space-y-4 mb-4">
            <h5 className="font-semibold text-amber-500">Book With Us Now</h5>
            <h3 className="text-2xl">Get an Appointment</h3>
            <p>Molestiae non recusandae itaque earum rerum sarien.</p>
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              method="post"
              className="space-y-5"
            >
              <div className="flex flex-col md:flex-row justify-between gap-5">
                <FormField
                  name="name"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <Input
                          {...field}
                          className={styles.input}
                          placeholder="Name"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="email"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Email Address"
                          {...field}
                          className={styles.input}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex flex-col md:flex-row justify-between gap-5">
                <FormField
                  name="department"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="h-14">
                            <SelectValue placeholder="Choose Your Depatment" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {contact.department.map((dept, idx) => (
                            <SelectItem
                              key={idx}
                              value={dept}
                              className="capitalize"
                            >
                              {dept}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="doctor"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="h-14">
                            <SelectValue placeholder="Choose Your Depatment" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {contact.doctors.map((doctor, idx) => (
                            <SelectItem
                              key={idx}
                              value={doctor}
                              className="capitalize"
                            >
                              {doctor}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex flex-col md:flex-row justify-between gap-5">
                <FormField
                  name="date"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <Input
                          type="date"
                          {...field}
                          className={styles.input}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="phone"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <Input
                          type="tel"
                          prefix="+234"
                          placeholder="+2348103209416"
                          {...field}
                          className={styles.input}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button
                className={styles.btn}
                disabled={form.formState.isSubmitting}
              >
                Book Appointment
              </Button>
            </form>
          </Form>
        </article>
      </section>
    </div>
  );
}

const styles = {
  input: "flex h-14 w-full",
  btn: "w-full h-14 hover:bg-emerald-600 hover:text-emerald-50 bg-amber-600 text-amber-50 font-semibold",
};

function useContactForm() {
  const formSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    doctor: z.string(),
    date: z.string().transform((data) => new Date(data).toLocaleDateString()),
    department: z.string(),
    phone: z.string(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    form.reset();
    toast("Appointment Booked", {
      description:
        "Your appointment has been received, please check your email to see your appointment date",
      position: "top-right",
      closeButton: true,
      cancel: { label: "Close" },
      onAutoClose: (toast) => {},
    });
    setTimeout(() => {}, 1000);
  }

  return {
    form,
    onSubmit,
  };
}
