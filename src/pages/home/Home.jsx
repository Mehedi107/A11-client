import { useEffect, useState } from 'react';
import Banner from '../../components/banner/Banner';
import FeaturedArtifact from '../../components/card/FeaturedArtifact';
import axios from 'axios';
import { Link } from 'react-router-dom';
import DiscoverArtifactCategory from '../../components/discover_artifact_category/DiscoverArtifactCategory';
import UserContribution from '../../components/user_contribution/UserContribution';

const Home = () => {
  const [cardContent, setCardContent] = useState([]);

  useEffect(() => {
    // Get artifacts data from server
    axios
      .get(`${import.meta.env.VITE_SERVER_URL}/artifacts`)
      .then(function (response) {
        // handle success
        console.log(response.data);
        setCardContent(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <div className="min-h-full ">
      <Banner></Banner>
      {/* Featured artifact section */}
      <div className="container mx-auto px-5 py-20">
        {/* Title */}
        <h2 className="text-center text-2xl mb-8">Featured Artifacts</h2>
        {/* Container */}
        <div className=" grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {cardContent.map(content => (
            <FeaturedArtifact
              key={content._id}
              content={content}
            ></FeaturedArtifact>
          ))}
        </div>
        <div className="flex justify-center items-center mt-5">
          <Link className="btn" to={'/all-artifacts'}>
            See all Artifacts
          </Link>
        </div>
      </div>
      {/* Discover Artifact Category */}
      <DiscoverArtifactCategory></DiscoverArtifactCategory>
      {/* User contribution spotlight */}
      <UserContribution></UserContribution>
    </div>
  );
};

export default Home;
