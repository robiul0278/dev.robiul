"use client";

import { useEffect, useRef, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

gsap.registerPlugin(ScrollTrigger);

type FormData = {
  name: string;
  email: string;
  title: string;
  message: string;
};

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    setLoading(true);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          form_name: data.name,
          form_email: data.email,
          to_name: "Dev",
          title: data.title,
          message: data.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            toast.success("Email sent successfully!");
            reset();
            setLoading(false);
          }
        },
        (error) => {
          toast.error(`Error: ${error.text}`);
          setLoading(false);
        }
      );
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title on scroll
      if (titleRef.current) {
        gsap.from(titleRef.current, {
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          x: -100,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        });
      }

      const form = contentRef.current?.querySelector("form");
      const info = contentRef.current?.querySelector(".info");

      // Animate form on scroll
      if (form) {
        gsap.from(form, {
          scrollTrigger: {
            trigger: form,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          opacity: 0,
          x: 50,
          duration: 1.2,
          ease: "power3.out",
          delay: 0.3,
        });
      }

      // Animate info text on scroll
      if (info) {
        gsap.from(info, {
          scrollTrigger: {
            trigger: info,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          opacity: 0,
          x: -50,
          duration: 1.2,
          ease: "power3.out",
          delay: 0.3,
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-16 bg-white text-gray-900 dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 dark:text-white overflow-hidden transition-colors duration-500"
    >
      {/* Background Blobs */}
      <div className="absolute inset-0">
        {/* Dark Mode Blobs */}
        <div className="hidden dark:block">
          <div className="absolute top-1/3 left-1/4 w-[600px] h-[500px] bg-gradient-to-tr from-green-700/10 via-cyan-700/10 to-blue-700/10 rounded-full blur-3xl" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 lg:px-0">
        <div ref={contentRef} className="space-y-8">
          <div
            ref={titleRef}
            className="flex items-center justify-between text-[26px] lg:text-[32px]"
          >
            <div className="flex items-center">
              <span className="text-[#C778DD] font-semibold mr-1">#</span>
              <h2 className="font-bold whitespace-nowrap">Contact</h2>
              <hr className="flex-grow ml-3 border-t w-32 lg:w-[240px] border-gray-300 dark:border-white/30" />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Right Card Form */}
            <Card className="bg-gray-100 text-gray-900 border border-gray-300 dark:bg-slate-900 dark:text-white dark:border-0 transition-all duration-500">
              <CardHeader>
                <CardTitle className="text-xl">Let’s Connect</CardTitle>
                <CardDescription className="text-gray-600 dark:text-slate-400">
                  Feel free to drop me a message.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  {/* Name + Email */}
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="w-full md:w-1/2">
                      <Input
                        className="border border-gray-300 placeholder:text-gray-500 dark:border-slate-700 dark:placeholder:text-slate-400"
                        type="text"
                        placeholder="Name"
                        {...register("name", { required: true })}
                      />
                      {errors.name && (
                        <p className="text-xs mt-1 ml-1 text-red-500 dark:text-red-400">
                          Name is required!
                        </p>
                      )}
                    </div>
                    <div className="w-full md:w-1/2">
                      <Input
                        className="border border-gray-300 placeholder:text-gray-500 dark:border-slate-700 dark:placeholder:text-slate-400"
                        type="email"
                        placeholder="Email"
                        {...register("email", { required: true })}
                      />
                      {errors.email && (
                        <p className="text-xs mt-1 ml-1 text-red-500 dark:text-red-400">
                          Email is required!
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Title */}
                  <Input
                    className="border border-gray-300 placeholder:text-gray-500 dark:border-slate-700 dark:placeholder:text-slate-400"
                    type="text"
                    placeholder="Title"
                    {...register("title", { required: true })}
                  />
                  {errors.title && (
                    <p className="text-xs ml-1 text-red-500 dark:text-red-400">
                      Title is required!
                    </p>
                  )}

                  {/* Message */}
                  <Textarea
                    className="border border-gray-300 placeholder:text-gray-500 dark:border-slate-700 dark:placeholder:text-slate-400"
                    placeholder="Message"
                    rows={10}
                    {...register("message", { required: true })}
                  />
                  {errors.message && (
                    <p className="text-xs ml-1 text-red-500 dark:text-red-400">
                      Message is required!
                    </p>
                  )}

                  {/* Submit */}
                  <div className="flex justify-end">
                    <Button
                      type="submit"
                      variant="secondary"
                      className="bg-gray-800 text-white hover:bg-gray-700 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition-all"
                    >
                      {loading ? "Sending..." : "Send"}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Left Info */}
            <div className="flex items-center justify-center w-full h-full">
              <div className="space-y-5 text-gray-700 dark:text-white transition-colors duration-500 text-base leading-relaxed info text-center max-w-md">
                <p className="font-semibold text-blue-500 transition-colors duration-500">Who am I?</p>
                <p>
                  I’m interested in freelance opportunities. However, if you have other requests
                  or questions, don’t hesitate to contact me.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
