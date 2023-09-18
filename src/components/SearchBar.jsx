import searchIcon from "../assets/material-symbols_search-rounded.svg";
import "../styles/SearchBar.css";
import { Link } from "react-router-dom";
import UseFetch from "../Hooks/UseFetch";
import { useState } from "react";

const SearchBar = () => {
  const [filteredData, setFilteredData] = useState([]);
  const { data } = UseFetch(
    "https://perfumery.onrender.com/perfumes/allPerfumes"
  );

  const handleFilter = (e) => {
    const searchWord = e.target.value;
    const newFilter = data.filter((datum) => {
      return datum.title.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  return (
    <div className="search-panel d-lg-flex d-md-flex d-none d-md-block d-lg-block gap-2">
      <div className="w-100 d-flex search-div">
        <img className="searchIcon" src={searchIcon} alt="" />
        <input
          type="search"
          className="w-100 px-5"
          placeholder="Search products, brands and categories"
          onChange={handleFilter}
        />
      </div>
      <button className="search-btn text-white">Search</button>
      {filteredData.length != 0 && (
        <div className="search-results">
          {filteredData.map((item) => {
            return (
              <Link
                className="text-decoration-none search-item"
                key={item._id}
                to={`/SingleProduct/${item._id}`}
              >
                <div className="d-flex gap-2">
                  <img className="search-img mb-2 rounded" src={item.image} alt="" />
                  <p>
                    {item.title} {item.label}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
