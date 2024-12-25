import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ArtifactDetails = () => {
  const { id } = useParams();
  const [artifact, setArtifact] = useState(null);

  useEffect(() => {
    axios(`${import.meta.env.VITE_SERVER_URL}/artifacts/${id}`).then(res =>
      setArtifact(res.data)
    );
  }, [id]);

  return (
    <div className="container p-5 mx-auto">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src={artifact?.image} className="w-96" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{artifact?.name}</h2>
          <p>{artifact?.description}</p>
          <p>Likes: {artifact?.likeCount}</p>
        </div>
      </div>
    </div>
  );
};

export default ArtifactDetails;
