import { useState } from "react";
import { movies } from "./movies.js";
import DisplayMovies from "./displayMovies.jsx";
/*
  To add react bootstrap you need to 
  add regular bootstrap and react bootstrap
  npm install bootstrap && npm install react-bootstrap bootstrap
  Then only add the css file to your main.jsx file
  Finally your need to add the component to the page,
  this save space so you only add the component and not the entire library
 */
//
import Button from "react-bootstrap/Button";
import "./App.css";

function App() {
  // Add JS here
  const [count, setCount] = useState(0);
  const [countWithParam, setCountWithParam] = useState(0);

  const addValue = () => {
    setCount(count + 1);
  };

  const addValueWithParam = (x) => {
    setCountWithParam(countWithParam + x);
  };

  console.log(movies);

  // Combination of html and js goes into return statement
  return (
    <>
      <div className="buttons">
        <Button onClick={addValue}>The count is: {count}</Button>
        {/* we use () => function() so we don't get an infinite loop */}
        <Button variant="success" onClick={() => addValueWithParam(2)}>
          The count is: {countWithParam}
        </Button>
      </div>
      <br />
      <br />
      <br />
      <div className="container">
        {movies.map((movie) => (
          <DisplayMovies
            key={movie.Title}
            image={movie.Images[0]}
            rated={movie.Rated}
            title={movie.Title}
          />
        ))}
      </div>
    </>
  );
}

export default App;
