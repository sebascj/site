import { useEffect } from 'react';
import Diagram, { createSchema, useSchema } from 'beautiful-react-diagrams';

import Icon from '../icon/Icon';
import {
  DiagramWrapper,
  NodeBox,
  NodeBoxMobile,
  NodeText
} from './diagram-styles';

const offsetX = 50;
const distance = 150;
const initX = 0;

const coordinates = [
  { id: 'node-1', coordinates: [initX + distance, 40] },
  { id: 'node-2', coordinates: [initX, 240] },
  { id: 'node-3', coordinates: [initX + distance * 2, 240] },
  { id: 'node-4', coordinates: [initX + distance, 640] },
  { id: 'node-5', coordinates: [initX + distance, 440] },
  { id: 'node-6', coordinates: [initX + distance, 240] },
  { id: 'node-7', coordinates: [initX + distance * 2, 440] },
  { id: 'node-9', coordinates: [initX + distance * 4, 440] },
  { id: 'node-10', coordinates: [initX + distance * 4, 240] },
  { id: 'node-11', coordinates: [initX + distance * 3, 40] },
  { id: 'node-12', coordinates: [initX + distance * 2, 40] },
  { id: 'node-13', coordinates: [initX + distance * 3, 240] },
  { id: 'node-14', coordinates: [initX + distance * 2, 640] },
  { id: 'node-15', coordinates: [initX + distance, 840] },
  { id: 'node-16', coordinates: [initX, 640] }
];

const createNode = (props) => {
  const { name, text, styles } = props;
  const customStyles = `font-size:3em; ${styles ? styles : ''}`;
  const CustomNode = (props) => {
    const { inputs } = props;
    return (
      <NodeBox>
        <Icon name={name} styles={customStyles} />
        {text && <NodeText>{text}</NodeText>}
        <div>
          {inputs.map((port) =>
            cloneElement(port, {
              style: { width: '50px', height: '25px', background: '#1B263B' }
            })
          )}
        </div>
      </NodeBox>
    );
  };
  return CustomNode;
};

const hydrateState = (state) => {
  const { nodes, links } = state;
  const hidratedNodes = nodes.map((node) => {
    const newCoordinates = coordinates.filter((coordinatesNode) => {
      return coordinatesNode.id === node.id;
    })[0].coordinates;

    newCoordinates[0] = newCoordinates[0] + offsetX;
    return Object.assign({}, node, { coordinates: newCoordinates });
  });
  return { nodes: hidratedNodes, links };
};

const getInitialState = () => {
  const initialState = {
    nodes: [
      {
        id: 'node-1',
        // render: createNode({ name: 'netlify', text: 'SSG' })
        render: createNode({ name: 'netlify' })
      },
      {
        id: 'node-2',
        render: createNode({ name: 'html' })
      },
      {
        id: 'node-3',
        render: createNode({ name: 'css' })
      },
      {
        id: 'node-4',
        render: createNode({ name: 'js', styles: 'background: #FFF;' })
      },
      {
        id: 'node-5',
        render: createNode({ name: 'react' })
      },
      {
        id: 'node-6',
        render: createNode({ name: 'nextjs' })
      },
      {
        id: 'node-7',
        render: createNode({ name: 'styled', styles: 'font-size: 4em;' })
      },
      {
        id: 'node-9',
        render: createNode({ name: 'windows' })
      },
      {
        id: 'node-10',
        render: createNode({ name: 'debian' })
      },
      {
        id: 'node-11',
        render: createNode({ name: 'git' })
      },
      {
        id: 'node-12',
        render: createNode({ name: 'github' })
      },
      {
        id: 'node-13',
        render: createNode({ name: 'vscode' })
      },
      {
        id: 'node-14',
        render: createNode({ name: 'maps' })
      },
      {
        id: 'node-15',
        render: createNode({ name: 'analytics' })
      },
      {
        id: 'node-16',
        render: createNode({ name: 'mailgun' })
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
  return hydrateState(initialState);
};

const initialSchema = createSchema(getInitialState());

const UncontrolledDiagram = () => {
  const [schema, { onChange }] = useSchema(initialSchema);
  const reset = () => {
    onChange(Object.assign(getInitialState()));
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
    reset();
  }, []);

  return (
    <DiagramWrapper>
      {/* <button onClick={reset}>Reset</button> */}
      <Diagram schema={schema} onChange={getCoordinates} />
    </DiagramWrapper>
  );
};
export default UncontrolledDiagram;
