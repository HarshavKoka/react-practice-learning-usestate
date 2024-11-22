
import React, { useState } from 'react';
import './index.css';

export default function App() {
  const [contact, setContact] = useState({
    firstName: 'John',
    lastName: 'Doe',
    phone: '+1 (719) 555-1212',
    email: 'itsmyrealname@example.com',
    isFavorite: true
  });

  // Set star icon based on isFavorite state
  const starIcon = contact.isFavorite ? 'starfilled.png' : 'starempty.png';


  function toggleFavorite() {
    setContact(prevContact => ({

      ...prevContact,
      isFavorite: !prevContact.isFavorite
    }
    )
    )
  }


  return (
    <main>
      <article className='card'>
        <img src='./images/user.jpeg' className='card--image' alt='React' />
        <div className='card--info'>
          <img
            src={`./images/${starIcon}`} // Dynamically set the star icon image path
            className='cool'
            onClick={toggleFavorite}
            alt='Favorite Star'
          />
          <h2 className='card-name'>
            {contact.firstName} {contact.lastName}
          </h2>
          <p>{contact.phone}</p>
          <p>{contact.email}</p>
        </div>
      </article>
    </main>
  );
}
