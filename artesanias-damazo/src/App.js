import { useState } from 'react';
import { calculateTotalCost } from './logic'; // 1. Import your function
import Header from './components/Header';
import Introduction from './components/Introduction';
import Description from './components/Products';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [subscribed, setSubscribed] = useState(false);

  // 2. Use your function here
  const finalPrice = calculateTotalCost(6, 60); // Example input: 6 items at $60 each

  function handleCheckboxChange() {
    setSubscribed(!subscribed);
  }

  return (
    <div className="container">
      <Header />
      <main>
        <Introduction
          image="costume.jpg"
          description="El Carnaval de Huejotzingo es una tradición vibrante con trajes y mosquetones artesanales."
        />
        <Description />

        {/* 3. Your subscription section */}
        <section>
          <h3>Subscribe</h3>
          <label>
            <input
              type="checkbox"
              checked={subscribed}
              onChange={handleCheckboxChange}
            />
            Subscribe to product updates
          </label>
          <p>{subscribed ? "You are subscribed!" : "You are not subscribed yet."}</p>
        </section>

        {/* 4. Show calculated price */}
        <section>
          <h3>Total Cost Example</h3>
          <p>Your final price is: ${finalPrice}</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
