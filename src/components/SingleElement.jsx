/* eslint-disable react/prop-types */
import React from 'react';
import {Link} from 'react-router-dom';
import youTube from '../api/youtube';
import {selectID} from '../actions';
import {connect} from 'react-redux';

class SingleElement extends React.Component {
    state={videoInfo:{}}
    componentDidMount() {
        youTube.get(`/videos`,{
            params:{
                key: 'AIzaSyA821gpMB-DbTr_v2CUS4X4HPucT-9HLcY',
                part:'snippet',
                id:this.props.videoId     
            }
         })
         .then((response) => this.setState({videoInfo: response.data.items}))
        
    }
    selectId(id) {
        this.props.selectID(id);
    }
    renderList() {
        console.log(this.state)
        return( 
             <React.Fragment key={this.state.videoInfo[0].id}>
                <div className="py-2">
                    <div className="py-3 row custom-border">
                        <div className="col-12 col-md-6 col-lg-4 mx-auto d-flex pb-3">
                            <img className="mx-auto" src={this.state.videoInfo[0].snippet.thumbnails.medium.url}/>
                        </div>
                        <div className="col-12 col-md-6 col-lg-8 mx-auto my-auto">
                            <div className="row d-flex">
                                <h5 className="text-center mx-auto">{this.state.videoInfo[0].snippet.title}</h5>
                            </div>
                            <div className="row d-flex">
                                <div className="mx-auto">
                                    <button onClick={()=>this.selectId(this.state.videoInfo[0].id)} type="button" class="btn btn-danger mx-3">Select</button>
                                    <Link to={`/videoDetail/${this.state.videoInfo[0].id}`}><button type="button" class="btn btn-danger mx-3">Detail </button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment> 
        );
    }
    render() { 
        console.log(this.state)
        if(!this.state.videoInfo[0]){
            return null;
        }else{
            console.log("batata")
            return (
                <div>{this.renderList()}</div>
            ); 
        }
    }
}

 
export default connect(null ,{selectID})(SingleElement) ;