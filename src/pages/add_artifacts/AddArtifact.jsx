import { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../provider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';

const AddArtifact = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    image: '',
    type: 'Tools',
    context: '',
    createdAt: '',
    discoveredAt: '',
    discoveredBy: '',
    presentLocation: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const artifactData = {
      ...formData,
      addedByName: user?.displayName || 'Unknown',
      addedByEmail: user?.email || 'Unknown',
      likeCount: 0,
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/artifacts`,
        artifactData
      );
      if (response.data.insertedId) {
        Swal.fire({
          background: '#8D0B41',
          color: '#FFF8E6',
          icon: 'success',
          title: 'Artifact Added!',
          confirmButtonColor: '#D39D55',
          text: 'The artifact has been successfully added to the database.',
        });
        navigate('/all-artifacts');
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Failed to add the artifact. Please try again.',
      });
      console.error(error);
    }
  };

  return (
    <div className="bg-accent">
      <div className="container mx-auto px-5 py-10">
        <Helmet>
          <title>Add Artifacts</title>
        </Helmet>
        <h2 className="text-3xl text-center mb-8">Add a New Artifact</h2>
        <form
          onSubmit={handleSubmit}
          className="max-w-4xl mx-auto bg-tertiary shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
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
              className="btn bg-primary text-accent hover:bg-primary btn-block"
            >
              Add Artifact
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddArtifact;
