import React from "react";

import classes from './UserItem.module.css';

function UserItem(props){
        



    let familySize;
    if(props.bigFamily.toLowerCase().includes('y')){
        familySize = 'big family';
    }
    else if(props.bigFamily.toLowerCase().includes('n')){
        familySize = 'small family';
    }

    else{
        familySize = `${props.bigFamily} family`
    }

    let surrveyPreference;
    if(props.preference.toLowerCase().includes('y')){
        surrveyPreference = 'disliked';
    }
    else if(props.preference.toLowerCase().includes('n')){
        surrveyPreference = "didn't mind";
    }

    else{
        surrveyPreference = `${props.bigFamily} `
    }



    return(
            <li className={classes.listItem}>Your name is {props.name}, you are {props.age} years old and from {props.nationality}.
            You have an adorable {props.pet} named {props.petsName}. You also have a {familySize} with {props.familyMembers} family members. Futhermore, you {surrveyPreference} filling out this Q&#38;A. </li>
    );
}

export default UserItem;