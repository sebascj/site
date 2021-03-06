import Head from 'next/head';
import styled from 'styled-components';
import Diagram, { createSchema, useSchema } from 'beautiful-react-diagrams';

import Layout from '../components/layout/layout';
import { Title } from '../components/font-elements/Fonts';
import Icon from '../components/icon/Icon';

const NodeBox = styled.div`
  border-radius: 150px;
  background: #e0e0e0;
  box-shadow: 10px 10px 20px #bebebe, -10px -10px 20px #ffffff;
  width: 100px;
  height: 100px;
  font-size: 13px;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  &::after {
    content: '';
    width: 120px;
    height: 120px;
    position: absolute;
    border: 2px dashed var(--theme-red);
    border-radius: 50%;
  }
`;

const NodeText = styled.div`
  font-family: 'Hind Vadodara';
  padding: 10px;
  color: var(--text-gray);
  font-size: 1.2em;
`;

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

const getInitialState = () => {
  const initialState = {
    nodes: [
      {
        id: 'node-1',
        coordinates: [250, 60],
        // render: createNode({ name: 'netlify', text: 'SSG' })
        render: createNode({ name: 'netlify' })
      },
      {
        id: 'node-2',
        coordinates: [100, 200],
        render: createNode({ name: 'html' })
      },
      {
        id: 'node-3',
        coordinates: [250, 220],
        render: createNode({ name: 'css' })
      },
      {
        id: 'node-4',
        coordinates: [400, 200],
        render: createNode({ name: 'js', styles: 'background: #FFF;' })
      },
      {
        id: 'node-5',
        coordinates: [400, 300],
        render: createNode({ name: 'react' })
      },
      {
        id: 'node-6',
        coordinates: [400, 400],
        render: createNode({ name: 'nextjs' })
      },
      {
        id: 'node-7',
        coordinates: [400, 500],
        render: createNode({ name: 'styled', styles: 'font-size: 4em;' })
      },
      {
        id: 'node-9',
        coordinates: [700, 500],
        render: createNode({ name: 'windows' })
      },
      {
        id: 'node-10',
        coordinates: [850, 500],
        render: createNode({ name: 'debian' })
      },
      {
        id: 'node-11',
        coordinates: [850, 700],
        render: createNode({ name: 'git' })
      },
      {
        id: 'node-12',
        coordinates: [850, 900],
        render: createNode({ name: 'github' })
      },
      {
        id: 'node-13',
        coordinates: [850, 100],
        render: createNode({ name: 'vscode' })
      },
      {
        id: 'node-14',
        coordinates: [850, 300],
        render: createNode({ name: 'maps' })
      },
      {
        id: 'node-15',
        coordinates: [850, 500],
        render: createNode({ name: 'analytics' })
      },
      {
        id: 'node-16',
        coordinates: [850, 600],
        render: createNode({ name: 'mailgun' })
      }
    ]
    // links: [
    //   { input: 'node-1', output: 'node-2', className: 'link' },
    //   { input: 'node-1', output: 'node-3', className: 'link' },
    //   { input: 'node-1', output: 'node-4', className: 'link' }
    // ]
  };
  return initialState;
};

const initialSchema = createSchema(getInitialState());

const UncontrolledDiagram = ({ className }) => {
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
  return (
    <div className={className} style={{ height: '80vh' }}>
      <button onClick={reset}>Reset</button>
      <Diagram schema={schema} onChange={getCoordinates} />
    </div>
  );
};

const DiagramComponent = styled(UncontrolledDiagram)`
  & .bi.bi-diagram {
    background-color: var(--neuphorm-gray);
  }
  /* .link {
    path[class='bi-link-path'] {
      stroke: var(--theme-red) !important;
    }
  } */
`;

const ProjectContent = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  margin: 0 20px;
`;

function About() {
  return (
    <>
      <Head>
        <title>Projects | Sebastian</title>
      </Head>
      <Layout>
        <ProjectContent>
          <Title>Projects</Title>
          <DiagramComponent />
        </ProjectContent>
      </Layout>
    </>
  );
}

export default About;
