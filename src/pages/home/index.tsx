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
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={locationBoxTwo} setLocation={setLocationBoxTwo} />
      </Canvas>
      ,
    </>
  );
};

export default Home;
