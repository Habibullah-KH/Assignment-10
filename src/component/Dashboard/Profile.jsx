import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="max-w-md mx-auto bg-white shadow p-5 rounded">
      <img src={user?.photoURL} className="w-24 h-24 rounded-full mx-auto" />
      <h2 className="text-center mt-4 text-xl text-black font-bold">{user?.displayName}</h2>
      <p className="text-center text-black">{user?.email}</p>
    </div>
  );
};

export default Profile;
