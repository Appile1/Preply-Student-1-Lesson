import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../store";
import {
  changeName,
  changeStats,
  fetchRandomUser,
} from "../features/twitterSlice"; // 👈 add fetchRandomUser
import UserAvatar from "./UserAvatar";

const UserStats = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { user, stats, loading, error } = useSelector(
    (state: RootState) => state.twitter
  );

  return (
    <div className="user-stats">
      <UserAvatar />

      {/* Name edit on click */}
      <p
        onClick={() => {
          const name = prompt("Enter new nickname");
          if (name) dispatch(changeName(name));
        }}
      >
        {user.name}
      </p>

      {/* Stats */}
      <div className="stats">
        <div
          onClick={() => dispatch(changeStats({ type: "followers", num: 1 }))}
          onContextMenu={(e) => {
            e.preventDefault();
            dispatch(changeStats({ type: "followers", num: -1 }));
          }}
        >
          Followers: {stats.followers}
        </div>
        <div
          onClick={() => dispatch(changeStats({ type: "subscribers", num: 1 }))}
          onContextMenu={(e) => {
            e.preventDefault();
            dispatch(changeStats({ type: "subscribers", num: -1 }));
          }}
        >
          Subscribers: {stats.subscribers}
        </div>
      </div>

      {/* Fetch random user button */}
      <button
        onClick={() => dispatch(fetchRandomUser())}
        disabled={loading}
        style={{ marginTop: "10px" }}
      >
        {loading ? "Loading..." : "Fetch Random User"}
      </button>

      {error && <p style={{ color: "red" }}>Error: {error}</p>}
    </div>
  );
};

export default UserStats;
