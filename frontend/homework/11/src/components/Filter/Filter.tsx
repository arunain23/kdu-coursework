import * as React from 'react';
import "./Filter.scss"
import { SetStateAction } from "react";

export interface FilterProps {
  filterTags: string[];
  setFilterTags: React.Dispatch<SetStateAction<string[]>>;
}

const Filter: React.FC<FilterProps> = ({ filterTags, setFilterTags }) => {
    const handleTagDelete = (tag: string): void => {
      setFilterTags(filterTags.filter((t: string) => t !== tag));
    };
    
    
    
    return ( 
        <div className="filters">
          <div className="filters-heading">Filters</div>
          <div className="tags-used">
            <ul className="tags">
              {filterTags.map((tag) => (
                <li key={tag}>
                  <div className="tagged">
                    {tag}
                    <button onClick={() => handleTagDelete(tag)}>X</button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
      
}

export default Filter;