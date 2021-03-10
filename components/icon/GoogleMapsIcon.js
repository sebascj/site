import styled from 'styled-components';

const GoogleIcon = styled.span(
  ({ custom }) => `
  ${custom ? custom : ''}
  .path1:before {
    font-family: 'WebIcon';
    content: '\\e900';
    color: rgb(72, 181, 100);
  }
  .path2:before {
    font-family: 'WebIcon';
    content: '\\e901';
    margin-left: -1em;
    color: rgb(252, 198, 14);
  }
  .path3:before {
    font-family: 'WebIcon';
    content: '\\e902';
    margin-left: -1em;
    color: rgb(44, 133, 235);
  }
  .path4:before {
    font-family: 'WebIcon';
    content: '\\e903';
    margin-left: -1em;
    color: rgb(237, 87, 72);
  }
  .path5:before {
    font-family: 'WebIcon';
    content: '\\e904';
    margin-left: -1em;
    color: rgb(86, 149, 246);
  }

`
);

const GoogleMapsIcon = ({ className, styles }) => {
  return (
    <GoogleIcon className={className} custom={styles}>
      <span className="path1"></span>
      <span className="path2"></span>
      <span className="path3"></span>
      <span className="path4"></span>
      <span className="path5"></span>
    </GoogleIcon>
  );
};

export default GoogleMapsIcon;
