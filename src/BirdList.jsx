import useBirdList from './useBirdList';

const BirdList = () => {
  const [birds] = useBirdList('AU-BRI-QLD');
  return (
    <ul>
      {birds.map(bird => (
        <li key={bird.speciesCode}>{bird.comName}</li>
      ))}
    </ul>
  );
};

export default BirdList;
