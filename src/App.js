import TopBar from "./components/topbar/TopBar";
import React from "react";
import Home from "./pages/homepage/Home";
import Detail from "./pages/listingdetail/Detail";
import CreateListing from "./pages/create-listing/CreateListing";

function App() {
  return (
    <div>
      <TopBar />
       <Home /> 
      {/* <Detail /> 
      <CreateListing />*/}
    </div>
  );
}

export default App;
