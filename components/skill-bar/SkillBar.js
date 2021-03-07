import styled from 'styled-components';
import { useEffect, useRef } from 'react';

const Bar = styled.footer(
  ({ color }) => `
    background-color: var(--text-gray);
    height: 25px;
    & > div {
      width: 0;
      height: 100%;
      background-color: ${color};
      transition: width 1.3s ease-out;
    }
`
);

const SkillBar = ({ className, name, value = 100, color = '#ff3a22' }) => {
  const bar = useRef(null);
  useEffect(() => {
    bar.current.style.width = value + '%';
  }, [value]);

  return (
    <div className={className}>
      <span>{name}</span>
      <Bar color={color}>
        <div ref={bar}></div>
      </Bar>
    </div>
  );
};

export default SkillBar;
