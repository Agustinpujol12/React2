import { Brand } from "./brand"
import Cartcontainer from "./cartcontainer"
import { Categoria } from "./categoria"
import Menubutton from './menubutton'

const navbar = () => {
    return (      <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
    <Brand />
    <Menubutton /> 
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Categoria isActive={true} name={"Zapatillas"}/>

          </li>
          <li className="nav-item">
          <Categoria isActive={true} name={"Zapatos"}/>
          </li>
          <li className="nav-item">
          <Categoria isActive={true} name={"Botas"}/>
          </li>
        </ul>
      </div>
      <Cartcontainer color="blue"/>
    </div>
  </nav>)

}

export default navbar;