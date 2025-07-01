"use client";

import { useEffect, useRef, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";
import gsap from "gsap";
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
    const form = contentRef.current?.querySelector("form");
    const info = contentRef.current?.querySelector(".info");

    if (form) {
      gsap.fromTo(
        form,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 1.2, ease: "power3.out", delay: 0.3 }
      );
    }

    if (info) {
      gsap.fromTo(
        info,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 1.2, ease: "power3.out", delay: 0.3 }
      );
    }
  }, sectionRef);

  return () => ctx.revert();
}, []);


  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden px-4"
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-0">
        <div ref={contentRef} className="space-y-8">
          {/* Section Title */}
          <div className="flex items-center text-2xl font-semibold">
            <span className="text-[#C778DD] mr-2">#</span>
            <h2>contacts</h2>
            <div className="flex-grow border-t  ml-3 max-w-[150px]" />
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Right Card Form */}
            <Card className="bg-slate-900 border-0 text-white max-w-full">
              <CardHeader>
                <CardTitle className="text-xl">Let’s Connect</CardTitle>
                <CardDescription className="text-slate-400">
                  Feel free to drop me a message.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  {/* Name + Email */}
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="w-full md:w-1/2">
                      <Input
                        className="border-slate-700 placeholder:text-slate-400"
                        type="text"
                        placeholder="Name"
                        {...register("name", { required: true })}
                      />
                      {errors.name && (
                        <p className="text-xs  mt-1 ml-1">
                          Name is required!
                        </p>
                      )}
                    </div>
                    <div className="w-full md:w-1/2">
                      <Input
                        className=" border-slate-700 placeholder:text-slate-400"
                        type="email"
                        placeholder="Email"
                        {...register("email", { required: true })}
                      />
                      {errors.email && (
                        <p className="text-xs  mt-1 ml-1">
                          Email is required!
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Title */}
                  <Input
                    className=" border-slate-700 placeholder:text-slate-400"
                    type="text"
                    placeholder="Title"
                    {...register("title", { required: true })}
                  />
                  {errors.title && (
                    <p className="text-xs  ml-1">
                      Title is required!
                    </p>
                  )}

                  {/* Message */}
                  <Textarea
                    className=" border-slate-700 placeholder:text-slate-400"
                    placeholder="Message"
                    rows={10}
                    {...register("message", { required: true })}
                  />
                  {errors.message && (
                    <p className="text-xs  ml-1">
                      Message is required!
                    </p>
                  )}

                  {/* Submit */}
                  <div className="flex justify-end">
                    <Button
                      type="submit"
                      variant="secondary"
                      className=""
                    >
                      {loading ? "Sending..." : "Send"}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
            {/* Left Info */}
            <div className="flex items-center justify-center w-full h-full">
              <div className="space-y-5 text-slate-300 text-base leading-relaxed info text-center max-w-md">
                <p className=" font-semibold">Who am I?</p>
                <p>
                  I’m interested in freelance opportunities. However, if you have
                  other requests or questions, don’t hesitate to contact me.
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
