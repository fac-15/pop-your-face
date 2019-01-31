import React from 'react';


export const UserImage = (props) => {
        if(!props.userData){
            return <h3>Please wait :)</h3>
        }

        return (
            <div>
                <img src={props.userData.avatar_url}></img>
            </div>
        );
}

