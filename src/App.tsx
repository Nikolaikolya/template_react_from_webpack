import './style.css';
import Image from './color.png';
import Icon from './i.svg';
import { ClickCounter } from './ClickCounter';

export const App = () => {
  return (
    <>
      <ClickCounter />
      <h1>Hello</h1>
      <h2>{process.env.name}</h2>
      <img src={Image} alt="" />
      <img src={Icon} alt="" />
    </>
  );
};
