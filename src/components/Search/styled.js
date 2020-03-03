import styled from 'styled-components'

const SearchBar = styled.input`
  color: ${props => props.textColor || '#fc0'};
  width:100%;
  }
`

const SearchButton = styled.button`
  color: ${props => props.textColor || '#fc0'};
  background-color: ${props => props.textColor || 'blue'};
  width:100%;
  }
`

const ContentDisplay = styled.div`
  display: ${props => props.display || 'block'};
  justify-content: ${props => props.justifyContent || 'flex-start'};
  align-items: ${props => props.alignItems || 'flex-start'};
  flex-direction: ${props => props.flexDirection || 'flex-start'};
  width:100%;
  }
`

export { SearchBar, SearchButton, ContentDisplay } 