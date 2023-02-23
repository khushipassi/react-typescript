import React from 'react';
import Button from './components/Button';
import Heading from './components/Heading';
import Input from './components/Input';
import Oscar from './components/Oscar';
import PersonList from './components/PersonList';
import Status from './components/Status';
import Sum from './components/Sum';
import Profile from './components/auth/Profile';
import Private from './components/auth/Private'

const Names=[
  {
    id:4,
    mail:'khushi'
  },
  {
    id:2,
    mail:'passi'
  },
  {
    id:1,
    mail:'yusss'
  }
]

function App() {

  return (
    <div className="App">
      <Sum a={7} b={9}/>
      <Status status="error"/>
      <PersonList name={Names}/>
      <Heading>hiiiiiiiiii</Heading>
      <Oscar><Heading>heyyyyya</Heading></Oscar>
      {/* <Button handleClick={()=>{console.log('hoio')}}/> */}
      {/* <Button handleClickk={(event)=>{console.log('yusss',event)}}/> */}
      <Button handle={(event,id)=>{console.log('okkkkk',event,id)}}/>
      <Input value="" handleChange={(event)=>{console.log('changed input',event)}}/>
      <Private isLoggedIn={true} component={Profile}/>

    </div>
  );
}

export default App;
