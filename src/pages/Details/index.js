import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Banner from '../../components/Banner';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft } from '@fortawesome/free-regular-svg-icons';
import BounceLoader from 'react-spinners/BounceLoader';

import './styles.css';

function Details(props) {
  const [episodeDetails, setEpisodeDetails] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://api.tvmaze.com/episodes/${props.match.params.id}`)
      .then((response) => response.json())
      .then((json) => {
        setEpisodeDetails(json);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div className='loading'>
        <BounceLoader size={150} color={'#FF8C00'} loading={loading} />
      </div>
    );
  return (
    <>
      <main className='container'>
        <div className='top-navigation'>
          <h1 className='title'>{episodeDetails.name}</h1>
          <Link to='/'>
            <FontAwesomeIcon
              icon={faArrowAltCircleLeft}
              size='3x'
              color='1c1c1c'
            />
          </Link>
        </div>
        <section>
          <Banner image={episodeDetails.image.medium} />
          <div className='details-box'>
            <h2>Summary</h2>
            <p dangerouslySetInnerHTML={{ __html: episodeDetails.summary }}></p>
            <h3>Date</h3>
            <p>
              {episodeDetails.airdate} at {episodeDetails.airtime}
            </p>
            <h3>Time</h3>
            <p>{episodeDetails.runtime} minutes</p>
            <h3>Season</h3>
            <p>{episodeDetails.season}</p>
            <h3>Episode Number</h3>
            <p>{episodeDetails.number}</p>
          </div>
        </section>
      </main>
    </>
  );
}

export default Details;
