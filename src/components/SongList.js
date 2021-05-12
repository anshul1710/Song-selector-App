import React ,{useState}from 'react';
import {connect} from 'react-redux';
import {selectSong} from '../actions';


const SongList =(props)=>{
const [songList,setSongList]=useState(props.songs);

const renderList = ()=>{
    return songList.map((song=>{
    return(
        <div className="item" key={song.title}>
            <div className="right floated content">
                <button onClick={()=>props.selectSong(song)} className="ui button primary">
                    Select
                </button>
            </div>
            <div className="content">{song.title}</div>
        </div>
    );
    }));
}
    return(
       
        <div className="ui divided list">
            {renderList()}
            </div>
    );

   
}

const mapStateToProps = (state) =>{
return { songs:state.songList};
}
export default connect(mapStateToProps,{
    selectSong:selectSong
})(SongList);