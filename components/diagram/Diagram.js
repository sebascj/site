import { useEffect, useRef } from 'react';
import Diagram, { createSchema, useSchema } from 'beautiful-react-diagrams';

import Icon from '../icon/Icon';
import {
  DiagramWrapper,
  NodeBox,
  NodeBoxMobile,
  NodeBoxLandscape,
  NodeText
} from './diagram-styles';

const diagramSizes = {
  initX: 0,
  initY: 0,
  mobile: {
    distanceX: 65,
    distanceY: 120,
    diagramWidth: 49 * 6,
    diagramHeight: 100 * 5
  },
  landscape: {
    distanceX: 150,
    distanceY: 190,
    diagramWidth: 110 * 6,
    diagramHeight: 150 * 5
  },
  screen: {
    distanceX: 150,
    distanceY: 190,
    diagramWidth: 115 * 6,
    diagramHeight: 160 * 5
  }
};

const getCoordinates = (props) => {
  const { initX, initY, distanceX, distanceY } = props;

  const coordinates = [
    { id: 'node-1', coordinates: [initX + distanceX, initY] },
    { id: 'node-2', coordinates: [initX, initY + distanceY] },
    {
      id: 'node-3',
      coordinates: [initX + distanceX * 2, initY + distanceY]
    },
    {
      id: 'node-4',
      coordinates: [initX + distanceX, initY + distanceY * 3]
    },
    {
      id: 'node-5',
      coordinates: [initX + distanceX, initY + distanceY * 2]
    },
    {
      id: 'node-6',
      coordinates: [initX + distanceX, initY + distanceY]
    },
    {
      id: 'node-7',
      coordinates: [initX + distanceX * 2, initY + distanceY * 2]
    },
    {
      id: 'node-9',
      coordinates: [initX + distanceX * 4, initY + distanceY * 2]
    },
    {
      id: 'node-10',
      coordinates: [initX + distanceX * 4, initY + distanceY]
    },
    { id: 'node-11', coordinates: [initX + distanceX * 3, initY] },
    { id: 'node-12', coordinates: [initX + distanceX * 2, initY] },
    {
      id: 'node-13',
      coordinates: [initX + distanceX * 3, initY + distanceY]
    },
    {
      id: 'node-14',
      coordinates: [initX + distanceX * 2, initY + distanceY * 3]
    },
    {
      id: 'node-15',
      coordinates: [initX + distanceX, initY + distanceY * 4]
    },
    { id: 'node-16', coordinates: [initX, initY + distanceY * 3] }
  ];

  return JSON.parse(JSON.stringify(coordinates));
};

const createNode = (props) => {
  const { name, text, styles, display } = props;
  const customStyles = `font-size:3em; ${styles ? styles : ''}`;
  const Node =
    display === 'mobile'
      ? NodeBoxMobile
      : display === 'landscape'
      ? NodeBoxLandscape
      : NodeBox;
  const CustomNode = () => {
    return (
      <Node>
        <Icon name={name} styles={customStyles} />
        {text && <NodeText>{text}</NodeText>}
      </Node>
    );
  };
  return CustomNode;
};

const hydrateState = (state, display, width, height) => {
  const { nodes, links } = state;
  const diagram = {
    initX: diagramSizes.initX,
    initY: diagramSizes.initY,
    distanceX: diagramSizes[display].distanceX,
    distanceY: diagramSizes[display].distanceY,
    diagramWidth: diagramSizes[display].diagramWidth,
    diagramHeight: diagramSizes[display].diagramHeight
  };
  const coordinatesCopy = getCoordinates(diagram);
  const hydratedNodes = nodes.map((node) => {
    const newCoordinates = coordinatesCopy.filter((coordinatesNode) => {
      return coordinatesNode.id === node.id;
    })[0].coordinates;
    newCoordinates[0] = newCoordinates[0] + (width - diagram.diagramWidth) / 2;
    newCoordinates[1] =
      newCoordinates[1] + (height - diagram.diagramHeight) / 2;
    return Object.assign({}, node, { coordinates: newCoordinates });
  });
  return { nodes: hydratedNodes, links };
};

