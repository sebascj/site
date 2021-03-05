import Head from 'next/head';
import styled from 'styled-components';
import Diagram, { createSchema, useSchema } from 'beautiful-react-diagrams';

import Layout from '../components/layout/layout';
import { Title } from '../components/font-elements/Fonts';
import Icon from '../components/icon/Icon';

const DiagramBox = styled.div`
  background: #717ec3;
  border-radius: 10px;
`;

const CustomNode = (props) => {
  const { inputs } = props;

  return (
    <DiagramBox>
      <Icon name="netlify" styles={'color: #01ad9f; font-size:2em'} />
      <div style={{ padding: '10px', color: 'white' }}>Custom Node</div>
      <div style={{ marginTop: '20px' }}>
        {inputs.map((port) =>
          cloneElement(port, {
            style: { width: '50px', height: '25px', background: '#1B263B' }
          })
        )}
      </div>
    </DiagramBox>
  );
};

const getInitialState = () => {
  const initialState = {
    nodes: [
      {
        id: 'node-1',
        content: 'Node 1',
        coordinates: [250, 60],
        render: CustomNode
      },
      { id: 'node-2', content: 'Node 2', coordinates: [100, 200] },
      { id: 'node-3', content: 'Node 3', coordinates: [250, 220] },
      { id: 'node-4', content: 'Node 4', coordinates: [400, 200] }
    ],
    links: [
      { input: 'node-1', output: 'node-2' },
      { input: 'node-1', output: 'node-3' },
      { input: 'node-1', output: 'node-4' }
    ]
  };
  /**
   * TODO: remove render components from reset function
   */
  // return JSON.parse(JSON.stringify(initialState));
  return initialState;
};

const initialSchema = createSchema(getInitialState());

const UncontrolledDiagram = () => {
  const [schema, { onChange }] = useSchema(initialSchema);
  const reset = () => {
    onChange(Object.assign(getInitialState()));
  };
  /**
   * Static: Remove onChange Function
   *
   */
  return (
    <div style={{ height: '22.5rem' }}>
      <button onClick={reset}>Reset</button>
      <Diagram schema={schema} onChange={onChange} />
    </div>
  );
};

function About() {
  return (
    <>
      <Head>
        <title>Projects | Sebastian</title>
      </Head>
      <Layout>
        <Title>Projects</Title>
        <UncontrolledDiagram />
      </Layout>
    </>
  );
}

export default About;
