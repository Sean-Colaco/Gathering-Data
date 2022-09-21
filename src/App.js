import React, { useState } from 'react';
import classes from './App.module.css';

// import UserList from './components/renderUsers/UserList';

import NewUsers  from './components/users/NewUsers';

import Background from './components/UI/Background';

function App() {
  
  const[users, setUser] = useState([]);



  function userDataHandler(userData){
    setUser((prevUsers)=>{
      const updatedUsers = [...prevUsers];
      updatedUsers.push(userData);
      return updatedUsers;

  
    })
    
    
  }


  return (
    <div className={classes.app}>
    <NewUsers data={userDataHandler} items={users}></NewUsers>
    {/* <UserList ></UserList> */}
    
    <Background></Background>
    </div>
  );
}

export default App;
