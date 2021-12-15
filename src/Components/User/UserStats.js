import React from 'react';
import Head from '../Helper/Head';
import useFetch from '../../Hooks/useFetch';
import Loading from '../Helper/Loading';
import Error from '../Helper/Error';
import { GET_STATS } from '../../api';
const UsetStatsGraphs = React.lazy(() => import('./UsetStatsGraphs'));

const UserStats = () => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function getData() {
      const { url, options } = GET_STATS();
      await request(url, options);
    }
    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data)
    return (
      <React.Suspense fallback={<div></div>}>
        <Head title="Estatísticas" />
        <UsetStatsGraphs data={data} />
      </React.Suspense>
    );
  else return null;
};

export default UserStats;
