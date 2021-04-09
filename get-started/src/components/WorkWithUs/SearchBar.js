import { BsSearch } from "react-icons/bs";

const SearchBar = () => {
  return (
    <>
      <BsSearch />
      <input type="text" className="SearchBar" placeholder="Search"></input>
    </>
  );
};

export default SearchBar;
