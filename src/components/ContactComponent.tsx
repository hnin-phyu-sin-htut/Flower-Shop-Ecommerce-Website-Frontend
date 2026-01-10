export default function ContactComponent() {
    return (
        <div className="min-h-screen bg-pink-50 flex flex-col items-center px-6 py-12">
            <h1 className="text-5xl font-extrabold text-[#C21E56] mb-4 tracking-wide">
                Get in Touch
            </h1>
            <p className="text-gray-600 mb-12 text-center max-w-xl text-lg">
                We'd love to hear from you! Drop a message or visit our shop for fresh, stunning flowers.
            </p>

            <div className="w-full max-w-5xl grid md:grid-cols-2 gap-12">
                <form className="bg-gradient-to-br p-10 rounded-2xl shadow-xl flex flex-col gap-6 border border-[#C21E56]">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="border border-[#C21E56] rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-[#C21E56] placeholder-[#C21E56] text-gray-700"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="border border-[#C21E56] rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-[#C21E56] placeholder-[#C21E56] text-gray-700"
                    />
                    <input
                        type="text"
                        placeholder="Phone Number"
                        className="border border-[#C21E56] rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-[#C21E56] placeholder-[#C21E56] text-gray-700"
                    />
                    <textarea
                        placeholder="Your Message"
                        className="border border-[#C21E56] rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-[#C21E56] h-36 resize-none placeholder-[#C21E56] text-gray-700"
                    ></textarea>
                    <button
                        type="submit"
                        className="w-full bg-[#C21E56] text-white py-3 rounded-lg cursor-pointer transition
                            hover:bg-transparent hover:text-[#C21E56] hover:border hover:border-[#C21E56]"
                    >
                        Send Message
                    </button>
                </form>

                <div className="flex flex-col justify-between gap-6">
                    <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-[#C21E56] hover:scale-105 transition-transform">
                        <h2 className="text-2xl font-bold text-[#C21E56] mb-2">Address</h2>
                        <p className="text-gray-600">Yangon, Myanmar</p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-[#C21E56] hover:scale-105 transition-transform">
                        <h2 className="text-2xl font-bold text-[#C21E56] mb-2">Phone</h2>
                        <p className="text-gray-600">+95 9 123 456 789</p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-[#C21E56] hover:scale-105 transition-transform">
                        <h2 className="text-2xl font-bold text-[#C21E56] mb-2">Email</h2>
                        <p className="text-gray-600">info@myanmarflowershop.com</p>
                    </div>

                    <div className="mt-6">
                        <iframe
                            title="flower-shop-map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.425030193374!2d96.16625311523997!3d16.84090368891073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c194f2a2de5c8d%3A0x1234567890abcdef!2sYangon!5e0!3m2!1sen!2smm!4v1702357890123!5m2!1sen!2smm"
                            width="100%"
                            height="200"
                            className="rounded-xl border-0 shadow-md"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
