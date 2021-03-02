import styled from 'styled-components';
const TitleComponent = styled.h1`
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 4.2rem;
  color: var(--text-gray);
`;
const SubtitleComponent = styled.h2`
  font-family: 'Hind Vadodara', sans-serif;
  font-size: 2.3rem;
  color: var(--text-gray);
`;
const ParagraphComponent = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 1.33rem;
  color: var(--text-gray);
`;

const Title = ({ children }) => {
  return <TitleComponent>{children}</TitleComponent>;
};
const Subtitle = ({ children }) => {
  return <SubtitleComponent>{children}</SubtitleComponent>;
};
const Paragraph = ({ children }) => {
  return <ParagraphComponent>{children}</ParagraphComponent>;
};

export { Title, Subtitle, Paragraph };
