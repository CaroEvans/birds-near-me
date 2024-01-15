const fetchBirdList = async ({ queryKey }) => {
  const region = queryKey[1];

  if (!import.meta.env.VITE_EBIRD_API_KEY) {
    throw new Error('Something went wrong');
  }

  if (!region) {
    throw new Error('Missing region');
  }

  const apiResponse = await fetch(
    `https://api.ebird.org/v2/data/obs/${region}/recent?key=${
      import.meta.env.VITE_EBIRD_API_KEY
    }&detail=full&maxResults=12`
  );

  if (!apiResponse.ok) {
    throw new Error('No results found');
  }

  return apiResponse.json();
};

export default fetchBirdList;
