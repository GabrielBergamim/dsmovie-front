import { ReactComponent as StarFull } from '../../assets/img/star-full.svg';
import { ReactComponent as StarEmpty } from '../../assets/img/star-empty.svg';
import { ReactComponent as StarHalf } from '../../assets/img/star-half.svg';

import './style.css';

interface Props {
  score: number;
}

interface StarProps {
  fill: number;
}

function getFills(score: number) {
  const fills = [0, 0, 0, 0, 0];

  const integerPart = Math.floor(score);

  for (let i = 0; i < integerPart; i++) {
    fills[i] = 1;
  }

  const diff = score - integerPart;

  if (diff > 0) {
    fills[integerPart] = 0.5;
  }

  return fills;
}

function Star({ fill }: StarProps) {
  if (fill === 0) {
    return <StarEmpty />;
  }

  if(fill === 1) {
    return <StarFull />;
  }

  return <StarHalf />;
}

export function MovieStars({ score }: Props) {

  const fills = getFills(score);

  return (
    <div className="dsmovie-stars-container">
      {fills.map((fill, index) => <Star fill={fill} key={index}/>)}
    </div>
  )
}