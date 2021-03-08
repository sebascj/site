import styled from 'styled-components';
import { useEffect, useRef } from 'react';

const Bar = styled.footer(
  ({ color }) => `
    height: 15px;
    border-radius: 10px;
    border: 4px solid var(--neumorph-gray);
    padding: 4px;
    & > div {
      border-radius: 3px;
      width: 0;
      height: 100%;
      background-color: ${color};
      transition: width 1.3s ease-out;
    }
`
);

const Name = styled.span`
  font-family: 'Hind Vadodara';
  color: var(--text-gray);
`;

const SkillBar = ({ className, name, value = 100, color = '#ff3a22' }) => {
  const bar = useRef(null);
  useEffect(() => {
    bar.current.style.width = value + '%';
  }, [value]);

  return (
    <div className={className}>
      <Name>{name}</Name>
      <Bar color={color}>
        <div ref={bar}></div>
      </Bar>
    </div>
  );
};

export default SkillBar;
