import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';

const styles = {
  title: {
    cursor: 'pointer'
  }
}


export default (props) => {
  console.log(props)
  return (
    <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
      <div>
        <AppBar
          style={{backgroundColor: '#40798C'}}
          title={<span style={styles.title}>Dashboard</span>}
          onTitleTouchTap={()=>props.router.push('/')}
        />
        {props.children}
      </div>
    </MuiThemeProvider>
  )
}
