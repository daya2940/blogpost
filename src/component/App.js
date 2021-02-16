import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Postlist from "./Postlist";

const App = () => {
  return (
    <div className="container">
      <div className="d-flex justify-content-center mt-5">
        <Postlist />
      </div>
    </div>
  );
};

export default App;
