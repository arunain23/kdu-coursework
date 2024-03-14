import React, { ChangeEvent, useState } from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { colors } from '@mui/material';
import './RoomsGrid.scss'
import { Link } from 'react-router-dom';
import { RoomType } from './RoomTypes';
// import { Display } from './Display';
export function RoomsGrid() {
            const roomsList = useSelector((state: RootState) => state.roomsLoad.allRoomsList);

                        function handleclick(e:React.MouseEvent<HTMLButtonElement>){
                        const id=e.currentTarget.value;

                        const roomobject=roomsList.find((room:RoomType)=>{
                            return room.id===parseInt(id)
                        });
                        if(roomobject){
                        
                            console.log(roomobject.addOns);

                            <div className='header'> 

                            <div className="heading-top">Select Room Type</div>
                            <div className="allrooms">
                            
                                {
                                roomobject.addOns.map((addon) => {
                                    return (
                                
                                    
                                        <div>
                                            {addon.name}
                                        </div>
                        
                                    )    
                                })
                                }
                        
                            </div>
                        
                        
                        </div>
                        }
                        
                        
                        console.log("ifodhasil");
                        
                        }

                        

  return (
    // <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr", margin: "40px"}}>
    <>
    <div className='header'> 

            <div className="heading-top">Select Room Type</div>
            <div className="allrooms">
            
                {
                roomsList.map((room) => {
                    return (
               
                    <button className='room'  value={room.id} onClick={handleclick}>
                    {room.name} 
                    </button>
   

                    )    
                })
                }

            </div>


    </div>
    
    
    {/* // </div>   */}
    </>
);
            }
