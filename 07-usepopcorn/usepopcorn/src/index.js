import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import StarRating from "./StarRating";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {<App></App>}
    {/* <StarRating
      maxRating={5}
      className="test"
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
      defaultRating={3}
    /> */}
  </React.StrictMode>
);
