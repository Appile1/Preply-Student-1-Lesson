import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../store";
import { changeAvatar } from "../features/twitterSlice";

const UserAvatar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) => state.twitter.user);

  return (
    <div>
      <img
        src={user.avatar}
        alt={user.name}
        className="user-avatar"
        onClick={() => {
          const url = prompt("Enter new avatar url");
          if (url) dispatch(changeAvatar(url));
        }}
      />
    </div>
  );
};

export default UserAvatar;
