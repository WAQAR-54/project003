import React from 'react';
import './Cv.css'


function CV({firstname}) {
  return  <div>
      <img src='./logo192.png' alt="Logo"  className='head'/>
      <h1>Personal Information</h1>
      
          <p className='para'><strong>Date of Birth:</strong>02-06-1997</p>
          <p className='para'><strong>Martial Status:</strong>Singal</p>
          <p className='para'><strong>Relidion:</strong>Islam</p>
          <p className='para'><strong>Nationality:</strong>Pakistani</p>
          <p className='para'><strong>Language:</strong>Urdu</p>
          <p className='para'><strong> Contact No:</strong>03013380729</p>
          <p className='para'><strong>CNIC:</strong>3330255759107</p>
          <p className='para'><strong>Address:</strong>Kamalia</p>
        
     <h2>Career Objective</h2>
        <p>Seeking an internship position that will allow me to explore career options in
 IT sector and wants to utilize my skills and abilities to develop creative applications.
</p>
<h3>EDUCATION</h3>
          <div className='edu'><strong>FSc:</strong>             Intermediate Complete With 467</div>
          <div className='edu'><strong>Matric:</strong>             Intermediate Complete With 467</div>
          <h4>Work History rrrr</h4>
          <div className='edu'><strong>1:</strong> 	6 Months Internship in Clinical assistant </div>
      
          <div className='edu'><strong>2:</strong>   Two months Work as a data entry  at Abdullah Shopping Center Kamalia </div>
        
        
        

 </div>
}

export default CV;