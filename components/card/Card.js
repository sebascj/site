import styled from 'styled-components';

const StyledCard = styled.div`
  border-radius: 13px;
  background: #f0f0f0;
  box-shadow: 5px 5px 10px #dfdfdf, -5px -5px 10px #ffffff;
`;

const Card = ({ className, children }) => {
  return <StyledCard className={className}>{children}</StyledCard>;
};
export default Card;
