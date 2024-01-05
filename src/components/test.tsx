import { useFetch } from './cumtomHooks';

const TestHook = () => {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const { data, loading, error } = useFetch(url, options);
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {(error as Error).message}</p>;
  }

  return (
    <div>
      <h1>Data from API:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default TestHook;
