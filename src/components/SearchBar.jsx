import React from 'react';
import { Field, reduxForm } from 'redux-form'
import {connect} from 'react-redux';

import {youTubeSearch} from '../actions'
import {selectID} from '../actions'


class SearchBar extends React.Component{
    onSubmit = (formValues) => {
        this.props.youTubeSearch(formValues.SearchBar);
        this.props.selectID("");
    }

    render() {
        return(
            <React.Fragment>
                <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <div className="input-group input-group-lg container">
                        <Field required name="SearchBar" component="input" placeholder="Search fo youtube videos" type="text" className="form-control text-center" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
                    </div>
                </form>
            </React.Fragment>
        );
    }
}

const formWrapped = reduxForm({
    form: 'VideoName' // a unique identifier for this form
  })(SearchBar);

const mapStateToProps = (state) => {
    return { videoId: state.idSelectedVideo};
}

  export default connect(mapStateToProps, {youTubeSearch, selectID} )(formWrapped)