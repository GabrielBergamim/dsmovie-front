import { PageDTO } from 'utils/page';
import { ReactComponent as Arrow } from '../../assets/img/arrow.svg';

import './styles.css';

interface Props {
  page: PageDTO<any>;
  change: (newPageNumber: number) => void;
}

export function Pagination({ page, change }: Props) {
  return (
    <div className="dsmovie-pagination-container">
      <div className="dsmovie-pagination-box">
        <button className="dsmovie-pagination-button" disabled={page.first} onClick={() => change(page.number - 1)} >
          <Arrow />
        </button>
        <p>{`${page.number + 1} de ${page.totalPages}`}</p>
        <button className="dsmovie-pagination-button" disabled={page.last} onClick={() => change(page.number + 1)}>
          <Arrow className="dsmovie-flip-horizontal" />
        </button>
      </div>
    </div>
  );
}