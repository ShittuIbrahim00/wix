import Card from "../components/Card";
import { Building2, FolderOpen, UsersRoundIcon } from "lucide-react";

const Home = () => {
  return (
    <main className="w-full">
      <section className="md:min-h-[70vh] bg-gradient-to-b from-[#552C1A] to-[#0A1E32] text-white py-20 px-6 text-center flex flex-col justify-center items-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">Choose How You Work</h1>
        <h2 className="text-[#F05A28] text-2xl md:text-5xl lg:text-6xl font-bold mt-2">
          With Gridspace
        </h2>
        <p className="mt-4 text-sm md:text-base lg:text-2xl">
          One platform. Three ways to connect with opportunities.
        </p>
      </section>

      <section className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-6 py-16">
        <Card
          title="Cowork Spaces"
          icon={<Building2 size={40} className="text-[#00274D]" />}
          buttonText="Explore Spaces"
          variant="primary"
        />
        <Card
          title="Rapid Recruiting"
          icon={<UsersRoundIcon size={40} className="text-[#F05A28]" />}
          buttonText="Start Recruiting"
          variant="secondary"
        />
        <Card
          title="Projects"
          icon={<FolderOpen size={40} className="text-[#00274D]" />}
          buttonText="Discover Project"
          variant="primary"
        />
      </section>
    </main>
  );
};

export default Home;
