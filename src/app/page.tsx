import JoinOurTeam from "./components/views/JoinOurTeam/JoinOurTeam";
import OurPeople from "./components/views/OurPeople/OurPeople";
import HeroSection from "./components/views/HeroSection/HeroSection";
import MoreInfo from "./components/views/MoreInfo/MoreInfo";
import GlobalService from "./components/views/GlobalService/GlobalService";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <HeroSection />
      <GlobalService />
      <MoreInfo />
      <OurPeople />
      <JoinOurTeam />
    </main>
  );
}
