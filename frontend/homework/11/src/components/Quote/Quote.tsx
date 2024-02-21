import React from "react";
import "./Quote.scss";
import { Dispatch, SetStateAction } from "react";

export interface QuoteProps {
  filterTags: string[];
  setFilterTags: Dispatch<SetStateAction<string[]>>;
  quote: APIQuote;
}

export interface APIQuote {
  _id: string;
  content: string;
  author: string;
  tags: string[];
  authorSlug: string;
  length: number;
  dateAdded: string;
  dateModified: string;
}


const Quote: React.FC<QuoteProps> = ({ filterTags, setFilterTags, quote }) => {
  const handleTags = (tag: string): void => {
    if (!filterTags.includes(tag)) {
      setFilterTags([...filterTags, tag]);
    }
  };

  return (
    <div className="container">
      <div className="content">
        <p>{quote.content}</p>
      </div>
      <div className="author">
        <p>~ {quote.author}</p>
      </div>
      <div className="date">
        <p>{quote.dateAdded}</p>
      </div>
  
      <ul className="tags">
        {quote.tags.map((tag, index) => (
          <li key={index}>
            <div onClick={() => handleTags(tag)} className="tag">
              {tag}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
  
}

export default Quote;