/* eslint-disable react/no-unknown-property */
import icon from '@assets/images/logo.svg';

import css from './index.module.scss';

import {useClassNames} from 'react-hook-classnames';
import {FC, useState} from 'react';
import {useCount} from '@stores';
import shallow from 'zustand/shallow';
import { Canvas, useFrame, ThreeElements, Vector3 } from '@react-three/fiber'
import Box from '../../components/Box';

const Home: FC = function () {
  const [style, cla] = useClassNames({styleSheet: css, camelTransition: '-'});
  const {count, inc, dec} = useCount(state => state, shallow);
  const [locationBoxTwo, setLocationBoxTwo] = useState<Vector3>([1.2, 0, 0]);

  return (
    <>
      <Canvas style={{background: "black"}}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} color={'white'} intensity={0.8} />
        {Array.from({length: 100}).map((_, index) => (
          <>
            <Box position={[ (Math.random() < 0.5 ? -1 : 1) * Math.random() * 10, (Math.random() < 0.5 ? -1 : 1) * Math.random() * 10, (Math.random() < 0.5 ? -1 : 1) * Math.random() * 10 ]} />
            {/* <Box position={locationBoxTwo} /> */}
          </>
        ))}
      </Canvas>
    </>
  );
};

export default Home;
