
import { useState } from 'react';
import '/src/App.css';
import dbQuotes from "./db/quote.json";
import { getRandom } from './utils/random.js';
import QuoteBox from './components/QuoteBox.jsx';

const bgImages = ["img1", "img2", "img3", "img4"]
function App() {
  const [quote, setQuote]= useState(getRandom(dbQuotes));
  const [bgImage, setBgImage]= useState(getRandom(bgImages));


  const handleChangeQuote = () => {
    setQuote(getRandom(dbQuotes));
    setBgImage(getRandom(bgImages))
  }

  return (
  <main className={`app ${bgImage}`}>
    <section className='app--container'>
      <img src="/public/images/INFOGALAX.png" alt="infogalax" />

      <QuoteBox handleChangeQuote={handleChangeQuote} phrase = {quote.phrase}/>
      
      <footer>
        <h3>Author: {quote.author}</h3>
      </footer>
    </section>
  </main>
  );
}

export default App;
