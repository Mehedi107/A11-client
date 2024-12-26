// import axios from 'axios';
import { CiHeart } from 'react-icons/ci';
import { Link } from 'react-router-dom';

const FeaturedArtifact = ({ content }) => {
  // const handleSeeDetails = id => {
  //   console.log(id);

  //   axios.get(`${import.meta.env.VITE_SERVER_URL}/artifacts/${id}`)
  //   .then(res => console.log(res))
  // };
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={content.image} className="h-40 w-full object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{content.name}</h2>
        <p>{content.description || content.context}</p>
        <div className="card-actions justify-between items-center mt-5">
          <button className="bg-base-200 py-3 px-4 rounded-md flex gap-2 justify-center items-center">
            <CiHeart className="text-xl" />
            Likes 0
          </button>
          <Link to={`/artifacts/${content._id}`} className="btn btn-primary">
            See details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedArtifact;
