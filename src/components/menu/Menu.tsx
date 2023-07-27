import './Menu.scss'

const Menu = (props: any) => {
  return (
    <nav className="main-menu">
      <ul>
        <li>
          <a href="/about">About</a>
        </li>
        <li className="sub-menu">
          Components
          <ul>
            <li>
              <a href="/components/buttons">Buttons</a>
            </li>
            <li>
              <a href="/components/links">Links</a>
            </li>
            <li>
              <a href="/components/images">Images</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="/resources">Resources</a>
        </li>
      </ul>
    </nav>
  )
}

export default Menu
