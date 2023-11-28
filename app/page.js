import Image from 'next/image';
import Header from './components/header';
import Features from './components/features';
import IAT from './components/imageandtextalter';
import Footer from './components/footer';
import Top from './components/topsection';
import PopularCategories from './components/popular';
import VideoSection from './components/videosection';
import Freelancers from './components/freelancers';
import OurResults from './components/ourResults';
import CallToActionSection from './components/EnterEmail';
import HiringProcess from './components/HiringProcess';
import Testimonials from './components/Testimonials';
import CtaCards from './components/Apply';
import PricingPlans from './components/PricePlans';

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen w-full">
      <Header />
      <Top/>
      <PopularCategories />
      <HiringProcess />
      <VideoSection />
      <OurResults />
      <CallToActionSection />
      <Testimonials />
      <CtaCards/>
      <Footer />
    </div>
  );
}
