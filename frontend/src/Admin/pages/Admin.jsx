import React from "react";
import Navbar from "../componenets/Navbar";

import { useState } from "react";
import SidBar from "../componenets/SidBar";

function Admin() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <SidBar />
    </div>
  );
}

export default Admin;
