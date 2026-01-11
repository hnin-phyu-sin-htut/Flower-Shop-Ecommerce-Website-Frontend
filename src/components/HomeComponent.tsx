import { useEffect, useState } from "react";
import type { HomeFlower } from "../model/HomeFlower";
import { listAllHomeProducts } from "../service/ProductService";
import { FaSeedling, FaTruck, FaRing, FaGift } from "react-icons/fa";
import {useNavigate} from "react-router-dom";
import {getRoleName, isLoggedIn} from "../service/AuthService.ts";

export default function HomeComponent() {
    const [flowers, setFlowers] = useState<HomeFlower[]>([]);
    const userRole = getRoleName();
    const isCustomer = userRole === "ROLE_CUSTOMER";
    const loggedIn = isLoggedIn();
    const navigator = useNavigate();

    useEffect(() => {
        listAllHomeProducts()
            .then(res => setFlowers(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="min-h-screen bg-pink-50">
            <section className="relative bg-gradient-to-r from-[#C21E56] to-[#F4C2C2] text-white">
                <div className="max-w-6xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2 text-center md:text-left">
                        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
                            Bloom Something Beautiful Today
                        </h1>
                        <p className="text-lg md:text-xl opacity-90 mb-6">
                            Handcrafted bouquets made to turn moments into memories - fresh, fragrant, and full of love.
                        </p>
                        <button
                            className="inline-block bg-white text-[#C21E56] px-8 py-3 rounded-full font-semibold
                            shadow hover:shadow-lg transition cursor-pointer duration-200"
                            onClick={() => {
                                if (!isCustomer || !loggedIn) {
                                    navigator("/login", {
                                        state: { infoMessage: "Please login to purchase flowers!" },
                                    });
                                    return;
                                }
                                navigator("/products");
                            }}>
                            Shop Now
                        </button>
                    </div>
                    <div className="md:w-200">
                        <img
                            src="/images/welcom-image.png"
                            alt="Flowers"
                            className="rounded-full shadow-md mx-auto md:mx-0 w-full object-cover"
                        />
                    </div>
                </div>
            </section>

            <section id="popular-flowers" className="container mx-auto mt-12">
                <h1 className="text-3xl text-[#C21E56] font-bold text-center mb-12">
                    Most Popular Flowers
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4
                sm:px-6 md:px-10 lg:px-16">
                    {flowers.map(flower => (
                        <div
                            key={flower.id}
                            className="rounded-xl border border-[#C21E56] shadow-md bg-white p-6 flex
                            flex-col items-center hover:scale-105 transform transition">
                            <img
                                src={flower.image || "/images/no-images.png"}
                                alt={flower.name}
                                className="rounded-xl w-full h-48 object-contain mb-4"/>
                            <h2 className="text-xl font-bold text-center text-[#C21E56] mb-2">
                                {flower.name}
                            </h2>
                        </div>
                    ))}
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-6 py-16">
                <h2 className="text-3xl font-bold text-[#C21E56] mb-12 text-center">
                    Our Services
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { icon: <FaSeedling />, title: "Custom Bouquets", desc: "Personalized bouquets designed with love." },
                        { icon: <FaTruck />, title: "Same-Day Delivery", desc: "Fast and reliable delivery across the city." },
                        { icon: <FaRing />, title: "Wedding Decoration", desc: "Luxury wedding floral arrangements." },
                        { icon: <FaGift />, title: "Gift Packages", desc: "Flowers with cakes, cards, and surprises." }
                    ].map((s, i) => (
                        <div key={i} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition
                        transform hover:-translate-y-2 border border-[#F4C2C2] group text-center">
                            <div className="w-16 h-16 bg-[#C21E56]/20 text-[#C21E56] rounded-2xl flex items-center
                            justify-center text-3xl mb-6 mx-auto group-hover:scale-110 transition">
                                {s.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-[#C21E56]">{s.title}</h3>
                            <p className="text-gray-700 text-sm">{s.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="mb-12">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-[#C21E56] mb-12 text-center">
                        Seasonal Collections
                    </h2>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        <div className="border border-[#F4C2C2] rounded-xl shadow-lg hover:shadow-2xl p-6 transition">
                            <img
                                src="/images/sakura-cherry-blossom.png"
                                alt="Seasonal Flower"
                                className="rounded-xl w-full h-48 object-cover mb-4"
                            />
                            <h3 className="text-[#C21E56] font-bold text-center">Spring Bloom</h3>
                        </div>
                        <div className="border border-[#F4C2C2] rounded-xl shadow-lg hover:shadow-2xl p-6 transition">
                            <img
                                src="/images/summer-sunflower-luxe.png"
                                alt="Seasonal Flower"
                                className="rounded-xl w-full h-48 object-cover mb-4"
                            />
                            <h3 className="text-[#C21E56] font-bold text-center">Summer Delight</h3>
                        </div>
                        <div className="border border-[#F4C2C2] rounded-xl shadow-lg hover:shadow-2xl p-6 transition">
                            <img
                                src="/images/autumn-chrysanthemum.png"
                                alt="Seasonal Flower"
                                className="rounded-xl w-full h-48 object-cover mb-4"
                            />
                            <h3 className="text-[#C21E56] font-bold text-center">Autumn Charm</h3>
                        </div>
                        <div className="border border-[#F4C2C2] rounded-xl shadow-lg hover:shadow-2xl p-6 transition">
                            <img
                                src="/images/winter-amaryllis.png"
                                alt="Seasonal Flower"
                                className="rounded-xl w-full h-48 object-cover mb-4"
                            />
                            <h3 className="text-[#C21E56] font-bold text-center">Winter Glow</h3>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
