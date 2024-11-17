import { fetchCars } from "@/utils/action";
import CarCard from "@/components/Card/CarCard";
import KeySearch from "@/components/KeySearch/KeySearch";
import SignOutLink from "@/components/SignOut/SignOutLink";

const Home = async ({ search }) => {
  try {
    // Declare carlists once outside of if-blocks
    let carlists = [];

    // Fetch car data based on search query
    if (search) {
      carlists = await fetchCars(search);
    } else {
      carlists = await fetchCars();
    }

    // Check if carlists is empty and render appropriate message
    if (!carlists || carlists.length === 0) {
      return (
        <>
          <div className="gap-5 flex justify-center">
            <KeySearch />
          </div>
          <p className="mt-6">No cars found.</p>
          <SignOutLink />
        </>
      );
    }

    // Render the list of car cards if there are cars available
    return (
      <>
        <div className="gap-5 flex justify-center">
          <KeySearch />
        </div>
        <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {carlists.map((items) => (
            <CarCard key={items.id} carslist={items} />
          ))}
        </div>
      </>
    );
  } catch (err) {
    // Handle any errors during the fetch operation
    console.error("Error fetching cars:", err);
    return (
      <>
        <KeySearch />
        <p>There was an error fetching the cars.</p>
      </>
    );
  }
};

export default Home;
