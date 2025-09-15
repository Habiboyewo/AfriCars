import { Prices } from "../utilis/prices";
export default function Pricing() {
    const priceList = Prices
    return (

        <section className="py-12 ">
            <div className="max-w-6xl mx-auto px-10 md:px-16 lg:px-6 ">
                <h2 className="text-2xl font-bold text-gray-900">Transparent pricing</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">

                    {Prices.map((price) => (
                        <div key={price.id}>

                            <div className="p-6 border border-gray-300 rounded-2xl bg-white shadow-md ">
                                <h3 className="text-lg font-semibold text-gray-900">{price.title}</h3>
                                <p className="mt-2 font-extrabold text-gray-800">From ₦{price.value.toLocaleString()}</p>
                            </div>


                        </div>
                    ))}
                </div>
            </div>

        </section >
    );
}
