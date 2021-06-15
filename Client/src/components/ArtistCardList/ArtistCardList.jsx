import React, { useEffect } from 'react'
import './ArtistCardList.css'
import ArtistCard from '../ArtistCard/ArtistsCard'
import { connect } from 'react-redux'

const mapStateToProps = state => {
    return {
        artists: state.artists
    }
}

const ArtistCardList = ({artists}) => {
    console.log(artists)
    return (
        <div className='artist-card-list'>
           { artists.map(e => {
               <ArtistCard />
           })}
        </div>
    )
}

export default connect(mapStateToProps)(ArtistCardList)
