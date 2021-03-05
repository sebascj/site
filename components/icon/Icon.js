import styled from 'styled-components';
import unicodes from './icon-code';

const IconComponent = styled.span(
  ({ name, custom }) => `
    &:before {
      font-family: "WebIcon";
      content: "${name}";
      ${custom}
    }
  `
);

const Icon = (props) => {
  const { name, styles } = props;
  const iconName = unicodes[name] || '';
  return <IconComponent name={iconName} custom={styles} />;
};

export default Icon;
