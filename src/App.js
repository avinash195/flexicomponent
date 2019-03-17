import React, { Component } from 'react';
import Flexi from './FlexiComponent';
import './App.css';

const flexiConfig = {
  items: [
    {
      "name": "person_name",
      "label": "Person's Name",
      "type": "TextField",
      "children": [{
        "name": "person_name_1",
        "label": "First Person's Name",
        "type": "TextField",
      }]
    },
    {
      "name": "states",
            "label": "Person's state",
      "type": "DropDown",
            "values": [
                "Maharashtra",
                "Kerala",
                "Tamil Nadu"
      ]
    }
   ]
}

class App extends Component {
  

  onFlexiSubmit = () => {
  }

  render() {
    return (
      <div className="App">
        <Flexi onSubmit={this.onFlexiSubmit} config={flexiConfig}/>
      </div>
    );
  }
}

export default App;
