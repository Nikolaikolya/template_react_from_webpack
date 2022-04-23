import './style.css';
import Image from './color.png';
import Icon from './i.svg';

export const App = () => {
  return (
    <>
      <h1>Hello</h1>
      <img src={Image} alt="" />
      <img src={Icon} alt="" />
    </>
  )
}
