import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import FeaturedArtifact from '../../components/card/FeaturedArtifact';
import { Helmet } from 'react-helmet';

const LikedArtifacts = () => {
  const { user } = useContext(AuthContext);
  const [myLikedArtifacts, setMyLikedArtifacts] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_URL}/liked-artifact/${user.email}`)
      .then(res => setMyLikedArtifacts(res.data));
  }, [user.email]);
  return (
    <div className="container mx-auto p-5">
      <Helmet>
        <title>My Liked Artifacts</title>
      </Helmet>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {myLikedArtifacts.map(artifact => (
          <FeaturedArtifact
            key={artifact._id}
            content={artifact}
          ></FeaturedArtifact>
        ))}
      </div>
    </div>
  );
};

export default LikedArtifacts;
