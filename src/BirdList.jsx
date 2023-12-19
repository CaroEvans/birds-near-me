import useBirdList from './useBirdList';

const BirdList = () => {
  const [birds] = useBirdList(import.meta.env.VITE_REGION);
  return (
    <ul className="grid grid-cols-4 gap-4">
      {birds.map(
        bird => (
          console.log(bird),
          (
            <li className="border border-gray-200 h-80" key={bird.speciesCode}>
              <img src="/images/masked_gnatcatcher.jpg" />
              {bird.comName}
            </li>
          )
        )
      )}
    </ul>
  );
};

export default BirdList;
