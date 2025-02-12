import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import BtnLiked from '../buttons/BtnLiked';

const FeaturedArtifactCard = ({ content, refetch }) => {
  // console.log(content, refetch);
  return (
    <div className="card rounded-lg card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={content.image} className="h-40 w-full object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{content.name}</h2>
        <p>{content.context.slice(0, 150)}...</p>
        <div className="card-actions justify-between items-center mt-5">
          <BtnLiked item={content} refetch={refetch} />
          <Link
            to={`/artifacts/${content._id}`}
            className="btn bg-primary hover:bg-primary text-accent"
          >
            View details
          </Link>
        </div>
      </div>
    </div>
  );
};

FeaturedArtifactCard.propTypes = {
  content: PropTypes.object,
  refetch: PropTypes.func,
};

export default FeaturedArtifactCard;
