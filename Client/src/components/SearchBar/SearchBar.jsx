import React from 'react'
import './SearchBar.css'
import { initiateGetResult } from '../../redux/actions/index'
import { connect } from 'react-redux'

const mapDispatchToProps = dispatch => {
    return {
        initiateGetResult: (e) => dispatch(initiateGetResult(e))
    }
}
const SearchBar = ({initiateGetResult}) => {
    return (
        <div className='search-bar'>
            <input type='text' placeholder='Search for an artist...'></input>
            <button className='search-btn' onClick={() => initiateGetResult()}>Search</button>
        </div>
    )
}

export default connect(null, mapDispatchToProps)(SearchBar)
