import About from "@/Components/Aboutus";
import Choose from "@/Components/Choose";
import Contact from "@/Components/Contact_Us";
import CustomerReviews from "@/Components/CustomerReviews";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Navbar from "@/Components/Navbar";
import { Services } from "@/Components/Services";
export default function Home() {
  return (
    <>
     <Navbar/>
     <Header/>
     <About/>
     <Choose/>
     <Services/>
     <CustomerReviews/>
     <Contact/>
     <Footer/>
    </>
  );
}
