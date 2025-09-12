import Image from "next/image";
import Pricing from "./components/Pricing";
import Trust from "./components/Trust";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <div>
      <Pricing />
      <Trust />
      <ContactSection />
    </div>
  );
}
