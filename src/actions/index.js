import youTube from '../api/youtube'

export const youTubeSearch = (term) => async dispatch=>{
     const response = await youTube.get('/search',{
        params:{
            order:'relevance',
            key: 'AIzaSyA821gpMB-DbTr_v2CUS4X4HPucT-9HLcY',
            maxResults: 8,
            part: 'snippet',
            q:term,
            type:'video'
        }
     })
    dispatch({type:"VIDEO_DATA", payload:response})
}
export const youTubeSearchSingleVideo = (id) => async dispatch=>{
    const response = await youTube.get(`/videos`,{
       params:{
           key: 'AIzaSyA821gpMB-DbTr_v2CUS4X4HPucT-9HLcY',
           part:'snippet',
           id:id       
       }
    })
   dispatch({type:"VIDEO_SINGLE", payload:response})
}

export const selectID = (id) => {
    return{type:"CLICKED", payload:id};
}