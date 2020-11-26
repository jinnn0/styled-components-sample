import './App.css';
import { Button, SearchBar, Subhead } from './styles/elements';
import { Container, Row } from './styles/layouts';
import { ReactComponent as SearchIcon } from './search.svg';

function App() {
  return (
    <div className="App">
      <Container>
        <Subhead>Buttons</Subhead>
        <Row>
          <Button>Default</Button>
          <Button outline>Outline </Button>
          <Button primary>Primary </Button>
          <Button secondary>Secondary </Button>
        </Row>
        <Subhead>Search Bar</Subhead>
        <SearchBar>
          <SearchIcon />
          <input type="text" placeholder="search" />
        </SearchBar>
        <SearchBar squared>
          <SearchIcon />
          <input type="text" placeholder="search" />
        </SearchBar>
      </Container>
    </div>
  );
}

export default App;
