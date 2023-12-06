import { useEffect, useState } from "react";
import { store } from "./store";
import Home from "./containers/Home";
import { Provider } from "react-redux";
import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import AddContact from "./containers/AddContact";
import EditContact from "./containers/EditContact";
import ContactPage from "./containers/ContactPage";

import "./App.scss";

const App = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<ContactPage />} />
          <Route path="/add" element={<AddContact />} />
          <Route path="/:id/edit" element={<EditContact />} />
          <Route path="*" element={<p>Not Found</p>} />
        </Route>
      </Routes>
    </Provider>
  );
};

export default App;
