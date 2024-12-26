import axios from 'axios';
import { useEffect, useState } from 'react';
import FeaturedArtifact from '../../components/card/FeaturedArtifact';
import { Helmet } from 'react-helmet';

const AllArtifacts = () => {
  const [artifacts, setArtifacts] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_URL}/all-artifacts`)
      .then(res => setArtifacts(res.data));
  }, []);
  return (
    <div className="container mx-auto p-5">
      <Helmet>
        <title>All Artifacts</title>
      </Helmet>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {artifacts.map(artifact => (
          <FeaturedArtifact
            key={artifact._id}
            content={artifact}
          ></FeaturedArtifact>
        ))}
      </div>
    </div>
  );
};

export default AllArtifacts;
