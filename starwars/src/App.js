import React, { useState, useEffect } from 'react';
import './App.css';
import axios from "axios";
import CharacterCard from "./components/CharacterCard";
import { Container, Row} from "reactstrap";


  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.


  const App = props => {
    const [data, setData] = useState([]);

    useEffect(() => {
      axios
        .get(`https://swapi.co/api/people/`)
        .then(response => {
          const data = response.data.results;
          console.log("Character Data", data);
          setData(data);
        })
        .catch(error => {
          console.log("The dark side I sense in you", error);
    });
  }, []);





  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Container>
        <Row> 
          {data.map(data => {
            return (
              <CharacterCard
              key={data.id}
              name={data.name}
              height={data.height}
              gender={data.gender}
              skin={data['skin_color']}
              eyes={data['eye_color']}
              />
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default App;
