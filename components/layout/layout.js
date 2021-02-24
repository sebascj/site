import styled, { createGlobalStyle } from 'styled-components';
const PageStyle = createGlobalStyle`
  html,
  body,
  div#__next,
  div#__next > div{
    height: 100%;
    width: 100%;
  }
  body {
    margin: 0;
    background-color:#1d1d1d
  }
`;
const ContentWrapper = styled.div`
  display: flex;
`;

const Layout = ({ children }) => {
  return (
    <ContentWrapper>
      <PageStyle />
      {children}
    </ContentWrapper>
  );
};

export default Layout;
