import React, { useState } from "react";

function App() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  const handleFname = (event) => {
    setFname(event.target.value);
    event.preventDefault();
  };

  const handleLname = (event) => {
    setLname(event.target.value);
    event.preventDefault();
  };

  return (
    <div className="container">
      <h1>
        Hello {fname} {lname}{" "}
      </h1>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          value={fname}
          onChange={handleFname}
        />
        <input
          name="lName"
          placeholder="Last Name"
          value={lname}
          onChange={handleLname}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
