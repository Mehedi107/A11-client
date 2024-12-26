// import axios from 'axios';
import { CiHeart } from 'react-icons/ci';
import { Link } from 'react-router-dom';

const FeaturedArtifact = ({ content }) => {
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={content.image} className="h-40 w-full object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{content.name}</h2>
        <p>{content.context.slice(0, 150)}...</p>
        <div className="card-actions justify-between items-center mt-5">
          <span className="bg-tertiary font-medium py-3 px-4 rounded-md flex gap-2 justify-center items-center">
            <CiHeart className="text-xl" />
            Likes 0
          </span>
          <Link
            to={`/artifacts/${content._id}`}
            className="btn bg-primary hover:bg-primary text-accent"
          >
            See details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedArtifact;
