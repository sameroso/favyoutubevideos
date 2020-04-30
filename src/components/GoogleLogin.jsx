/* eslint-disable react/prop-types */
import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {signIn} from '../actions/index'
import {signOut} from '../actions/index'


function GoogleAuth ({isSignedIn,signIn,signOut}){
    const onAuthChange = (isSignedIn) => {
        if(isSignedIn) {
            signIn(window.gapi.auth2.getAuthInstance().currentUser.get().getId());
        }else{
            signOut();
        }
    } 
     useEffect(() =>{
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId:'619209816708-nmavckq83c7tplle5av8m8g3e6mfnp8g.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                let auth = window.gapi.auth2.getAuthInstance();
                onAuthChange(auth.isSignedIn.get());
                auth.isSignedIn.listen(onAuthChange);
            });
        })},[])
     
    const onSignInClick = () =>{
        window.gapi.auth2.getAuthInstance().signIn();
    }
    const onSignOutClick = () => {
        window.gapi.auth2.getAuthInstance().signOut();
    } 
    const renderAuthButton = () => {
        if(isSignedIn === null) {
            return(
                <div>loading...</div>
            )
        }else if(isSignedIn){
            return(
                <div onClick={onSignOutClick}>Log Out</div>
            )
        }else{
            return(
                <div onClick={onSignInClick}>Log in With Google</div>
            )
        }
    } 
        return(
            <div>{renderAuthButton()}</div>
        );
    
}

const mapStatetoProps = (state) => {
    return {
        isSignedIn: state.authState.isSignedIn
    };
}

export default connect(mapStatetoProps, {signIn, signOut})(GoogleAuth);