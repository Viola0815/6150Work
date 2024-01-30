import React from 'react';
import './Page3.css';
import Button from './Button';
import NYClifeGallery from './NYClifeGallery';

function Page3({ setCurrentPage }) {
    function handleReadMoreClick() {
        setCurrentPage('page1');
    }
  
  return (
    <>
    <div id="page-content">
      <h2>NYC Life</h2>
      <div className="Cards">
            <div className="Card1">
                <h3>Times Square</h3>
                <img src='/images/timesquare.jpg'alt="TimesSquare"></img>
                <div className='text'>
                <p>Times Square, square in Midtown Manhattan, New York City, formed by the intersection of Seventh Avenue, 42nd Street, and Broadway. Times Square is also the centre of the Theatre District, which is bounded roughly by Sixth and Eighth avenues to the east and west, respectively, and by 40th and 53rd streets to the south and north, respectively.</p>
                </div>
                <div className='read-more'>
                    <Button type='button' visual='link' className="readMore" onClick={handleReadMoreClick} aria-label="read more about Times Square history">More History</Button>
                </div>
        </div>

            <div className="Card2">
                <h3>Brooklyn Bridge </h3>
                <img src='/images/brooklynbridge.jpg' alt="BrooklynBridge"></img>
                <div className='text'>
                <p>The Brooklyn Bridge is a hybrid cable-stayed/suspension bridge in New York City, spanning the East River between the boroughs of Manhattan and Brooklyn. Opened on May 24, 1883, the Brooklyn Bridge was the first fixed crossing of the East River.</p>
                </div>
                <div className='read-more'>
                    <Button type='button' visual='link' className="readMore" onClick={handleReadMoreClick}aria-label="read more about Brooklyn Bridge history">More History</Button>
                </div>
            </div>
            <div className="Card3">
                <h3>Subway</h3>
                <img src='/images/subway.jpg' alt="newYorkSubway"></img>
                <div className='text'>
                <p>Riding the subway is one of the easiest and most convenient ways to get around the city. For most riders, the subway fare is $2.90. Reduced fares are available for people 65 and older, people with disabilities, and low-income New Yorkers.</p>
                </div>
                <div className='read-more'>
                    <Button type='button' visual='link'  className="readMore" onClick={handleReadMoreClick}aria-label="read more about NYC's Subway history">More History</Button>
                </div>
            </div>    
        </div>
        <NYClifeGallery/>
    </div>
</>
  );
}

export default Page3;
