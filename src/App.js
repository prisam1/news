import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import News from "./components/News";
import { store } from "./redux/store.js";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <main>
            <News />
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
