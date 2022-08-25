import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store/store"; // так как в store.js экспорт по дефолту то здесь импортируем без фигур скобок
import ThemeProvider from "./context/ThemeProvider";
import "./styles/index.css";
import App from "./Containers/App/App";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
