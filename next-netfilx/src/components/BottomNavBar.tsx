"use client";
import styled from "styled-components";
import Link from "next/link";
import { usePathname } from "next/navigation"; // usePathname 훅
import homeIcon from "../../public/BottomNavBar/homeIcon";
import searchIcon from "../../public/BottomNavBar/searchIcon";
import comingsoonIcon from "../../public/BottomNavBar/comingsoonIcon";
import downloadIcon from "../../public/BottomNavBar/downloadIcon";
import moreIcon from "../../public/BottomNavBar/moreIcon";

const BottomNavBar: React.FC = () => {
  const pathname = usePathname(); // useRouter 대신 usePathname을 사용, useRoter가 next.js 13 이상부터는 지원 x

  const icons = [
    { component: homeIcon, label: "Home", path: "/main" },
    { component: searchIcon, label: "Search", path: "/search" },
    { component: comingsoonIcon, label: "Comming", path: "/" },
    { component: downloadIcon, label: "Download", path: "/" },
    { component: moreIcon, label: "More", path: "/" },
  ]; //아이콘 컴포넌트와 라벨을 배열로 관리해 이 둘을 감싼 layout을 map으로 반복하기

  return (
    <BottomNavBarContainer>
      {icons.map((icon, index) => {
        const { component: IconComponent, label, path } = icon; // 구조분해 할당으로 아이콘 정보를 가져옴
        return (
          <Link key={index} href={icon.path}>
            <NavIconContainer>
              <IconComponent
                color={pathname === icon.path ? "white" : "#8C8787"}
              />
              <IconLabel $active={pathname === icon.path ? "true" : "false"}>
                {icon.label}
              </IconLabel>
            </NavIconContainer>
          </Link>
        );
      })}
    </BottomNavBarContainer>
  );
};

export default BottomNavBar;

const BottomNavBarContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 375px;
  display: flex;
  justify-content: space-around;
  background: #121212;
  padding: 10px;
  left: 0;
  right: 0;
  margin: 0 auto;
`;

const NavIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IconLabel = styled.span<{ $active: string }>`
  font-size: 12px;
  color: ${({ $active }) => ($active === "true" ? "white" : "#8C8787;")};
`;
