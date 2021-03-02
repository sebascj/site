import styled from 'styled-components';
import Navigation from '../navigation/Navigation';

const PageWrapper = styled.div`
  display: flex;
`;
const ContentWrapper = styled.div`
  width: 100%;
  height: calc(100% - 10px);
  margin: 10px;
`;

const Layout = ({ children }) => {
  return (
    <PageWrapper>
      <Navigation />
      <ContentWrapper>{children}</ContentWrapper>
    </PageWrapper>
  );
};

export default Layout;
