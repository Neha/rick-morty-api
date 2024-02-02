import Input from "./Input";

const Search = ({ searchTerm }) => {
  return (
    <div>
      <Input type="search" changeHandler={searchTerm} />
    </div>
  );
};

export default Search;
