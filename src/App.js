import { GiCancel } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { LinksBlock } from "./components/LinksBlock";
import { AdvancedStatistics } from "./components/AdvancedStatistics";
import { BoostSection } from "./components/BoostSection";
import { Footer } from "./Footer";
import { Header } from "./components/Header";

export default function App() {
  return (
    <div className="font-poppin">
      <Header />
      <main className="bg-gray-100">
        <LinksBlock />
        <AdvancedStatistics />
        <BoostSection />
      </main>
      <Footer />
    </div>
  );
}
