import React from 'react';
import './Page2.css';
import WeatherGallery from './WeatherGallery';

function Page2() {
  return (
    <>
    <div id="page-content">
      <h2>NYC Weather</h2>
      <div className='winter-photo'>
      <img src='/images/winterphoto.jpg' alt="winter of NYC"></img>
      </div>
      <div className='content'>
        <div className='text'>
            <p>In an average year, the temperature will usually be between 8 °F (−13 °C) and 97 °F (36 °C) with temperatures greatly exceeding these values being uncommon. In New York City, the summers are warm, humid, and wet; the winters are very cold, snowy, and windy; and it is partly cloudy year round. Over the course of the year, the temperature typically varies from 28°F to 85°F and is rarely below 14°F or above 92°F.

            Based on the tourism score, the best times of year to visit New York City for warm-weather activities are from mid June to early July and from early August to late September. </p>
            <p>Fall and spring are considered by tourists and locals as the best times to visit, and you can expect pleasant temperatures to reign in the months from April to June and September until November. Winters in New York can be quite cold, with average temperatures ranging from around 25°F to 40°F (-4°C to 4°C). However, temperatures can drop even lower during particularly cold spells.</p>
        </div>
      
      </div>
    
      <WeatherGallery/>
    </div>
    </>
    
  );
}

export default Page2;
