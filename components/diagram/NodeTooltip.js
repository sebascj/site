import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

const StyledTooltip = styled.span`
  position: absolute;
  top: -4em;
  z-index: 99;
  span {
    background: var(--text-gray);
    color: var(--white);
    font-family: 'Hind Vadodara';
    padding: 0.2em 1em;
    border-radius: 5px;
    font-size: 1.5em;
    text-align: center;
  }
  .show-tooltip {
    display: block;
  }
  .hide-tooltip {
    display: none;
  }
`;

const Tooltip = ({ label }) => {
  const tooltip = useRef(null);
  const [showTooltip, setTooltip] = useState(false);

  useEffect(() => {
    const mouseEnter = () => {
      setTooltip(true);
      tooltip.classNam;
    };
    const mouseLeave = () => {
      setTooltip(false);
    };
    const parent = tooltip.current.parentElement;
    parent.addEventListener('mouseover', mouseEnter);
    parent.addEventListener('mouseout', mouseLeave);
    return () => {
      parent.removeEventListener('mouseover', mouseEnter);
      parent.removeEventListener('mouseout', mouseLeave);
    };
  }, []);
  return (
    <StyledTooltip ref={tooltip}>
      <span className={showTooltip ? 'show-tooltip' : 'hide-tooltip'}>
        {label}
      </span>
    </StyledTooltip>
  );
};

export default Tooltip;
