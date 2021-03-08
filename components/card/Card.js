import styled from 'styled-components';

const StyledCard = styled.div`
  box-sizing: border-box;
  background: var(--neumorph-gray);
  box-shadow: -15px 15px 30px #bebebe, 15px -15px 30px #ffffff;
`;

const Card = ({ className, children }) => {
  return <StyledCard className={className}>{children}</StyledCard>;
};
export default Card;
