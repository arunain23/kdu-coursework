import React, { useEffect, useState } from "react";
import { APIQuote } from "../../components/Quote/Quote";
import Quote from "../Quote/Quote";
import "./Main.scss";
import Filter from "../Filter/Filter";
const Main: React.FC = () => {
  const [quotes, setQuotes] = useState<APIQuote[]>([]);
  const [filteredQuotes, setFilteredQuotes] = useState<APIQuote[]>([]);
  const [filterTags, setFilterTags] = useState<string[]>([]);

  
  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await fetch("https://api.quotable.io/quotes/random?limit=3");
        const data: APIQuote[] = await response.json();
        setQuotes(data);
      } catch (error) {
        console.error('Error fetching quotes:', error);
      }
    };
  
    fetchQuotes();
  }, []);
  
    
  useEffect(() => { 
    const filtered = quotes.filter((quote) => filterTags.every((tag) => quote.tags.includes(tag)));
    setFilteredQuotes(filtered);
  }, [filterTags, quotes]);
  

  const fetchNewQuote = () => {

    fetch("https://api.quotable.io/quotes/random")
      .then((response) => response.json())
      .then((data: APIQuote[]) => {
        setQuotes([...data, ...quotes]);
      
      });
  };

  return (
    <div className="main-container">
      <div className="Quotes">
        <button className="Quotes-btn" onClick={fetchNewQuote}> New Quote </button>
      </div>
      <Filter filterTags={filterTags} setFilterTags={setFilterTags}/>
      <div>
        { filterTags.length === 0 ?
            (quotes.map((quote) => (
                <Quote key={quote._id} quote={quote} filterTags={filterTags} setFilterTags={setFilterTags} />
            ))) :
            (filteredQuotes.map((quote) => (
                <Quote key={quote._id} quote={quote} filterTags={filterTags} setFilterTags={setFilterTags} />
            )))}
      </div>
    </div>
  );

}

export default Main;