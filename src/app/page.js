import Contactus from "./sections/contactus";
import Herosection from "./sections/herosection";
import PartnerSection from "./sections/partner";
import Services from "./sections/services";
import Transform from "./sections/transform";
import AnalyticalSection from "./sections/analytical";
import ImageGallery from "./sections/clients";

export default function Home() {
  return (
    <div>
    <Herosection/>
    <PartnerSection/>
    <Services/>
    <Transform/>
    <AnalyticalSection/>
    <ImageGallery/>
    <Contactus/>       
    </div>
  );
}
