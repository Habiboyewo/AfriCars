
import EnquiryForm from "./EnquiryForm";

export default function ContactSection() {
    return (
        <section >
            <div className="max-w-6xl mx-auto mt-4 mb-20 px-10 md:px-16 lg:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-14 ">
                    <div className="md:pt-20">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Call or WhatsApp</h2>
                        <ul className="mt-3">
                            <li className="pt-1 text-sm">📞 <a href="tel:+2347013502404">+234-701-350-2404</a></li>
                            <li className="pt-1 text-sm">💬 <a href="https://wa.me/2347013502404" target="_blank" rel="noopener">WhatsApp</a></li>
                            <li className="pt-1 text-sm">✉️ <a href="mailto:info@myafricars.com">info@myafricars.com</a></li>
                            <li className="pt-1 text-sm">📸 <a href="https://www.instagram.com/myafricars" target="_blank" rel="noopener">Instagram</a></li>
                            <li className="pt-1 text-sm">📍 Uyo, Nigeria</li>

                        </ul>
                    </div>
                    <EnquiryForm />
                </div>
            </div>

        </section>
    )
}