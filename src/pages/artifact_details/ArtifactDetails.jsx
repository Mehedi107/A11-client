import axios from 'axios';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';

const ArtifactDetails = () => {
  const { id } = useParams();
  const [artifact, setArtifact] = useState(null);
  const [isLiking, setIsLiking] = useState(false);

  // Fetch artifact details from the server
  useEffect(() => {
    const fetchArtifactData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_SERVER_URL}/artifacts/${id}`
        );
        setArtifact(response.data);
      } catch (error) {
        console.error('Error fetching artifact:', error);
      }
    };
    fetchArtifactData();
  }, [id]);

  const handleLike = async () => {
    if (isLiking) return; // Prevent multiple clicks
    setIsLiking(true);

    try {
      const response = await axios.patch(
        `${import.meta.env.VITE_SERVER_URL}/artifacts/${id}/like`
      );
      setArtifact(response.data); // Update the artifact state with the updated data
    } catch (error) {
      console.error('Error updating like count:', error);
    } finally {
      setIsLiking(false); // Reset button state
    }
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
                disabled={isLiking}
                className={`btn bg-primary hover:bg-primary btn-wide text-accent mt-4 ${
                  isLiking ? 'loading' : ''
                }`}
              >
                {isLiking ? 'Liking...' : 'Like'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtifactDetails;
