import { useEffect, useState } from 'react';

import Episodes from '../../components/Episodes';
import Navigation from '../../components/Navigation';
import ShowInfos from '../../components/ShowInfos';
import Banner from '../../components/Banner';

import BounceLoader from 'react-spinners/BounceLoader';

import './styles.css';

function App() {
  const [baseInfos, setBaseInfos] = useState();
  const [episodes, setEpisodes] = useState();
  const [loading, setLoading] = useState(true);

  const handleBaseInfos = () => {
    fetch('http://api.tvmaze.com/shows/6771')
      .then((response) => response.json())
      .then((json) => {
        setBaseInfos(json);
        setLoading(false);
      });
  };

  const handleEpisodes = () => {
    fetch('http://api.tvmaze.com/shows/6771/episodes')
      .then((response) => response.json())
      .then((json) => setEpisodes(json));
  };

  useEffect(() => {
    handleBaseInfos();
    handleEpisodes();
  }, []);

  if (loading)
    return (
      <div className='loading'>
        <BounceLoader size={150} color={'#FF8C00'} loading={loading} />
      </div>
    );
  return (
    <main className='container'>
      <h1 className='title'>{baseInfos.name}</h1>
      <section>
        <Banner image={baseInfos.image.medium} />

        <ShowInfos baseInfos={baseInfos} />
      </section>
      <Navigation />
      <div className='episode-background'>
        <div className='episode-grid'>
          {episodes &&
            // eslint-disable-next-line
            episodes.map((episode) => {
              if (episode.season === 1 || episode.season === 2) {
                return (
                  <Episodes
                    key={episode.id}
                    id={episode.id}
                    image={episode.image.original}
                    name={episode.name}
                    number={episode.number}
                  />
                );
              }
            })}
        </div>
      </div>
    </main>
  );
}

export default App;
