import useBirdList from './useBirdList';

const BirdList = () => {
  const [birds] = useBirdList(import.meta.env.VITE_REGION);
  return (
    <ul>
      {birds.map(bird => (console.log(bird), (<li key={bird.speciesCode}>{bird.comName}</li>)))}
    </ul>
  );
};

export default BirdList;
