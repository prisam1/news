import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import NewsApp from "./Components/News";
import { store } from "./redux/store";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <main>
            <NewsApp />
          </main>
          <footer>
            <p>{new Date().getFullYear()} The News</p>
          </footer>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
