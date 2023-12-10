import React from 'react';
import { useState } from 'react';
import './Page3.css';
import Button from './Button';
function Page3({ setCurrentPage }) {
    function handleReadMoreClick() {
        setCurrentPage('page1');
    }
  
  return (
    <div>
      <h2>NYC Life</h2>
      <div className="Cards">
            <div className="Card1">
                <h3>Times Square</h3>
                <img src="https://images.unsplash.com/photo-1585238326164-612cb4248873?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dGltZXMlMjBzcXVhcmUlMjBuZXclMjB5b3JrfGVufDB8fDB8fHww" alt="TimesSquare"></img>
                <p>Times Square, square in Midtown Manhattan, New York City, formed by the intersection of Seventh Avenue, 42nd Street, and Broadway. Times Square is also the centre of the Theatre District, which is bounded roughly by Sixth and Eighth avenues to the east and west, respectively, and by 40th and 53rd streets to the south and north, respectively.</p>
                <div className='ReadMore'>
                    <Button type='button' visual='link' className="readMore" onClick={handleReadMoreClick}>More History</Button>
                </div>
        </div>

            <div className="Card2">
                <h3>Brooklyn Bridge </h3>
                <img src="https://images.unsplash.com/photo-1452796651103-7c07fca7a2c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnJvb2tseW4lMjBicmlkZ2V8ZW58MHx8MHx8fDA%3D" alt="BrooklynBridge"></img>
                <p>The Brooklyn Bridge is a hybrid cable-stayed/suspension bridge in New York City, spanning the East River between the boroughs of Manhattan and Brooklyn. Opened on May 24, 1883, the Brooklyn Bridge was the first fixed crossing of the East River.</p>
                <div className='ReadMore'>
                    <Button type='button' visual='link' className="readMore" onClick={handleReadMoreClick}>More History</Button>
                </div>
            </div>
            <div className="Card3">
                <h3>Subway</h3>
                <img src="https://images.unsplash.com/photo-1508619209906-bfca41e2286e?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fG55Y3xlbnwwfHwwfHx8MA%3D%3D" alt="newYorkSubway"></img>
                <p>Riding the subway is one of the easiest and most convenient ways to get around the city. For most riders, the subway fare is $2.90. Reduced fares are available for people 65 and older, people with disabilities, and low-income New Yorkers.</p>
                <div className='ReadMore'>
                    <Button type='button' visual='link'  className="readMore" onClick={handleReadMoreClick}>More History</Button>
                </div>
            </div>    
        </div>
    </div>
  );
}

export default Page3;
