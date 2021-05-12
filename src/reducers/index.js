
import {combineReducers} from 'redux';

//Reducers

const songsListReducer = () =>{
    return [
            {title:'No scrubs', duration:'4:05'},
            {title:'Macarena', duration:'2:30'},
            {title:'All star', duration:'3:15'},
            {title:'I want it', duration:'1:45'}
        ];
} 

const selectSongReducer = (selectSong=null,action) =>{

    if(action.type==='SELECT_SONG'){
    return action.payload;
    }
    return selectSong;
}


export default combineReducers({
    songList:songsListReducer,
    selectSong:selectSongReducer
})