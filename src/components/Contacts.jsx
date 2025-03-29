import { useForm } from "react-hook-form";
import image from "../assets/Frame.png";
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from "react";


const Contacts = () => {
    const {
        reset,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const serviceID = "service_6jhsgf8";
        const templateID = "template_e4imigr";
        const publicKey = "k0U9-ZmaEjg6ktTBn";

        const templateParams = {
            form_name: data.name,
            form_email: data.email,
            to_name: "Dev",
            title: data.title,
            message: data.message,
        };

        emailjs
            .send(serviceID, templateID, templateParams, publicKey) // Use `send` instead of `sendForm`
            .then(
                (result) => {
                    if (result.text === "OK") {
                        toast.success("Email sent successfully!", { position: "bottom-center" });
                    }
                    reset(); // Ensure `reset` is defined in your scope
                },
                (error) => {
                    alert(`Error: ${error.text}`);
                }
            );
    };

     useEffect(() => {
            AOS.init();
        })


    return (
        <section className="relative" id="contacts">
            <div className="max-w-[1024px] mx-auto relative p-5 lg:p-0">
                <div  className="flex items-center justify-between text-[24px] lg:text-[28px] ">
                    {/* Title Section */}
                    <div className="flex items-center w-full">
                        <span className="text-[#C778DD] font-semibold mr-1">#</span>
                        <h2 className="font-bold text-white whitespace-nowrap">contacts</h2>
                        <hr className="flex-grow ml-3 border-t border-[#C778DD] max-w-[120px]" />
                    </div>
                </div>
                <div  className="flex flex-col md:flex-row gap-5">
                    <div data-aos="fade-down" className="text-gray text-sm lg:text-[17px] py-5 lg:p-0 flex flex-col gap-5 lg:gap-10 justify-center lg:w-1/2">
                        <h2>Who am i?</h2>
                        <a>I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me</a>
                    </div>
                    <div data-aos="fade-down" className="lg:w-1/2">
                        <form  onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                            {/* <!-- Name and Email --> */}
                            <div  className="flex gap-2">
                                <div>
                                    <input type="text" {...register("name", { required: true })} placeholder="Name" className="w-full p-2 border-gray bg-input placeholder-gray-500 focus:outline-none" />
                                    {errors.name && <span className="text-sm text-purple">Name is required!</span>}
                                </div>
                                <div>
                                    <input type="email" {...register("email", { required: true })} placeholder="Email" className="w-full p-2 border-gray bg-input placeholder-gray-500 focus:outline-none" />
                                    {errors.email && <span className="text-sm text-purple">Email is required!</span>}
                                </div>

                            </div>

                            {/* <!-- Title --> */}
                            <div >
                                <input type="text" {...register("title", { required: true })} placeholder="Title" className="w-full p-2 border-gray bg-input placeholder-gray-500 focus:outline-none" />
                                {errors.title && <span className="text-sm text-purple">Title is required!</span>}
                            </div>

                            {/* <!-- Message --> */}
                            <div >
                                <textarea {...register("message", { required: true })} rows="4" placeholder="Message" className="w-full p-2 border-gray bg-input placeholder-gray-500 focus:outline-none"></textarea>
                                {errors.message && <span className="text-sm text-purple">Message is required!</span>}
                            </div>

                            {/* <!-- Submit Button --> */}
                            <div >
                                <button type="submit" className="px-6 py-1.5 border-gray bg-input placeholder-gray-500 focus:outline-none hover:border-[#C778DD]">
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <img src={image} alt="logo" className="absolute  bottom-10 left-0 z-50" />

        </section>
    )
}

export default Contacts;