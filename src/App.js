import React, {useState, useEffect} from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import People from './components/People';
import Planets from './components/Planets';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Container, Dimmer, Loader} from 'semantic-ui-react';
import './App.css';

function App() {
  const [people, setPeople]=useState([]);
  const [planets, setPlanets]=useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(()=>{
    async function fetchPeople(){
      let res = await fetch('https://swapi.dev/api/people/?format=json');
      let data = await res.json();
      setPeople(data.results);
      setLoading(false);
    }

    async function fetchPlanets(){
      let res = await fetch('https://swapi.dev/api/planets/?format=json');
      let data = await res.json();
      setPlanets(data.results);
      setLoading(false);
    }

    fetchPeople();
    fetchPlanets();

  }, [])

  return (
    <>
      <Router>
      <Navbar/>
      <Container fluid>
        {loading ? (
          <Dimmer active inverted>
            <Loader inverted>Loading</Loader>
          </Dimmer>
        ) : (
        <Routes>
          <Route path='/home' element={<Home data={Home}/>}/>
          <Route path='/people' element={<People data={people}/>}/>
          <Route path='/planets' element={<Planets data={planets}/>}/>
      </Routes>
        )}

      </Container>
      </Router>
    </>
  );
}

export default App;

