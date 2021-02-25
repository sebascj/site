import styled, { createGlobalStyle } from 'styled-components';

import Navigation from '../navigation/Navigation';
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
const PageWrapper = styled.div`
  display: flex;
`;
const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const Layout = ({ children }) => {
  return (
    <PageWrapper>
      <PageStyle />
      <Navigation />
      <ContentWrapper>{children}</ContentWrapper>
    </PageWrapper>
  );
};

export default Layout;
