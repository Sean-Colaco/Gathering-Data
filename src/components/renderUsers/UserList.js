// import React from "react";

// import classes from './UserList.module.css';
// import UserItem from "./UserItem";

// function UserList(props){
//         let active = false
//         if(props.items.length > 0){
//             active = true;
            
//         }

//     return(
//         <ul className={`${classes.UserList} ${active ? classes.active : 'notActive'}`}>
//             {props.items.map((user)=> (
//             <UserItem
//             key={user.id}
//              name={user.name}
//              nationality={user.nationality}
//              age={user.age}
//              pet={user.pet}
//              petsName={user.petsName}
//              bigFamily={user.bigFamily}
//              familyMembers={user.familyMembers}
//              preference={user.preference}
//              />
//             ))}
//         </ul>
//     )
// }

// export default UserList;