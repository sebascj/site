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
    offsetY: 50,
    distanceX: 65,
    distanceY: 120,
    diagramWidth: 49 * 6
  },
  landscape: {
  offsetY: 50,
    distanceX: 150,
    distanceY: 190,
    diagramWidth: 110 * 6
  },
  screen: {
    offsetY: 50,
    distanceX: 150,
    distanceY: 190,
    diagramWidth: 130 * 6
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

const hydrateState = (state, display, width) => {
  const { nodes, links } = state;
  const diagram = {
    initX: diagramSizes.initX,
    initY: diagramSizes.initY,
    distanceX: diagramSizes[display].distanceX,
    distanceY: diagramSizes[display].distanceY,
    offsetY: diagramSizes[display].offsetY,
    diagramWidth: diagramSizes[display].diagramWidth
  };
  const coordinatesCopy = getCoordinates(diagram);
  const hidratedNodes = nodes.map((node) => {
    const newCoordinates = coordinatesCopy.filter((coordinatesNode) => {
      return coordinatesNode.id === node.id;
    })[0].coordinates;

    newCoordinates[0] =
      newCoordinates[0] + (width - 40 - diagram.diagramWidth) / 2;
    newCoordinates[1] = newCoordinates[1] + diagram.offsetY;
    return Object.assign({}, node, { coordinates: newCoordinates });
  });
  return { nodes: hidratedNodes, links };
};

const getInitialState = (display, width) => {
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
  return hydrateState(initialState, display, width);
};

const initialSchema = createSchema(getInitialState('screen', 1300));

const UncontrolledDiagram = () => {
  const width = useRef(0);
  const [schema, { onChange }] = useSchema(initialSchema);
  const windowResize = useRef(() => {
    width.current = window.innerWidth;
    if (width.current >= 1300) {
      reset('screen');
    } else if (width.current >= 600) {
      reset('landscape');
    } else {
      reset('mobile');
    }
  });

  const reset = (display) => {
    onChange(Object.assign(getInitialState(display, width.current)));
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

  /**
   * Static: Remove onChange Function
   *
   */

  useEffect(() => {
    const cb = (e) => {
      windowResize.current(e);
    };
    window.addEventListener('resize', cb);
    windowResize.current();
    return () => {
      window.removeEventListener('resize', cb);
    };
  }, []);

  return (
    <DiagramWrapper>
      {/* <button onClick={reset}>Reset</button> */}
      <Diagram schema={schema} onChange={getCoordinates} />
    </DiagramWrapper>
  );
};
export default UncontrolledDiagram;
