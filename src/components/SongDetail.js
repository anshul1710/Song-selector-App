import React from 'react';
import {connect} from 'react-redux';

const SongDetail =({song}) =>{
    if(!song)
    {
        return <div>Please select a song</div>;
    }
    return(
        <div>
            <h3>
                Detail for:
            </h3>
            <p>
                Title: {song.title}
                <br></br>
                Duration: {song.duration}
            </p>
        </div>
    );
}
const mapStateToProps = (state)=>{
    return {song:state.selectSong};

}
export default connect(mapStateToProps)(SongDetail);