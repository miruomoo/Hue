import React from 'react';
import ReactDOM from 'react-dom/client'
import './index.css';

import Hue from './Components/Hue.js'

const artistData = [
  {
    name: "Joji",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Frank Ocean",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Drake",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Tyler the Creator",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "New Jeans",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "John Summit",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function Artist({ artistObj }) {
  return (<li className='pizza'>
    <img src={artistObj.photoName} alt={artistObj.name} />
    <div>
      <h3>{artistObj.name}</h3>
      <p>{artistObj.ingredients}</p>
      <span>{artistObj.price}</span>
    </div>
  </li>)
}

function Header() {
  return <header className="header">
    <h1>Your Hue</h1>
  </header>
}

function TopArtists() {
  const artists = artistData;
  const numArtists = artists.length;

  return (<div>
    <main className='menu'>
      <h2>Top Artists:</h2>

      {numArtists > 0 ? (
        <React.Fragment>
          <p>The artists you listened to the most this year.</p>
          <ul className='pizzas'>
            {artistData.map(artist =>
              <Artist artistObj={artist} key={artist.name}
              ></Artist>)}
          </ul>
        </React.Fragment>
      ) : <p>Spotify data not fetched. :(</p>}
    </main>
  </div>)
}

function Footer() {
  const check = artistData.length;
  if (check > 0) {
    return (
      <footer className='footer'>
        {new Date().toLocaleTimeString()}
      </footer>
    );
  }
}

function App() {
  return (
    <div className='container'>
      <Header></Header>
      <TopArtists></TopArtists>
      <Hue></Hue>
      <Footer></Footer>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render();
root.render(<React.StrictMode><App /></React.StrictMode>);