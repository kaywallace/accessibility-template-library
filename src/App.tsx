import React from 'react'
import logo from './logo.svg'
import './App.scss'
import Menu from './components/menu/Menu'

const App = ({ children }: any) => (
  <div className="App">
    <header className="App-header">Accessibility Acceptance Criteria Library</header>
    <Menu />
    <main>{children}</main>
    <footer></footer>
  </div>
)

export default App
