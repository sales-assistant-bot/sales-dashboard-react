import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';

const styles = {
  title: {
    cursor: 'pointer',
  },
};

export default (props) => (
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    <AppBar
      title={<span style={styles.title}>Dashboard</span>}
      onTitleTouchTap={()=>props.router.push('/')}
    />
  </MuiThemeProvider>
)
