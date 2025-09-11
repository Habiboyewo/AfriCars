import Image from "next/image";
import Pricing from "./components/Pricing";
import Trust from "./components/Trust";

export default function Home() {
  return (
    <div>
      <Pricing />
      <Trust />
    </div>
  );
}
