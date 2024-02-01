import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Input from "./components/Input";
import Button from "./components/Button";
import CardList from "./components/CardList";
import { API_URL } from "./constants/URL";
import NoResult from "./components/NoResult";

const Home = () => {
  const [initData, setData] = useState();
  const [characters, setCharacters] = useState();
  const [searchTermCharacter, setSearchTermCharacter] = useState();
  const [totalResults, setTotalResults] = useState();
  const [noresult, setNoResult] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState();


  const searchTerm = (e) => {
    setSearchTermCharacter(e.target.value);
    searchCharacters(e.target.value);
  };

  const searchCharacters = (searchTermCharacter) => {
    if (searchTermCharacter) {
      const searchResults = characters.filter((character) =>
        character.name.toLowerCase().includes(searchTermCharacter.toLowerCase())
      );
      setNoResult(false)
      setCharacters(searchResults);
      setNoResult(searchResults.length === 0);
    } else {
      setCharacters(initData);
    }
  };
  const getCharacters = async (page = 1) => {
    try {
      const response = await fetch(`${API_URL}?page=${page}`);
      if (response.ok) {
        const data = await response.json();
        setCharacters(data.results);
        setData(data.results);
        setTotalResults(data.info.count);
        setTotalPages(data.info.pages);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    getCharacters(newPage);
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <section>
      <Header />
      <div>
        <Input type="search" changeHandler={searchTerm} />
      </div>
      {totalResults && <p className="text-sm my-3 text-gray-700">There are <span className="font-bold text-black0">{totalResults}</span> characters</p>}
      <div className="flex  justify-center">
        {noresult ?  <NoResult /> : <CardList characters={characters} />}
      </div>
      <div className="flex justify-center">
        {totalPages && (
          <div className="flex gap-2 my-4 items-baseline">
            <Button
              buttonLabel="Previous"
              clickHandler={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              
            />
            <p>Page {currentPage} of {totalPages}</p>
            <Button
              buttonLabel="Next"
              clickHandler={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              
            />
          </div>
        )}
      </div>
      <Footer />
    </section>
  );
};

export default Home;
