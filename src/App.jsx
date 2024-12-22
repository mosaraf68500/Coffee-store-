import { useLoaderData } from "react-router-dom";
import CoffeCard from "./components/CoffeCard";
import { useState } from "react";

function App() {
  const loadedCoffes = useLoaderData();
  const [coffees, setCoffees]=useState(loadedCoffes)

  return (
    <div className="w-11/12 mx-auto my-4 py-4">
      <h1 className="text-3xl text-center font-semibold text-purple-500">
        Hot Hot Cold Coffee: {coffees.length}
      </h1>

      <div className="grid md:grid-cols-2 gap-8 pt-8">
        {coffees.map((coffee) => (
          <CoffeCard key={coffee._id} coffee={coffee}
          coffees={coffees}
          setCoffees={setCoffees}
          
           />
        ))}
      </div>
    </div>
  );
}

export default App;
