import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import LoadingSpinner from '../../components/LoadingSpinner';
import FeaturedArtifactCard from '../../components/card/FeaturedArtifactCard';

const AllArtifacts = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const axiosPublic = useAxiosPublic();

  // get artifacts data
  const {
    data: allArtifacts = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ['artifacts'],
    queryFn: async () =>
      (await axiosPublic(`/searched-artifacts?search=${searchTerm}`)).data,
  });

  return (
    <div className="bg-tertiary min-h-screen">
      <div className="max-w-7xl mx-auto p-5">
        <Helmet>
          <title>All Artifacts</title>
        </Helmet>
        <input
          type="text"
          placeholder="Search artifacts by name"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="input input-bordered w-full mb-4"
        />
        {/* is something wrong  */}
        {isError && (
          <div className="h-72 flex justify-center items-center">
            <p>{error.message}</p>
          </div>
        )}
        {/* while loading data */}
        {isLoading && (
          <div className="h-72 flex justify-center items-center">
            <LoadingSpinner />
          </div>
        )}
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {allArtifacts.map(artifact => (
            <FeaturedArtifactCard
              key={artifact._id}
              content={artifact}
              refetch={refetch}
            ></FeaturedArtifactCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllArtifacts;
