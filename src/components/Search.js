import React, { useContext, useState } from "react";
import CountryDropdown from "./CountryDropdown";
import PropertyDropdown from "./PropertyDropdown";
import PriceRangeDropdown from "./PriceRangeDropdown";
import { RiSearch2Line } from "react-icons/ri";
import { HouseContext } from "./HouseContext";
import HouseList from "./HouseList";
import House from "./House";
import Home from "../pages/Home";
import { Link, useNavigate } from "react-router-dom";
import FilterSearch from "./FilterSearch";

const Search = (props) => {
  const [searchInput, setSearchInput] = useState({
    country: "",
    property: "",
  });

  const {
    houses,
    country,
    setCountry,
    property,
    setProperty,
    price,
    setPrice,
    // Add other context values as needed
  } = useContext(HouseContext);

  const state = props.state;
  const navigate = useNavigate();

  const handleClick = async () => {
    setSearchInput({
      country: country,
      property: property,
    });
  };

  return (
    <div>
      <div className="mb-40 mt-20 px-[30px] py-6 max-w-[1170px] max-auto flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 relative lg:-top-4 lg-1 bg-white lg:bg-transparent 1:backdrop-blur rounded-lg">
        <CountryDropdown
          selectedCountry={country}
          onSelectCountry={setCountry}
        />
        <PropertyDropdown
          selectedProperty={property}
          onSelectProperty={setProperty}
        />
        {/* <PriceRangeDropdown selectedPrice={price} onSelectPrice={setPrice} /> */}
        <button
          onClick={handleClick}
          className="bg-violet-700 hover:bg-violet-800 transition w-full lg:max-w-[162px] h-16 rounded-lg flex justify-center items-center text-white text-lg"
        >
          <RiSearch2Line />
        </button>
      </div>
      <section className="">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14">
            {houses
              .filter((item) => {
                return searchInput.country == "" && searchInput.property == ""
                  ? item
                  : searchInput.country.includes(item.country) &&
                      searchInput.property.includes(item.type);
              })
              .map((house, index) => (
                <Link to={`/property/${house.id}`} key={index}>
                  <House house={house} />
                </Link>
              ))}
          </div>
        </div>
        {console.log()}
      </section>
    </div>
  );
};

export default Search;
