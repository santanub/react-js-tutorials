import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { Provider } from "react-redux";
import store from "./store.js";
import Layout from "./components/Layout.js";

store.subscribe(() => {
  console.log("store changed", store.getState())
})

const app = document.getElementById("app")

ReactDOM.render(<Provider store={ store }>
                       <Layout/>
</Provider>, app);
