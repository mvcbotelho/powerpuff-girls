import './styles.css';

function ShowInfos({ baseInfos }) {
  return (
    <div className='information-box'>
      <h2>Summary</h2>
      <p dangerouslySetInnerHTML={{ __html: baseInfos.summary }}></p>
      <div className='information-grid'>
        <div>
          <h3>Genres</h3>
          <ul>
            {baseInfos.genres.map((genre, id) => (
              <li key={id}>{genre}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Rating</h3>
          <span>{baseInfos.rating.average}</span>
        </div>
      </div>
    </div>
  );
}

export default ShowInfos;
