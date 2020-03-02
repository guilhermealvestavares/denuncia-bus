
import React from 'react'
import PropTypes from 'prop-types'
import { SearchBar } from './styled.js'

const Search = ({
    children,
    textColor,
  }) => {
    return (
      <SearchBar
        textColor={textColor}
      >
        {children}
      </SearchBar>
    )
  }
  
  Search.propTypes = {
    children: PropTypes.string,
    textColor: PropTypes.string,
  }
  
  export { Search }