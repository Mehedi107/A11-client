import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../hooks/useAxiosPublic';
import LoadingSpinner from '../components/LoadingSpinner';
import { Link } from 'react-router-dom';
import FeaturedArtifactCard from './../components/card/FeaturedArtifactCard';

const SectionFeatured = () => {
  const axiosPublic = useAxiosPublic();

  // get artifacts data
  const {
    data: featuredArtifacts = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['artifacts'],
    queryFn: async () => (await axiosPublic('/artifacts')).data,
  });
  return (
    <div className="bg-tertiary">
      <div className="container mx-auto px-3 sm:px-4 md:px-5 py-20">
        {/* Title */}
        <h2 className="text-center mb-8">Featured Artifacts</h2>

        {/* while fetching data */}
        {isLoading && (
          <div className="h-96 place-items-center grid">
            <LoadingSpinner />
          </div>
        )}

        {isError && (
          <div className="h-72 place-items-center grid">
            <p>{error.message}</p>
          </div>
        )}
        {/* Container */}
        <div className=" grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {featuredArtifacts.map(content => (
            <FeaturedArtifactCard
              key={content._id}
              content={content}
            ></FeaturedArtifactCard>
          ))}
        </div>
        <div className="flex justify-center items-center mt-5">
          <Link
            className="btn lg:btn-lg bg-primary text-accent mt-5 hover:bg-primary"
            to={'/all-artifacts'}
          >
            See all Artifacts
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SectionFeatured;
