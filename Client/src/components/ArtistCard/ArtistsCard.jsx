import React from 'react'
import './ArtistCard.css'

const ArtistsCard = ({name, img}) => {
    return (
        <div className='artist-card'>
            <img src={img} />
            <h2>{name}</h2>
        </div>
    )
}

export default ArtistsCard
