import styled from 'styled-components';
import unicodes from './icon-code';

const IconComponent = styled.span(
  ({ content, color, custom }) => `
    &:before {
      font-family: "WebIcon";
      content: "${content}";
      color: ${color};
      ${custom}
    }
  `
);

const Icon = (props) => {
  const { name, styles } = props;
  const { code, color } = unicodes[name];
  return <IconComponent content={code} color={color} custom={styles} />;
};

export default Icon;
