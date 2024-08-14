import React, { useState } from "react";
import ReactDOM from "react-dom/client";

import { Home } from "./pages/Home";
import { Flat } from "./pages/Flat";
import { About } from "./pages/About";
import { Error } from "./pages/Error";

import "./index.scss";

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    console.log('Current Page:', currentPage);
    switch (currentPage) {
      case 'Home':
        return <Home />;
      case 'Flat':
        return <Flat />;
      case 'About':
        return <About />;
      case 'Error':
        return <Error />;
      default:
        return <Home />;
    }
  };

  return (
    <React.StrictMode>
      <nav>
        <button onClick={() => setCurrentPage('Home')}>Home</button>
        <button onClick={() => setCurrentPage('Flat')}>Flat</button>
        <button onClick={() => setCurrentPage('About')}>About</button>
        <button onClick={() => setCurrentPage('Error')}>Error</button>
      </nav>
      {renderPage()}
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
<App />
);
