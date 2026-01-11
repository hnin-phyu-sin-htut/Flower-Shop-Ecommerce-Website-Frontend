import {
    FaBuilding,
    FaGift,
    FaLeaf,
    FaRing,
    FaSeedling,
    FaTruck,
    FaStar
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ServicesComponent() {

    const services = [
        { icon: <FaSeedling />, title: "Custom Bouquets", desc: "Personalized bouquets designed with love." },
        { icon: <FaTruck />, title: "Same-Day Delivery", desc: "Fast and reliable delivery across the city." },
        { icon: <FaRing />, title: "Wedding Decoration", desc: "Luxury wedding floral arrangements." },
        { icon: <FaGift />, title: "Gift Packages", desc: "Flowers with cakes, cards and surprises." },
        { icon: <FaBuilding />, title: "Corporate Flowers", desc: "Office, hotel and event floral setup." },
        { icon: <FaLeaf />, title: "Seasonal Collections", desc: "Fresh seasonal handpicked flowers." }
    ];

    return (
        <div className="min-h-screen bg-pink-50">
            <section className="text-white bg-gradient-to-r from-[#C21E56] to-[#F4C2C2]">
                <div className="max-w-6xl mx-auto px-6 py-20 text-center">
                    <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg">Our Services</h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl opacity-90">
                        Discover our professional floral services crafted for every occasion.
                    </p>
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-6 py-12">
                <h2 className="text-3xl font-bold text-[#C21E56] mb-10 text-center">What We Offer</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((s, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition transform
                            hover:-translate-y-2 border border-[#F4C2C2] group">
                            <div className="w-16 h-16 bg-[#C21E56]/20 text-[#C21E56] rounded-2xl flex items-center
                            justify-center text-3xl mb-6 group-hover:scale-110 transition">
                                {s.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-[#C21E56]">{s.title}</h3>
                            <p className="text-gray-700 text-sm">{s.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="bg-[#F4C2C2] border-y py-12">
                <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {[
                        { value: "5K+", label: "Happy Customers" },
                        { value: "10+", label: "Years Experience" },
                        { value: "20K+", label: "Bouquets Delivered" },
                        { value: "4.9", label: "Customer Ratings", stars: 1 }
                    ].map((stat, i) => (
                        <div key={i} className="bg-white rounded-2xl p-6 shadow">
                            <h3 className="text-3xl md:text-4xl font-extrabold text-[#C21E56] flex justify-center
                            items-center gap-2">
                                {stat.value}
                                {stat.stars &&
                                    Array.from({ length: stat.stars }).map((_, idx) => (
                                        <FaStar key={idx} className="text-yellow-400" />
                                    ))}
                            </h3>
                            <p className="text-gray-700 mt-2">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-6 py-12">
                <h2 className="text-3xl font-bold text-[#C21E56] mb-10 text-center">How It Works</h2>
                <div className="grid md:grid-cols-3 gap-8">

                    <div className="bg-white border border-[#F4C2C2] p-8 rounded-3xl shadow hover:shadow-xl transition transform hover:-translate-y-2">
                        <span className="text-sm font-semibold text-[#C21E56]">Step 1</span>
                        <h3 className="text-xl md:text-2xl font-bold mt-2 text-[#C21E56]">Choose Flowers</h3>
                        <p className="text-gray-700 text-sm mt-2">
                            Select from our fresh flowers and beautiful bouquets for any occasion.
                        </p>
                    </div>

                    <div className="bg-white border border-[#F4C2C2] p-8 rounded-3xl shadow hover:shadow-xl transition transform hover:-translate-y-2">
                        <span className="text-sm font-semibold text-[#C21E56]">Step 2</span>
                        <h3 className="text-xl md:text-2xl font-bold mt-2 text-[#C21E56]">Place Order</h3>
                        <p className="text-gray-700 text-sm mt-2">
                            Easily customize your bouquet and complete your order online.
                        </p>
                    </div>

                    <div className="bg-white border border-[#F4C2C2] p-8 rounded-3xl shadow hover:shadow-xl transition transform hover:-translate-y-2">
                        <span className="text-sm font-semibold text-[#C21E56]">Step 3</span>
                        <h3 className="text-xl md:text-2xl font-bold mt-2 text-[#C21E56]">Fast Delivery</h3>
                        <p className="text-gray-700 text-sm mt-2">
                            Get your flowers delivered quickly, fresh, and on time.
                        </p>
                    </div>

                </div>
            </section>

            <section className="mt-4 mb-12">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-[#C21E56] mb-10 text-center">Customer Reviews</h2>
                    <div className="grid md:grid-cols-3 gap-12">
                        {[
                            {
                                name: "Jennie Kim",
                                review: "Beautiful flowers, fast delivery and great service. Loved it!",
                                rating: 5,
                                image: "/images/customer1.jpg"
                            },
                            {
                                name: "Lee Kwang Soo",
                                review: "Excellent bouquet quality and amazing customer support!",
                                rating: 5,
                                image: "/images/customer2.jpg"
                            },
                            {
                                name: "PondPhuwin",
                                review: "Highly recommend this flower shop for any occasion!",
                                rating: 5,
                                image: "/images/customer3.jpg"
                            }
                        ].map((t, i) => (
                            <div
                                key={i}
                                className="border border-[#F4C2C2] p-8 rounded-2xl shadow-md hover:shadow-xl transition
                                flex flex-col items-center text-center">
                                <img
                                    src={t.image}
                                    alt={t.name}
                                    className="w-20 h-20 rounded-full object-cover border-3 border-[#C21E56] mb-4"
                                />
                                <div className="flex gap-1 text-yellow-400 mb-4">
                                    {Array.from({ length: t.rating }).map((_, idx) => (
                                        <FaStar key={idx} />
                                    ))}
                                </div>
                                <p className="text-gray-700 text-sm mb-4">{t.review}</p>
                                <h4 className="font-semibold text-[#C21E56] text-lg">{t.name}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-gradient-to-r from-[#C21E56] to-[#F4C2C2] text-white">
                <div className="max-w-6xl mx-auto px-6 py-20 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">Let’s Create Something Beautiful</h2>
                    <p className="opacity-90 mb-8 text-lg md:text-xl">Order now and experience premium floral services.</p>
                    <Link to="/contact">
                        <span className="inline-block text-white bg-[#C21E56] border-2 border-transparent px-10 py-3
                        rounded-full font-semibold transition duration-300 hover:bg-transparent hover:border-white
                        hover:text-white">
                            Contact Us
                        </span>
                    </Link>
                </div>
            </section>
        </div>
    );
}