import Hero from "./Components/Hero";
import OurLocation from "./Components/OurLocation";
import WhyUs from "./Components/WhyUs";



export default function Home() {
   

  return (
    <div className=" w-full ">
      <Hero/>
      <WhyUs/>
      <OurLocation/>
    </div>
  );
}