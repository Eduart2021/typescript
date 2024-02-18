import React from 'react';
import './App.css';
import { Greeting } from "./Components/Greet";
import { Person } from './Components/Persons';
import { PersonList } from './Components/PersonList';
import { Status } from './Components/Status';
import { Heading } from './Components/Heading';
import { Optional } from './Components/Optianal';
import { Button } from './Components/Button';
import { InputValue } from './Components/InputValue';
import { Containe } from './Components/Container';
import { nameList } from './util/PersonsList';
import { TestOne } from './Components/TestOne';
import { LoggIn } from './Components/state/LoggIn';
import { User1 } from './Components/state/User';
import { ThemeContextProvider } from './Components/context/ThemeContext';
import { Box } from './Components/context/Box';
import { UserContextProvider } from './Components/context/UserContext';
import {User2} from './Components/context/User'


function App() {
  const personName = {
    first: 'John',
    last: 'Doe',
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <Status status='loading'/>
        <Heading>Place holders</Heading>
       <Greeting name="Eduart" messageCount={404} isLoggedin={true}/>
      <TestOne />
       <Person name={personName}/>
       <PersonList name={nameList} />
       <Optional name="Edd"  isLoading={false}/>  {/* message is not included, is optional*/}
       <Button handleClick={(event,id)=>console.log(`i was clicked ${id}`, event)}/>
       <InputValue value='' handleChange={(event)=> console.log(event)}/>
       <Containe style={{border: '1px solid black', padding: '5px', backgroundColor:'green'}} />
       <LoggIn />
       <User1 />
       <ThemeContextProvider>
        <Box/>
       </ThemeContextProvider>
       <UserContextProvider>
        <User2 />
       </UserContextProvider>

      </header>
    </div>
  );
}

export default App;