import { useDispatch } from "react-redux";
import { resetAuthUser } from "../../redux/slices/AuthSlice.ts";

const Logout = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    // Clear global auth state
    dispatch(resetAuthUser());
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
