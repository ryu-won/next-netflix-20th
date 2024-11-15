import { motion } from "framer-motion";
import { styled } from "styled-components";

export default function Header() {
  return (
    <Container>
      <NavList>
        <Logo whileHover={{ scale: 1.4 }} />
        <NavItem>TV shows</NavItem>
        <NavItem>Movies</NavItem>
        <NavItem>My List</NavItem>
      </NavList>
    </Container>
  );
}

const Container = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  z-index: 99;
  width: 375px;
  margin: 0 auto;
`;

const Logo = styled(motion.div)`
  background-image: url("/logos_netflix-icon.svg");
  width: 50px;
  height: 60px;
`;

const NavList = styled.nav`
  display: flex;
  justify-content: space-between;
  flex: 1;
  align-items: center;
  padding: 20px 30px 0 20px;
`;
const NavItem = styled.span`
  font-size: 1.2rem;
  color: #ffffff;
`;
