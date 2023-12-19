import useBirdList from './useBirdList';

const BirdList = () => {
  const [birds] = useBirdList(import.meta.env.VITE_REGION);
  return (
    <ul className="grid grid-cols-4 gap-4">
      {birds.map(
        bird => (
          console.log(bird),
          (
            <li
              className="border border-gray-200 h-80 bg-[url('/images/masked_gnatcatcher.jpg')] bg-cover rounded"
              key={bird.speciesCode}
            >
              <div className="bg-white mx-auto rounded-t py-2">
                <p className="text-center">{`${bird.howMany} ${bird.comName}s`}</p>
                <p className="text-center">{bird.locName}</p>
              </div>
            </li>
          )
        )
      )}
    </ul>
  );
};

export default BirdList;
