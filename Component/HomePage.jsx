import SearchBar from "./SearchBar";
import Regions from "./Regions";
import CountriesList from "./CountriesList";
import { useState } from "react";
import { useModes } from "../hooks/useModes";

export default function HomePage() {
  const [query, setQuery] = useState(" ");
  const [isDarkApplied] =useModes();


  return (
    <main className={`${isDarkApplied ? "darkM" : ""}`}>
      <div className="search_Container Max_wid_Con">
        <SearchBar setQuery={setQuery} />
        <Regions setQuery={setQuery} />
      </div>

      <CountriesList query={query} />
    </main>
  );
}
