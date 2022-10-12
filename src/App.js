import styled from 'styled-components' //'styled' can be anything. is a 'default import', can be called anything. common practice is to use 'styled'
import BasicTitle from './components/BasicTitle';
import { DefaultButton } from './components/Buttons'

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <BasicTitle>styled components</BasicTitle>
      <DefaultButton>click me</DefaultButton>
    </div>
  );
}

export default App;
