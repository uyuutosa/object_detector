import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

const styles = {
  card: {
    margin: 48,
    height: 128
  },
};

class App extends Component {
  render() {

    const classes = this.props.classes;
    console.log(classes);

    return (
      <div>

        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="title" color="inherit">
              AppBar
            </Typography>
          </Toolbar>
        </AppBar>

        <Card className={classes.card}>
          <CardContent>
            Hello, Material-UI in React :)
          </CardContent>
          <CardActions>
            <Button >Cancel</Button>
            <Button variant="raised" color="primary">OK</Button>
          </CardActions>
        </Card>

      </div>
     );
  }
}

export default withStyles(styles)(App);