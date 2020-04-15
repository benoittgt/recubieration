import React, { Component } from 'react';
import './App.css';
import Tabletop from 'tabletop';

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    Tabletop.init({
      key: 'https://docs.google.com/spreadsheets/d/111_7rU2qfo73sna0_ZcFt9QLFqTPl9LqevS3FIfHlio/edit#gid=0',
      callback: googleData => {
        this.setState({
          data: googleData
        })
      },
      simpleSheet: true
    })
  }

  render() {
    const { data } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="event-title">Nantes Beer Festival</h1>
          <div className="event-date">
            <h2>1 - 2 septembre 2020</h2>
          </div>
        </header>
        <div id="event-list">
          <ul>
            {
              data.map(obj => {
                return (
                  <li key={obj.Nom}>
                    <p>Le {obj.Jours} à {obj.Horaires} avec {obj.Brasserie}</p>
                    <p>Lieu: {obj.Lieu}</p>
                    <p>Horaires: {obj.Horaires}</p>
                  </li>
                )
              })
            }
         </ul>
        </div>
      </div>
    );
  }
}

export default App;
