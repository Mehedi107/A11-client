import axios from 'axios';
import { useEffect, useState } from 'react';
import FeaturedArtifact from '../../components/card/FeaturedArtifactCard';
import { Helmet } from 'react-helmet';

const AllArtifacts = () => {
  const [artifacts, setArtifacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios
      .get(
        `${
          import.meta.env.VITE_SERVER_URL
        }/searched-artifacts?search=${searchTerm}`
      )
      .then(res => setArtifacts(res.data));
  }, [searchTerm]);

  return (
    <div className="bg-tertiary">
      <div className="container mx-auto p-5">
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
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {artifacts.map(artifact => (
            <FeaturedArtifact
              key={artifact._id}
              content={artifact}
            ></FeaturedArtifact>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllArtifacts;
