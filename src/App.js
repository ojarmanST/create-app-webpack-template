
import React from "react";
import Button from '@material-ui/core/Button';
import oliviaProfile from './assets/oliviaprofile.jpeg'
import inks from './assets/inks.svg';

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <>
        <h1>
          Hello {name}
        </h1>

        {/* testing mui */}
        <Button variant="contained">this is a material UI button</Button>
        <Button variant="contained">this too!</Button>

        {/* testing image file types */}
        <img src={oliviaProfile} width="100"/>
        {/* file too large in bundle? find how to lazyload? */}
        <img src={inks} width="100" loading="lazy"/>
      </>
    );
  }
}

export default App;