import React from "react";
import UserInput from "./UserInput";

function NewUsers(props){

    function userDataHandler(enteredUserData){
        const userData = {
            ...enteredUserData,
            id:Math.random().toString()
            };

            props.data(userData);
    }

    return(
     
        <UserInput userInput={userDataHandler} items={props.items}></UserInput>
        
    );
}

export default NewUsers;