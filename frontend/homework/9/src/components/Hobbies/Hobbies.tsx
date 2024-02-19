import React from 'react';
import './Hobbies.scss';

interface Hobby {
  id: number;
  hobby: string;
}

interface HobbiesProps {
  hobbies: Hobby[];
}

function Hobbies({hobbies}: HobbiesProps){
  return (
    <div className="hobbies">
      <h2>Hobbies</h2>
      <ul>
        {hobbies.map(hobby => (
          <li key={hobby.id}>{hobby.hobby}</li>
        ))}
      </ul>
    </div>
  );
}

export default Hobbies;
