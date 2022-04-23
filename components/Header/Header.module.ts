import styled from '@emotion/styled'

export const Nav = styled.nav`
  height: 3.3rem;
  padding: 0.5rem;
  font-size: 1.12rem;
  border-bottom: 1px solid #DBDBDB;

  .search-input {
    width: 100%;
  }
`;

export const Links = styled.div`
  text-align: center;
  font-weight: bold;
  margin: auto;
  @media all and (max-width: 62rem) {
    display: none !important;
  }

  
`;

export const Icons = styled.div`
  display: flex;
  text-align: right;
  margin: auto;

  svg {
    margin-right: 1rem
  }

  @media all and (max-width: 62rem) {
    display: none !important;
  }
`;

export const Logo = styled.div`
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
`;

export const MobileCollapseMenu = styled.div`
  display: flex;
  justify-content: right;
  margin-top: auto;
  align-items: center;
  height: 100%;
  width: 100%;

  .mobile-menu-icon > svg {
    margin: 0.5rem auto;
  }
  @media all and (min-width: 62rem) {
    display: none !important;
  }
`;