const getInitialState = (display, width, height) => {
  const initialState = {
    nodes: [
      {
        id: 'node-1',
        render: createNode({ display, name: 'netlify' })
      },
      {
        id: 'node-2',
        render: createNode({ display, name: 'html' })
      },
      {
        id: 'node-3',
        render: createNode({ display, name: 'css' })
      },
      {
        id: 'node-4',
        render: createNode({ display, name: 'js', styles: 'background: #FFF;' })
      },
      {
        id: 'node-5',
        render: createNode({ display, name: 'react' })
      },
      {
        id: 'node-6',
        render: createNode({ display, name: 'nextjs' })
      },
      {
        id: 'node-7',
        render: createNode({ display, name: 'styled' })
      },
      {
        id: 'node-9',
        render: createNode({ display, name: 'windows' })
      },
      {
        id: 'node-10',
        render: createNode({ display, name: 'debian' })
      },
      {
        id: 'node-11',
        render: createNode({ display, name: 'git' })
      },
      {
        id: 'node-12',
        render: createNode({ display, name: 'github' })
      },
      {
        id: 'node-13',
        render: createNode({ display, name: 'vscode' })
      },
      {
        id: 'node-14',
        render: createNode({ display, name: 'maps' })
      },
      {
        id: 'node-15',
        render: createNode({ display, name: 'analytics' })
      },
      {
        id: 'node-16',
        render: createNode({ display, name: 'mailgun' })
      }
    ],
    links: [
      { input: 'node-1', output: 'node-6', className: 'link' },
      { input: 'node-6', output: 'node-5', className: 'link' },
      { input: 'node-5', output: 'node-4', className: 'link' },
      { input: 'node-4', output: 'node-16', className: 'link' },
      { input: 'node-4', output: 'node-15', className: 'link' },
      { input: 'node-4', output: 'node-14', className: 'link' },
      { input: 'node-6', output: 'node-2', className: 'link' },
      { input: 'node-6', output: 'node-3', className: 'link' },
      { input: 'node-3', output: 'node-7', className: 'link' },
      {
        input: 'node-12',
        output: 'node-1',
        className: 'link',
        name: 'github-netlify'
      },
      {
        input: 'node-11',
        output: 'node-12',
        className: 'link',
        name: 'git-github'
      },
      {
        input: 'node-13',
        output: 'node-11',
        className: 'link',
        name: 'vscode-git'
      },
      {
        input: 'node-10',
        output: 'node-13',
        className: 'link',
        name: 'debian-vscode'
      },
      {
        input: 'node-9',
        output: 'node-10',
        className: 'link',
        name: 'windows-debian',
        label: 'WSL2'
      }
    ]
  };
  return createSchema(hydrateState(initialState, display, width, height));
};

const UncontrolledDiagram = () => {
  const width = useRef(0);
  const diagramParent = useRef(null);
  const [schema, { onChange }] = useSchema();
  const windowResize = useRef((parent) => {
    const parentWidth = parent.current.offsetWidth;
    const parentHeight = parent.current.offsetHeight;
    width.current = window.innerWidth;
    if (width.current >= 1300) {
      reset('screen', parentWidth, parentHeight);
    } else if (width.current >= 600) {
      reset('landscape', parentWidth, parentHeight);
    } else {
      reset('mobile', parentWidth, parentHeight);
    }
  });

  const reset = (display, parentWidth, parentHeight) => {
    let displayOffset = '';
    switch (display) {
      case 'screen':
        displayOffset =
          diagramSizes.screen.diagramWidth > parentWidth &&
          diagramSizes.landscape.diagramWidth > parentWidth
            ? 'mobile'
            : screen.diagramWidth > parentWidth
            ? 'landscape'
            : 'screen';
        break;
      case 'landscape':
        displayOffset =
          diagramSizes.landscape.diagramWidth > parentWidth
            ? 'mobile'
            : 'landscape';
        break;
      case 'mobile':
        displayOffset = display;
        break;
    }
    const initialState = getInitialState(
      displayOffset,
      parentWidth,
      parentHeight
    );
    onChange(initialState);
    onChange(initialState);
  };

  const getCoordinates = (_ref) => {
    /**
     * Use this function to get coordinates
     */
    // const { nodes } = _ref;
    // const serialized = nodes.map((node) => {
    //   const { id, coordinates } = node;
    //   return { id, coordinates };
    // });
    // console.log(JSON.stringify(serialized));
    onChange(_ref);
  };

  useEffect(() => {
    const onWindowResize = () => {
      windowResize.current(diagramParent);
    };
    window.addEventListener('resize', onWindowResize);
    onWindowResize();
    return () => {
      window.removeEventListener('resize', onWindowResize);
    };
  }, []);

  return (
    <DiagramWrapper ref={diagramParent}>
      <Diagram schema={schema} onChange={getCoordinates} />
    </DiagramWrapper>
  );
};
export default UncontrolledDiagram;
