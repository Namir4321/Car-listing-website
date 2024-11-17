import { fetchCars } from "@/utils/action";
import Home from "@/components/Home/Home";

const HomePage = async({ searchParams }) => {
  const { search } = await searchParams ?? {};
  return (
    <section>

      <Home  search={search}/>
    </section>
  );
};

export default HomePage;
