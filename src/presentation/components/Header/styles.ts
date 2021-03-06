import styled from 'styled-components';

export const HeaderContainer = styled.header`
  margin: 0px 5rem;
  max-width: 1300px;
  margin: 0 auto;
  @media screen and (max-width: 790px) {
    margin:0px .8rem ;
  }
`;
export const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5rem;
  padding: 1rem 0px;
`;
export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  > *:last-child{
    @media screen and (max-width: 790px) {
      display: none;
  }
  }
`;

export const HeaderLogo = styled.div`
 > img {
  width: 19rem;
 }
`;
