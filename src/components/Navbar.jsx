import React from 'react';

class Navbar extends React.Component {

render() {
  return (
    <div>
      <ul className='nav'>
        <li><button className='button'>Sales</button></li>
        <li><button className='button'>Clients</button></li>
        <li><button className='button'>Advanced Metrics</button></li>
        <li><button className='button'>Leads</button></li>
        <li><button className='button'>Overview</button></li>
      </ul>
    </div>
  )
}

}

export default Navbar;
