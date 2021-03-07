import styled from 'styled-components';

const NodeBox = styled.div`
  border-radius: 150px;
  background: #e0e0e0;
  box-shadow: 10px 10px 20px #bebebe, -10px -10px 20px #ffffff;
  width: 100px;
  height: 100px;
  font-size: 13px;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  &::after {
    content: '';
    width: 120px;
    height: 120px;
    position: absolute;
    border: 2px dashed var(--theme-blue);
    border-radius: 50%;
  }
`;

const NodeBoxLandscape = styled.div`
  border-radius: 150px;
  background: #e0e0e0;
  box-shadow: 7px 7px 14px #bebebe, -7px -7px 14px #ffffff;
  width: 70px;
  height: 70px;
  font-size: 9px;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  &::after {
    content: '';
    width: 90px;
    height: 90px;
    position: absolute;
    border: 2px dashed var(--theme-blue);
    border-radius: 50%;
  }
`;

const NodeBoxMobile = styled.div`
  border-radius: 150px;
  background: #e0e0e0;
  box-shadow: 3px 3px 6px #bebebe, -3px -3px 6px #ffffff;
  width: 30px;
  height: 30px;
  font-size: 7px;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  &::after {
    content: '';
    width: 50px;
    height: 50px;
    position: absolute;
    border: 2px dashed var(--theme-blue);
    border-radius: 50%;
  }
`;

const NodeText = styled.div`
  font-family: 'Hind Vadodara';
  padding: 10px;
  color: var(--text-gray);
  font-size: 1.2em;
`;

const DiagramWrapper = styled.div`
  height: 60rem;
  @media (max-width: 600px) {
    height: 38rem;
  }
  width: 100%;
  & .bi.bi-diagram {
    background-color: var(--white);
    border: none;
    box-shadow: none;
  }
  /*TODO: remove important*/
  .link {
    path[class='bi-link-path'] {
      stroke: var(--theme-blue) !important;
      stroke-width: 0.1rem !important;
    }
  }
`;

export { DiagramWrapper, NodeBox, NodeBoxMobile, NodeBoxLandscape, NodeText };
