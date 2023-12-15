import useBirdList from './useBirdList';

const BirdList = () => {
  const [birds] = useBirdList('AU-QLD-BRI');
  return (
    <ul>
      {birds.map(bird => (console.log(bird), (<li key={bird.speciesCode}>{bird.comName}</li>)))}
    </ul>
  );
};

export default BirdList;
