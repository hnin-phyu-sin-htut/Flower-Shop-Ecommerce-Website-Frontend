export default function AboutComponent() {
    return (
        <div className="min-h-screen bg-pink-50 flex flex-col items-center py-12 px-6">
            <h1 className="text-5xl font-extrabold text-[#C21E56] mb-6 tracking-wide text-center">
                About Our Bouquet Shop
            </h1>
            <p className="text-gray-600 mb-12 max-w-3xl text-center text-lg">
                At Myanmar Bouquet Shop, we craft stunning bouquets that turn moments into memories.
                From birthdays to anniversaries, our arrangements bring joy, color, and elegance to every occasion.
            </p>

            <div className="w-full max-w-5xl grid md:grid-cols-2 gap-12 items-center">
                <img
                    src="/images/about-image.png"
                    alt="Bouquet Arrangement"
                    className="w-full h-85 object-cover rounded-2xl shadow-lg border border-[#C21E56]"/>

                <div className="flex flex-col gap-6">
                    <h2 className="text-3xl font-bold text-[#C21E56]">Our Passion</h2>
                    <p className="text-gray-700 text-lg">
                        We specialize in crafting bouquets that speak emotions without words.
                        Every bouquet is carefully designed with the freshest flowers, color harmony, and style in mind.
                    </p>
                    <p className="text-gray-700 text-lg">
                        Our mission is to make every gift unforgettable, turning simple flowers into beautiful experiences.
                    </p>
                </div>
            </div>

            <div className="w-full max-w-5xl mt-16 grid md:grid-cols-3 gap-8 text-center">
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform
                border border-[#C21E56]">
                    <h3 className="text-2xl font-bold text-[#C21E56] mb-2">Custom Bouquets</h3>
                    <p className="text-gray-600">
                        Each bouquet is tailored to your style and occasion, making it unique and personal.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform
                border border-[#C21E56]">
                    <h3 className="text-2xl font-bold text-[#C21E56] mb-2">Occasion Ready</h3>
                    <p className="text-gray-600">
                        Birthdays, anniversaries, weddings, or just because - we create bouquets for every special moment.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform
                border border-[#C21E56]">
                    <h3 className="text-2xl font-bold text-[#C21E56] mb-2">Fresh & Stylish</h3>
                    <p className="text-gray-600">
                        Only the freshest flowers, arranged with care and an eye for style to impress every recipient.
                    </p>
                </div>
            </div>
        </div>
    );
}
