import Pricing from "./components/Pricing";
import Trust from "./components/Trust";
import ContactSection from "./components/ContactSection";
import BookingSection from "./components/BookingSection";

export default function Home() {
  return (
    <div>
      <BookingSection />
      <Pricing />
      <Trust />
      <ContactSection />
    </div>
  );
}
