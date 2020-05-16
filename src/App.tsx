import React, { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Button, { ButtonType, ButtonSize } from "./components/Button/button";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";
import SubMenu from "./components/Menu/subMenu";
import Transition from "./components/Transition/transition";

library.add(fas);

function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <Menu
          defaultIndex={"0"}
          mode="horizontal"
          onSelect={(index) => console.log(index)}
          defaultOpenSubMenus={["2"]}
        >
          <MenuItem>cool Link</MenuItem>
          <MenuItem disabled>cool Links</MenuItem>
          <SubMenu title="dropdown">
            <MenuItem>dropdown1</MenuItem>
            <MenuItem>dropdown2</MenuItem>
          </SubMenu>
          <MenuItem>cool Linkss</MenuItem>
        </Menu>
        <Button
          btnType={ButtonType.Primary}
          size={ButtonSize.Large}
          onClick={() => setShow(!show)}
        >
          Toggle
        </Button>
        <Button autoFocus btnType={ButtonType.Primary} size={ButtonSize.Large}>
          Hello
        </Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>
          Hello
        </Button>
        <Button btnType={ButtonType.Primary} disabled></Button>
        <Button
          btnType={ButtonType.Link}
          size={ButtonSize.Small}
          href="https://www.baidu.com/"
        >
          Baidu Link
        </Button>
        <code>Hello world</code>
        <Transition in={show} timeout={300} animation="zoom-in-left">
          <div>
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
          </div>
        </Transition>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
