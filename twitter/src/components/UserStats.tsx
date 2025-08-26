import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../store"; // 👈 same here
import { changeName, changeStats } from "../features/twitterSlice";
import UserAvatar from "./UserAvatar";

const UserStats = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { user, stats } = useSelector((state: RootState) => state.twitter);

  return (
    <div className="user-stats">
      <UserAvatar />
      <p
        onClick={() => {
          const name = prompt("Enter new nickname");
          if (name) dispatch(changeName(name));
        }}
      >
        {user.name}
      </p>
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
    </div>
  );
};

export default UserStats;
