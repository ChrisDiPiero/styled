import styled from 'styled-components' //'styled' can be anything. is a 'default import', can be called anything. common practice is to use 'styled'
import BasicTitle from './components/BasicTitle';
import { DefaultButton, HipsterButton } from './components/Buttons'

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <BasicTitle special>styled components</BasicTitle>
      <BasicTitle>styled components</BasicTitle>
      <DefaultButton>click me</DefaultButton>
      <HipsterButton>click me</HipsterButton>
    </div>
  );
}

export default App;
