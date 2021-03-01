import Link from 'next/link';
import styled from 'styled-components';

const LeftNavBar = styled.div`
  background-color: #181818;

  @media (max-width: 1300px) {
    display: none;
  }
`;

const Navigation = () => {
  return (
    <LeftNavBar>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/skills">Skills</Link>
        </li>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </LeftNavBar>
  );
};

export default Navigation;
