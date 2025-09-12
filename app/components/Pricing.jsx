export default function Pricing() {
    return (
        <section className="py-12">
            <div className="max-w-6xl mx-auto px-10 md:px-16 lg:px-6">

                <h2 className="text-2xl font-bold text-gray-900">Transparent pricing</h2>
                <p className="text-gray-500 mt-2">
                    “From” prices. Weeks −25% · Months −40%.
                </p>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">

                    <div className="p-6 border border-gray-300 rounded-2xl bg-white shadow-md ">
                        <h3 className="text-lg font-semibold text-gray-900">Airport transfer</h3>
                        <div className="mt-2 font-extrabold text-gray-800">From ₦40,000</div>
                    </div>

                    <div className="p-6 border border-gray-300 rounded-2xl bg-white shadow-md ">
                        <h3 className="text-lg font-semibold text-gray-900">Intrastate</h3>
                        <div className="mt-2 font-extrabold text-gray-800">From ₦60,000</div>
                    </div>

                    <div className="p-6 border border-gray-300 rounded-2xl bg-white shadow-md ">
                        <h3 className="text-lg font-semibold text-gray-900">Interstate</h3>
                        <div className="mt-2 font-extrabold text-gray-800">From ₦100,000</div>
                    </div>

                    <div className="p-6 border border-gray-300 rounded-2xl bg-white shadow-md ">
                        <h3 className="text-lg font-semibold text-gray-900">Uyo Half Day</h3>
                        <div className="mt-2 font-extrabold text-gray-800">From ₦70,000</div>
                    </div>

                    <div className="p-6 border border-gray-300 rounded-2xl bg-white shadow-md ">
                        <h3 className="text-lg font-semibold text-gray-900">Uyo Full Day</h3>
                        <div className="mt-2 font-extrabold text-gray-800">From ₦100,000</div>
                    </div>

                    <div className="p-6 border border-gray-300 rounded-2xl bg-white shadow-md ">
                        <h3 className="text-lg font-semibold text-gray-900">Wedding Full Day</h3>
                        <div className="mt-2 font-extrabold text-gray-800">From ₦120,000</div>
                    </div>
                </div>


                <p className="text-sm mt-6">
                    We are fully cashless — POS or bank transfer only.
                </p>
            </div>
        </section>
    );
}
