import Hero from "./components/hero";
import Brand from "./components/brand";
import Ceramics from "./components/ceramics";
import Product from "./components/product";
import Benefit from "./components/benefit";
import Touch from "./components/touch";

export default function Home() {
  return (
    <>
      {/* Main Components */}
      <Hero />
      <Brand />
      <Ceramics />
      <Product />
      <Benefit />
      <Touch />

      {/* Additional Section Placeholder */}
      <div className="extra-section">
        {/* Add more components or sections here if needed */}
      </div>
    </>
  );
}
