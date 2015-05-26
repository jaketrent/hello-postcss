import React from 'react'

import styles from './index.css'

class Nav {
  render() {
    return (
      <ul>
        <li><a href="#">Purchase</a></li>
        <li><a href="#">Invite</a></li>
        <li><a href="#">Tutorial</a></li>
      </ul>
    )
  }
}

class App {
  render() {
    return (
      <div className={styles.app}>
        <h2>App Time</h2>
        <Nav />
        <Widget />
      </div>
    )
  }
}

class Widget {
  render() {
    return (
      <label htmlFor="input" className={styles.widget}>
        Widget:
        <input htmlId="input" type="text"/>
      </label>
    )
  }
}

React.render(<App />, document.getElementById('app'))