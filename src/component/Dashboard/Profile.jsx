import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);

  const [profile, setProfile] = useState({
    age: "N/A",
    location: "N/A",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ age: "", location: "" });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_SERVER_url}/profile/${user?.email}`);
        const data = await res.json();
        setProfile({
          age: data.age || "N/A",
          location: data.location || "N/A",
        });
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    if (user?.email) fetchProfile();
  }, [user?.email]);

  const handleEditClick = () => {
    setIsEditing(true);
    setFormData({
      age: profile.age === "N/A" ? "" : profile.age,
      location: profile.location === "N/A" ? "" : profile.location,
    });
  };

  const handleCancel = () => {
    setIsEditing(false);
    setFormData({ age: "", location: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch(`${import.meta.env.VITE_SERVER_url}/profile/${user?.email}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      setProfile({
        age: formData.age || "N/A",
        location: formData.location || "N/A",
      });
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6 sm:p-8">
        <div className="flex flex-col items-center text-center">
          <img
            src={user?.photoURL || "https://via.placeholder.com/150"}
            alt="User avatar"
            className="w-24 h-24 rounded-full border shadow mb-4"
          />
          <h2 className="text-2xl font-semibold text-gray-800">{user?.displayName}</h2>
          <p className="text-gray-500 text-sm">{user?.email}</p>
        </div>

        <div className="mt-6 text-gray-700 space-y-2">
          <p><strong>Age:</strong> {profile.age}</p>
          <p><strong>Location:</strong> {profile.location}</p>
        </div>

        {!isEditing ? (
          <div className="mt-6 text-center">
            <button
              onClick={handleEditClick}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Edit Profile
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label className="block font-medium text-gray-700 mb-1">Age</label>
              <input
                type="number"
                name="age"
                min="0"
                value={formData.age}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700 mb-1">Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex justify-between items-center gap-4">
              <button
                type="submit"
                className="flex-1 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
              >
                Save
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className="flex-1 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition"
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Profile;
