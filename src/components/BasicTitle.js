import styled from 'styled-components'

//BasicTitle is a React component. Naming convention. see 'styled.h1' from above (default import).
//'styled' is object. h1 is a method call

const BasicTitle = styled.h1` 
text-align: center;
text-transform: capitalize;
/*color:${(props) => props.special && 'red'};*/
/* color:${({ special }) => special && 'red'} */
color:${({ special }) => special ? 'blue' : 'red'}
`

export default BasicTitle