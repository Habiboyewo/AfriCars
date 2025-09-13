import BookingForm from "./bookingFormsComponents/BookingForm";

export default function BookingSection() {
    return (
        <section>
            <div className="max-w-6xl mx-auto mt-10 px-10 md:px-16 lg:px-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2  gap-8 items-center">
                <div className="md:col-span-2 lg:col-span-1">
                    <BookingForm />
                </div>
                <div>
                    <div className="md:col-span-1 lg:col-span-1">
                        <h2 className="font-bold text-xl">Seamless rides,<br /><span className="text-[#2bd889]">sophisticated</span> experience</h2>
                        <p className="text-gray-500 mt-2">Uber‑style simplicity with AfriCars finesse. Book in seconds, get quick confirmation, and ride in comfort.</p>
                        <div className="mt-6">
                            <a className="mt-2 py-2 underline font-semibold text-[#2bd889] border border-gray-300 rounded-xl px-4 py-1 " href="https://wa.me/2347013502404" target="_blank" rel="noopener">Chat on WhatsApp</a>
                            <a className="mt-2 mx-2 py-2 underline font-semibold text-[#2bd889] border border-gray-300 rounded-xl px-4 py-1 " href="#pricing">See pricing</a>
                            <a className="mt-2 mx-2 py-2 underline font-semibold text-[#2bd889] border border-gray-300 rounded-xl px-4 py-1 " href="https://www.instagram.com/myafricars" target="_blank" rel="noopener">Instagram</a>
                        </div>
                    </div>
                </div>
            </div>

        </section >
    )
}