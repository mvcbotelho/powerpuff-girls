import './styles.css';

import { Link } from 'react-router-dom';

function Episodes({ id, image, name, number }) {
  return (
    <Link to={`/details/${id}`}>
      <div className='episode-box' key={id}>
        <img src={image} alt={name} />
        <span>
          {number} - {name}
        </span>
      </div>
    </Link>
  );
}

export default Episodes;
