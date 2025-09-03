import { useDispatch } from "react-redux";
import { resetAuthUser } from "../../redux/slices/AuthSlice.ts";

const Logout = () => {
  /**
   * useDispatch:
   * - React-Redux hook that gives us access to the dispatch function.
   * - We use dispatch to send actions to the Redux store.
   * - Here we’ll use it to trigger "resetAuthUser" and clear the auth state.
   */
  const dispatch = useDispatch();

  /**
   * handleLogout:
   * - Event handler for the logout button.
   * - Calls the resetAuthUser() action.
   * - This sets authUser = "" in Redux → meaning no user is logged in.
   */
  const handleLogout = () => {
    // Clear global auth state (Redux)
    dispatch(resetAuthUser());

    // (Optional) You could also redirect the user back to login page here
    // using React Router's useNavigate().
  };

  return (
    <div>
      {/* Button that logs the user out */}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
