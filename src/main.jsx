import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from "react-redux";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./redux/bookSlice";

const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Provider store={store}>
      <App />
    </Provider>,
  </StrictMode>,
);
