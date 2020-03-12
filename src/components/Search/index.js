import React from 'react'
import PropTypes from 'prop-types'
import { SearchBar, SearchButton, ContentDisplay } from './styled'
import axios from 'axios';


const Search = ({
    children,
    textColor,
    display,
    justifyContent,
    alignItems,
    flexDirection
  }) => {
    const apiRequest = () => {
      let response;
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => {
          const persons = res.data;
          response = Object.entries(persons);
          const responseForEach = response.map(item => {
            return item;
          });
          console.log(responseForEach);
        })
    }
   

    return (
    <>
        <ContentDisplay
            display={display}
            justifyContent={justifyContent}
            alignItems={alignItems}
            flexDirection={flexDirection}
        >
            <SearchBar
                textColor={textColor}
            >
            </SearchBar>
            <SearchButton onClick={apiRequest}>
                {children}
            </SearchButton>
        </ContentDisplay>
      
    </>
    )
  }
  
  Search.propTypes = {
    children: PropTypes.string,
    textColor: PropTypes.string,
    display: PropTypes.string,
    justifyContent: PropTypes.string,
    alignItems: PropTypes.string,
    flexDirection: PropTypes.string
  }
  
  export default Search   