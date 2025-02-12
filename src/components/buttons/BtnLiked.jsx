import PropTypes from 'prop-types';
import {
  AuthContext,
  notifyError,
  notifySuccess,
} from '../../provider/AuthProvider';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useContext } from 'react';
import { CiHeart } from 'react-icons/ci';

const BtnLiked = ({ refetch, item }) => {
  const { user } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();

  const likeArtifact = async id => {
    try {
      const { data } = await axiosPublic.patch(`/artifacts/${id}/like`, {
        email: user.email,
      });
      if (data.modifiedCount === 1) {
        notifySuccess('You liked the artifact');
        refetch();
      }
    } catch (error) {
      // console.log(error);
      notifyError(error);
    }
  };

  return (
    <button
      onClick={() => likeArtifact(item._id)}
      className="bg-tertiary font-medium py-3 px-4 rounded-md flex gap-2 justify-center items-center"
    >
      <CiHeart className="text-xl" />
      Likes {item?.likeCount}
    </button>
  );
};

BtnLiked.propTypes = {
  refetch: PropTypes.func,
  item: PropTypes.object,
};

export default BtnLiked;
