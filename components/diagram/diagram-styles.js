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

const NodeBoxMobile = styled.div`
  border-radius: 150px;
  background: #e0e0e0;
  box-shadow: 5px 5px 10px #bebebe, -5px -5px 10px #ffffff;
  width: 50px;
  height: 50px;
  font-size: 13px;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  &::after {
    content: '';
    width: 70px;
    height: 70px;
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
  height: 100%;
  width: 900px;
  & .bi.bi-diagram {
    background-color: var(--neuphorm-gray);
  }
  /*TODO: remove important*/
  .link {
    path[class='bi-link-path'] {
      stroke: var(--theme-blue) !important;
      stroke-width: 0.1rem !important;
    }
  }
`;

export { DiagramWrapper, NodeBox, NodeBoxMobile, NodeText };
