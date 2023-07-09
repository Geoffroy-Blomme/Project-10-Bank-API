import { Link } from "react-router-dom";
import logo from ".././assets/img/argentBankLogo.png";
import styled from "styled-components";

const HeaderNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
`;

const NavLink = styled(Link)`
  font-weight: bold;
  color: #2c3e50;
`;

const NavLinkLogo = styled(NavLink)`
  display: flex;
  align-items: center;
`;

const NavLinkItem = styled(NavLink)`
  text-decoration: none;
  margin-right: 0.5rem;
  &:hover {
    text-decoration: underline;
  }
`;

const NavLinkLogoImgContainer = styled.div`
  display: flex;
  align-items: center;
`;

const NavLinkLogoImg = styled.img`
  max-width: 100%;
  width: 200px;
`;

export default function Header() {
  return (
    <HeaderNav>
      <NavLinkLogo to="/">
        <NavLinkLogoImgContainer>
          <NavLinkLogoImg src={logo} alt="Argent Bank Logo"></NavLinkLogoImg>
        </NavLinkLogoImgContainer>
        <h1 className="sr-only">Argent Bank</h1>
      </NavLinkLogo>
      <NavLinkItem to="/Home">
        <i className="fa fa-user-circle"></i>
        &nbsp;Sign in
      </NavLinkItem>
    </HeaderNav>
  );
}
