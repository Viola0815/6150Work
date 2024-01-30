import React from 'react';
import './Page4.css';
import EducationGallery from './EducationGallery';


function Page4() {
 
  return (
    <>
    
    <div id="page-content">
    <h2>NYC Education</h2>
    <div className="campus-content">
    
      <div className="campus-card">
        <h3>Columbia University</h3>
        <div className='text'>
        <p>Columbia University is a private Ivy League research university in New York City. It was established in 1754 and is known for its rigorous academic programs and influential alumni.</p>
        </div>
        <div className='learn-more'>
        <a href="https://www.columbia.edu" rel="columbia university" aria-label="columbia university official web page">
          Learn more about Columbia
        </a>
        </div>
      </div>

      <div className="campus-card">
        <h3>New York University (NYU)</h3>
        <div className='text'>
        <p>New York University is a private research university founded in 1831. It is located in Greenwich Village, Manhattan, and is one of the largest private universities in the United States.</p>
        </div>
        <div className='learn-more'>
        <a href="https://www.nyu.edu" rel="NYU" aria-label="NYU official web page">
          Learn more about NYU
        </a>
        </div>
      </div>

      <div className="campus-card">
        <h3>School of Visual Arts (SVA)</h3>
        <div className='text'>
        <p>The School of Visual Arts is a for-profit art and design college located in Manhattan. It was founded in 1947 and is known for its programs in visual arts, including film, animation, and graphic design.</p>
        </div>
        <div className='learn-more'>
        <a href="https://www.sva.edu" rel="SVA" aria-label="SVA official web page">
          Learn more about SVA
        </a>
        </div>
      </div>
    
    </div>
    
    <div className= "dropdown" >
        <button className="dropbtn" aria-label="Applying bottom" >
          😊 Interested In Applying?
        </button>
        <div className="dropdown-content">
          <a href="https://undergrad.admissions.columbia.edu/apply" aria-label="Applying for Columbia University">Columbia University</a>
          <a href="https://apply.engineering.nyu.edu/apply/" aria-label="Applying for NYU">NYU</a>
          <a href="https://sva.edu/admissions/how-to-apply" aria-label="Applying for SVA">SVA</a>
        </div>
      </div>
    

      
    <EducationGallery/>
  </div>
</>
  );
}
export default Page4;
