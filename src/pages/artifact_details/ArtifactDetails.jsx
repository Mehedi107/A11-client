import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import {
  AuthContext,
  notifyError,
  notifySuccess,
} from '../../provider/AuthProvider';

const ArtifactDetails = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [artifact, setArtifact] = useState(null);
  const [isLiked, setIsLiked] = useState(false);

  // Fetch artifact details from the server
  useEffect(() => {
    const fetchArtifactData = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_SERVER_URL}/artifacts/${id}`
        );
        setArtifact(data);
        setIsLiked(data.likedBy.includes(user.email)); // Check if the user already liked the artifact
      } catch (error) {
        console.error('Error fetching artifact:', error);
      }
    };
    fetchArtifactData();
  }, [id, user.email]);

  const handleLike = () => {
    axios
      .patch(`${import.meta.env.VITE_SERVER_URL}/artifacts/${id}/like`, {
        email: user.email,
      })
      .then(res => {
        setArtifact(res.data);
        setIsLiked(!isLiked); // Toggle the isLiked state
        notifySuccess(
          isLiked ? 'Disliked this artifact!' : 'Liked this artifact!'
        );
      })
      .catch(error => {
        notifyError(error.response?.data?.error || 'Something went wrong!');
      });
  };

  return (
    <div className="bg-tertiary">
      <div className="container p-5 mx-auto">
        <Helmet>
          <title>Artifacts Details</title>
        </Helmet>
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure className="min-w-56 max-w-96">
            <img
              src={artifact?.image}
              alt={artifact?.name || 'Artifact Image'}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{artifact?.name}</h2>
            <p>{artifact?.description || artifact?.context}</p>
            <p>
              <strong>Historical Context:</strong> {artifact?.context}
            </p>
            <p>
              <strong>Created At:</strong> {artifact?.createdAt}
            </p>
            <p>
              <strong>Discovered At:</strong> {artifact?.discoveredAt}
            </p>
            <p>
              <strong>Discovered By:</strong> {artifact?.discoveredBy}
            </p>
            <p>
              <strong>Present Location:</strong> {artifact?.presentLocation}
            </p>
            <p>
              <strong>Added By:</strong> {artifact?.addedByName} (
              {artifact?.addedByEmail})
            </p>
            <div className="flex justify-between items-center">
              <p>
                <strong>Likes:</strong> {artifact?.likeCount}
              </p>
              <button
                onClick={handleLike}
                className={`btn text-lg btn-wide mt-4 ${
                  isLiked
                    ? 'bg-red-500 hover:bg-red-600'
                    : 'bg-primary hover:bg-primary'
                }`}
              >
                {isLiked ? 'Dislike' : 'Like'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtifactDetails;
