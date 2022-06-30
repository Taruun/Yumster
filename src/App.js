import Pages from "./Pages/Pages";
import Category from "./components/Category";
import { BrowserRouter } from "react-router-dom";
import Search from "./components/Search";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <GiKnifeFork />
          <Logo to={"/"}>yumster</Logo>
        </Nav>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}
const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 200;
  font-family: "Bungee Inline", cursive;
  color: black; ;
`;
const Nav = styled.div`
  padding: 1rem 0rem;
  display: flex;
  align-items: center;
  justify-items: center;
  svg {
    font-size: 2.5rem;
  }
`;
export default App;
