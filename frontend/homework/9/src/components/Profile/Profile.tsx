import React from 'react';
import './Profile.scss';
import Skills from '../Skills/Skills';
import Hobbies from '../Hobbies/Hobbies';

interface ProfileProps {
    info: {
      name: string;
      fullName: string;
      qualification: string;
      skills: { id: number; skill: string }[];
      hobbies: { id: number; hobby: string }[];
    };
  }
  
  function Profile({info}: ProfileProps){
    return(
      <div className="profile">
        <h1>{info.name}</h1>
        <h2>{info.fullName}</h2>
        <h3>{info.qualification}</h3>
  
        <div className='container'>
          <Skills skills={info.skills} />
          <Hobbies hobbies={info.hobbies} />
        </div>
      </div>
    );
  }
  export default Profile