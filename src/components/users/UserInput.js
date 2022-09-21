import react, { useState } from 'react';  
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import UserItem from '../renderUsers/UserItem';
import classes from './UserInput.module.css';

function UserInput(props){

    let active = false
    if(props.items.length > 0){
        active = true;
        
    }

    const [enteredName, setEnteredName] = useState('');

    const [enteredNationality, setEnteredNationality] = useState('');

    const [enteredAge, setEnteredAge] = useState('');

    const [enteredTypeOfPet, setEnteredTypeOfPet] = useState('');

    const [enteredPetsName, setEnteredPetsName] = useState('');

    const [enteredFamilySize, setEnteredFamilySize] = useState('');

    const [enteredFamilyMembers, setEnteredFamilyMembers] = useState('');

    const [enteredPreference, setEnteredPreference] = useState('');

    


    function nameHandler(event){
        setEnteredName(event.target.value);
        
    }

    function nationalityHandler(event){
        setEnteredNationality(event.target.value);
        
    }

    function ageHandler(event){
        setEnteredAge(event.target.value);
        
    }

    function petHandler(event){
        setEnteredTypeOfPet(event.target.value);
        
    }

    function petsNameHandler(event){
        setEnteredPetsName(event.target.value);
        
    }

    function familySizeHandler(event){
        setEnteredFamilySize(event.target.value);
        
    }

    function familyMembersHandler(event){
        setEnteredFamilyMembers(event.target.value);
        
    }

    function preferenceHandler(event){
        setEnteredPreference(event.target.value);
        
    }


    const [ error, setError] = useState();


    function submitHandler(event){
        event.preventDefault();

        if(
        enteredName.trim().length === 0 ||
        enteredNationality.trim().length === 0 ||
        enteredAge.trim().length === 0 ||
        enteredTypeOfPet.trim().length === 0 ||
        enteredPetsName.trim().length === 0 ||
        enteredFamilySize.trim().length === 0 ||
        enteredFamilyMembers.trim().length === 0||
        enteredPreference.trim().length === 0
        ){

            setError({
                message:'Please make sure to fill out the entire Q&A'
            })
            return;
        }

        if(enteredAge < 1 || enteredFamilyMembers < 1){
            setError({
                message:'Please enter a number greater than 0'
            })
            return;
        }

        const userData = {
            name:enteredName,
            nationality:enteredNationality,
            age:enteredAge,
            pet:enteredTypeOfPet,
            petsName:enteredPetsName,
            bigFamily:enteredFamilySize,
            familyMembers:enteredFamilyMembers,
            preference:enteredPreference
        }

        props.userInput(userData);

        setEnteredName('');
        setEnteredNationality('');
        setEnteredAge('');
        setEnteredTypeOfPet('');
        setEnteredPetsName('');
        setEnteredFamilySize('');
        setEnteredFamilyMembers('');
        setEnteredPreference('');

      
    }



        function errorHandler(){
            setError(null);
        }



    return(
        <div>
             {error && <ErrorModal toggleError={errorHandler} message={error.message}></ErrorModal>}
        <div className={classes.cardContainer}>
        <div className={classes.card}>
        
        <div className={classes.container}>
            <h1>Q&amp;A - by Sean Colaco</h1>
            <form className={classes.form} autoComplete="off">
                <div>
                    <label id='name' className={classes.label}>Whats your name? </label>
                    <input id='name'  type='text' onChange={nameHandler} value={enteredName} maxLength="25"></input>
                </div>

                <div>
                    <label id='name' className={classes.label}>Where are you from? </label>
                    <input id='name' type='text' onChange={nationalityHandler} value={enteredNationality} maxLength="25"></input>
                </div>
                <div>
                    <label id='name' className={classes.label}>How old are you? </label>
                    <input id='name' type='number' onChange={ageHandler} value={enteredAge} maxLength="25"></input>
                </div>
                <div>
                    <label id='name' className={classes.label}>What type of pet do you have? </label>
                    <input id='name' type='text' onChange={petHandler} value={enteredTypeOfPet} maxLength="25"></input>
                </div>
                <div>
                    <label id='name' className={classes.label}>Whats the name of your pet? </label>
                    <input id='name' type='text'onChange={petsNameHandler} value={enteredPetsName} maxLength="25"></input>
                </div>
                <div>
                    <label id='name' className={classes.label}>Do you have a big family? </label>
                    <input id='name' type='text' onChange={familySizeHandler} value={enteredFamilySize} maxLength="25"></input>
                </div>
                <div>
                    <label id='name' className={classes.label}>How many family members do you have? </label>
                    <input id='name' type='number' onChange={familyMembersHandler} value={enteredFamilyMembers} maxLength="25"></input>
                </div>
                <div>
                    <label id='name' className={classes.label}>Do you dislike filling out these Q&#38;As? </label>
                    <input id='name' type='text' onChange={preferenceHandler} value={enteredPreference} maxLength="25"></input>
                </div>

                <button className={classes.button} onClick={submitHandler}>Submit Q&amp;A</button>
            </form>
        </div>

                
        </div>

        <ul className={`${classes.UserList} ${active ? classes.active : 'notActive'}`}>
                    {props.items.map((user)=> (
                    <UserItem
                    key={user.id}
                    name={user.name}
                    nationality={user.nationality}
                    age={user.age}
                    pet={user.pet}
                    petsName={user.petsName}
                    bigFamily={user.bigFamily}
                    familyMembers={user.familyMembers}
                    preference={user.preference}
                    />
                    ))}
                    <div className={classes.placeHolderText}>Submit the Q&amp;A to see your information here!</div>
                </ul>
         </div>
         </div>
    );
}

export default UserInput