import './App.css';
import {Container,AppBar,Typography, Grow, Grid} from '@material-ui/core'
import blogger from './images/teamwork.png';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles';

function App() {
  const classes = useStyles();
  return (
    <Container maxWidth ="lg">
      <AppBar position = "static" className={classes.appBar} color="inherit">
        <Typography variant="h2" className={classes.heading} align="center">Posts</Typography>
        <img src={blogger} className={classes.image} alt="posts" height="60" width="65"/>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
