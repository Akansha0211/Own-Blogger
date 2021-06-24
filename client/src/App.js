import './App.css';
import {Container,AppBar,Typography, Grow, Grid} from '@material-ui/core'
import blogger from './images/teamwork.png';

function App() {
  return (
    <Container maxWidth ="lg">
      <AppBar position = "static" color="inherit">
        <Typography variant="h2" align="center">Posts</Typography>
        <img src={blogger} alt="posts" height="60" width="65"/>
      </AppBar>
    </Container>
  );
}

export default App;
