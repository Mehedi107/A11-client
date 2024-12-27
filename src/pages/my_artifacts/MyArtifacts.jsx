import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const MyArtifacts = () => {
  const { user } = useContext(AuthContext);
  const [myArtifacts, setMyArtifacts] = useState([]);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    artifactId: '',
    name: '',
    image: '',
    type: 'Tools',
    createdAt: '',
    context: '',
    discoveredAt: '',
    discoveredBy: '',
    presentLocation: '',
  });

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_URL}/my-artifact/${user.email}`, {
        withCredentials: true,
      })
      .then(res => setMyArtifacts(res.data));
  }, [user.email]);

  const updateData = id => {
    const clickedArtifact = myArtifacts.find(artifact => artifact._id === id);

    // Set form fields with clickedArtifact data
    setFormData({
      artifactId: clickedArtifact._id,
      name: clickedArtifact.name,
      image: clickedArtifact.image,
      type: clickedArtifact.type,
      createdAt: clickedArtifact.createdAt,
      context: clickedArtifact.context,
      discoveredAt: clickedArtifact.discoveredAt,
      discoveredBy: clickedArtifact.discoveredBy,
      presentLocation: clickedArtifact.presentLocation,
    });

    document.getElementById('my_modal_1').showModal();
  };

  const handleSubmit = e => {
    e.preventDefault();
    // console.log(formData);

    axios
      .put(`${import.meta.env.VITE_SERVER_URL}/artifacts`, formData)
      .then(res => {
        // console.log(res);
        // close modal
        document.getElementById('my_modal_1').close();

        // Optimistic UI update
        setMyArtifacts(prevArtifacts =>
          prevArtifacts.map(artifact =>
            artifact._id === formData.artifactId
              ? { ...artifact, ...formData }
              : artifact
          )
        );

        // show sweet alert
        Swal.fire({
          title: 'Information Updated!',
          background: '#8D0B41',
          color: '#FFF8E6',
          confirmButtonColor: '#D39D55',
          // text: 'Your file has been deleted.',
          icon: 'success',
        });
      });
  };

  const handleDelete = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      background: '#8D0B41',
      color: '#FFF8E6',
      showCancelButton: true,
      confirmButtonColor: '#5CB338',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        axios
          .delete(`${import.meta.env.VITE_SERVER_URL}/artifacts/${id}`)
          .then(res => {
            // console.log(res);

            // Update the UI by removing the deleted artifact from the state
            setMyArtifacts(prevArtifacts =>
              prevArtifacts.filter(artifact => artifact._id !== id)
            );

            Swal.fire({
              title: 'Deleted!',
              text: 'Your file has been deleted.',
              icon: 'success',
              background: '#8D0B41',
              color: '#FFF8E6',
              confirmButtonColor: '#D39D55',
            });

            navigate('/all-artifacts');
          })
          .catch(err => {
            console.error('Error deleting artifact:', err);
            Swal.fire({
              title: 'Error!',
              text: 'There was an issue deleting the artifact.',
              icon: 'error',
            });
          });
      }
    });
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // console.log(myArtifacts);

  return (
    <div className="bg-accent">
      <div className="container mx-auto p-5">
        <Helmet>
          <title>My Artifacts</title>
        </Helmet>
        {myArtifacts.length === 0 ? (
          <div className="h-[calc(100vh-76px-220px)] flex justify-center items-center col-span-3">
            <p className="text-center  text-3xl ">
              Currently you have no Artifacts
            </p>
          </div>
        ) : (
          ''
        )}
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {myArtifacts.map(artifact => (
            <div
              key={artifact._id}
              className="card card-compact bg-base-100 shadow-xl"
            >
              <figure>
                <img
                  src={artifact.image}
                  className="h-40 w-full object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{artifact.name}</h2>
                <p>{artifact.context.slice(0, 150)}...</p>
                <div className="card-actions justify-between items-center mt-5">
                  <button
                    onClick={() => updateData(artifact._id)}
                    className="btn btn-success text-white"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(artifact._id)}
                    className="btn btn-error text-white"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Modal form */}
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box w-11/12 max-w-5xl bg-tertiary">
              <h2 className="text-center text-2xl mb-5">
                Update Artifact Data
              </h2>
              <form onSubmit={handleSubmit} className="px-8 pt-6 pb-8 mb-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Artifact Name */}
                  <div>
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="name"
                    >
                      Artifact Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Artifact Name"
                      className="input input-bordered w-full"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Artifact Image */}
                  <div>
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="image"
                    >
                      Artifact Image (URL)
                    </label>
                    <input
                      type="url"
                      id="image"
                      name="image"
                      placeholder="Valid Image URL"
                      className="input input-bordered w-full"
                      value={formData.image}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Artifact Type */}
                  <div>
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="type"
                    >
                      Artifact Type
                    </label>
                    <select
                      id="type"
                      name="type"
                      className="select select-bordered w-full"
                      value={formData.type}
                      onChange={handleChange}
                    >
                      <option>Tools</option>
                      <option>Weapons</option>
                      <option>Documents</option>
                      <option>Writings</option>
                    </select>
                  </div>

                  {/* Created At */}
                  <div>
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="createdAt"
                    >
                      Created At
                    </label>
                    <input
                      type="text"
                      id="createdAt"
                      name="createdAt"
                      placeholder="e.g., 100 BC"
                      className="input input-bordered w-full"
                      value={formData.createdAt}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Historical Context */}
                  <div className="lg:col-span-2">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="context"
                    >
                      Historical Context
                    </label>
                    <textarea
                      id="context"
                      name="context"
                      placeholder="Describe the historical significance..."
                      className="textarea textarea-bordered w-full"
                      value={formData.context}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  {/* Discovered At */}
                  <div>
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="discoveredAt"
                    >
                      Discovered At
                    </label>
                    <input
                      type="text"
                      id="discoveredAt"
                      name="discoveredAt"
                      placeholder="e.g., 1799"
                      className="input input-bordered w-full"
                      value={formData.discoveredAt}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Discovered By */}
                  <div>
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="discoveredBy"
                    >
                      Discovered By
                    </label>
                    <input
                      type="text"
                      id="discoveredBy"
                      name="discoveredBy"
                      placeholder="Discoverer's Name"
                      className="input input-bordered w-full"
                      value={formData.discoveredBy}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Present Location */}
                  <div className="lg:col-span-2">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="presentLocation"
                    >
                      Present Location
                    </label>
                    <input
                      type="text"
                      id="presentLocation"
                      name="presentLocation"
                      placeholder="Current Location"
                      className="input input-bordered w-full"
                      value={formData.presentLocation}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Logged-in User Info */}
                  <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Added By
                    </label>
                    <input
                      type="text"
                      value={user?.displayName || 'Anonymous'}
                      className="input input-bordered w-full bg-gray-100"
                      readOnly
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={user?.email || 'Anonymous'}
                      className="input input-bordered w-full bg-gray-100"
                      readOnly
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="mt-6">
                  <button
                    type="submit"
                    className="btn bg-primary hover:bg-primary text-accent w-full"
                  >
                    Update Artifact
                  </button>
                </div>
              </form>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default MyArtifacts;
