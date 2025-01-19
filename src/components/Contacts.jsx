import { useForm } from "react-hook-form";
import image from "../assets/Frame.png";
const Contacts = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <section className="relative" id="contacts">
            <div className="max-w-[1024px] mx-auto mt-16 relative">
                <div className="flex items-center justify-between text-[32px]">
                    {/* Title Section */}
                    <div className="flex items-center w-full">
                        <span className="text-[#C778DD] font-semibold mr-1">#</span>
                        <h2 className="font-bold text-white whitespace-nowrap">contacts</h2>
                        <hr className="flex-grow ml-3 border-t border-[#C778DD] max-w-[120px]" />
                    </div>
                </div>
                <div className="grid grid-cols-6 gap-5">
                    <div className="col-span-3 text-gray flex flex-col gap-10 justify-center">
                        <h2>Who am i?</h2>
                        <p>I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me</p>
                    </div>
                    <div className="col-span-3">
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                            {/* <!-- Name and Email --> */}
                            <div className="flex space-x-4">
                             <div className="flex flex-col w-1/2">
                             <input type="text" {...register("name", { required: true })} placeholder="Name" className=" p-2 border-gray bg-input placeholder-gray-500 focus:outline-none" />
                             {errors.name && <span className="text-sm text-purple">Name is required!</span>}
                             </div>
                             <div className="flex flex-col w-1/2">
                             <input type="email" {...register("email", { required: true })} placeholder="Email" className=" p-2 border-gray bg-input placeholder-gray-500 focus:outline-none" />
                             {errors.email && <span className="text-sm text-purple">Email is required!</span>}
                             </div>
                            </div>

                            {/* <!-- Title --> */}
                            <div>
                                <input type="text" {...register("title", { required: true })} placeholder="Title" className="w-full p-2 border-gray bg-input placeholder-gray-500 focus:outline-none" />
                                {errors.title && <span className="text-sm text-purple">Title is required!</span>}
                            </div>

                            {/* <!-- Message --> */}
                            <div>
                                <textarea {...register("message", { required: true })} rows="4" placeholder="Message" className="w-full p-2 border-gray bg-input placeholder-gray-500 focus:outline-none"></textarea>
                                {errors.message && <span className="text-sm text-purple">Message is required!</span>}
                            </div>

                            {/* <!-- Submit Button --> */}
                            <div>
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