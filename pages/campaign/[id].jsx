import Footer from "@/components/footer";
import CalendarIcon from "@/components/icons/calendaricon";
import UserIcon from "@/components/icons/usericon";
import Navbar from "@/components/navbar";

const CampaignPage = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      {/* Nav and Hero Section */}
      <div className="bg-[url('/hero.webp')] h-[180px] lg:h-[300px] border-red-100 bg-no-repeat bg-cover bg-center flex relative">
        <Navbar />

        <div className="flex-1 bg-[#233989e6] clip-fund"></div>
        <div className="flex-1"></div>
      </div>

      {/* Campaign Section */}
      <section className="w-11/12 xl:w-4/5 max-w-7xl mx-auto my-8">
        Campaign 
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default CampaignPage;
