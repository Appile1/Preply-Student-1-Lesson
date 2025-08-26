//import type {User} from "../utils/types";
import {useContext} from "react";
import {TwitterContext} from "../utils/twitterContext.ts";

// type Props = {
//     user:User,
//     changeAvatar: (url:string) => void
// }

const UserAvatar = () => {
    const {user, changeAvatar} = useContext(TwitterContext)
    return (
        <div>
            <img src={user.avatar} alt={user.name} className={'user-avatar'}
            onClick={() => changeAvatar(prompt('Enter new avatar url') as string)}
            />
            </div>
    );
};

export default UserAvatar;