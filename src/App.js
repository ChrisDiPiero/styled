import styled from 'styled-components' //'styled' can be anything. is a 'default import', can be called anything. common practice is to use 'styled'

//BasicTitle is a React component. Naming convention. see 'styled.h1' from above (default import).
//'styled' is object. h1 is a method call

const BasicTitle = styled.h1` 
text-align: center;
text-transform: capitalize;
`
//this is a 'tagged template literal'

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <BasicTitle>styled components</BasicTitle>
      <button className="btn">click me</button>
    </div>
  );
}

export default App;
