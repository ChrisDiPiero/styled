import styled from 'styled-components' //'styled' can be anything. is a 'default import', can be called anything. common practice is to use 'styled'

//BasicTitle is a React component. Naming convention. see 'styled.h1' from above (default import).
//'styled' is object. h1 is a method call

// tagged template literal
const BasicTitle = styled.h1` 
text-align: center;
text-transform: capitalize;
`

const DefaultButton = styled.button`
  background: #645cff;
  color: #fff;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  text-transform: capitalize;
  padding: 0.25rem;
  display: block;
  width: 200px;
  margin: 1rem auto;
`

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <BasicTitle>styled components</BasicTitle>
      <DefaultButton>click me</DefaultButton>
    </div>
  );
}

export default App;
