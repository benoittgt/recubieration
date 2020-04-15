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
        let group = googleData.reduce((r, a) => {
          r[a.Jour] = [...r[a.Jour] || [], a];
          return r;
        }, {});
        this.setState({
          data: group
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
          <h2 className="event-description">Le rendez vous nantais de la bière artisanale</h2>
          <div className="event-date">
            <h2>1 - 2 septembre 2020</h2>
          </div>
        </header>
        <div id="event-list">
        {
          Object.keys(data).map((key, index) => {
            return (
              <section>
                <h3 className='event-day'>{key}</h3>
                <ul key={key} className={key}>
                  {
                    data[key].map(festevent => {
                      return (
                        <li key={festevent.Nom}>
                          <p className='event-name'>Le {festevent.Jour} à {festevent.Horaires} avec {festevent.Brasserie}</p>
                          <p>Lieu: {festevent.Lieu}</p>
                          <p>Horaires: {festevent.Horaires}</p>
                        </li>
                      )
                    })
                }
                </ul>
              </section>
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;
