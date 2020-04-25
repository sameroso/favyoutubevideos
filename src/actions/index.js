import youTube from '../api/youtube';
import jsonServer from '../api/jsonServer';
export const signIn = (id) => {
    return {
        type:'SIGN_IN',
        payload: id
    }
}
export const signOut = () => {
    return {
        type:'SIGN_OUT',
    }
}

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

export const addVideo = (userId, videoId) => async dispatch=>{
    const response = await jsonServer.post('',{videoId,userId,ID:(videoId+userId)})
   dispatch({type:"VIDEO_POST", payload:response.data})
}

export const fetchVideoList = () => async dispatch=>{
    const response = await jsonServer.get('')
   dispatch({type:"USER_DATA", payload:response.data})
}

export const deleteVideo = (videoId) => async dispatch=>{
    await jsonServer.delete(`/ID/${videoId}*`)
    dispatch({type:"VIDEO_DELETE", payload:videoId})
}

