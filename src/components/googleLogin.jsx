import React from 'react';
import {connect} from 'react-redux';
import {signIn} from '../actions/index'
import {signOut} from '../actions/index'


class GoogleAuth extends React.Component{
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId:'619209816708-nmavckq83c7tplle5av8m8g3e6mfnp8g.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }
    onAuthChange = (isSignedIn) => {
        if(isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
        }else{
            this.props.signOut();
        }
    }
    onSignInClick = () =>{
        this.auth.signIn();
    }
    onSignOutClick = () => {
        this.auth.signOut();
    }
    renderAuthButton() {
        if(this.props.isSignedIn === null) {
            return(
                <div>loading...</div>
            )
        }else if(this.props.isSignedIn){
            return(
                <div onClick={this.onSignOutClick}>Log Out</div>
            )
        }else{
            return(
                <div onClick={this.onSignInClick}>Log in With Google</div>
            )
        }
    }
    render(){
        return(
            <div>{this.renderAuthButton()}</div>
        );
    }
}

const mapStatetoProps = (state) => {
    return {
        isSignedIn: state.authState.isSignedIn,
        UserId: state.authState.userId
    };
}

export default connect(mapStatetoProps, {signIn, signOut})(GoogleAuth);