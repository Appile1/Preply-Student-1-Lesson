
import UserAvatar from "./UserAvatar.tsx";
import {useContext} from "react";
import {TwitterContext} from "../utils/twitterContext.ts";


const UserStats = () => {
    const {user, stats, changeName, changeStats} = useContext(TwitterContext)
    return (
        <div className={"user-stats"}>
            <UserAvatar/>
            <p
            onClick={() => changeName(prompt("Enter new nickname") as string)}
            >{user.name}</p>
            <div className={"stats"}>
                <div
                onClick={() => changeStats("followers", 1)}
                onContextMenu={(e) => {
                    e.preventDefault();
                    changeStats("followers", -1)
                }}
                >Followers: {stats.followers}</div>
                <div
                    onClick={() => changeStats("subscribers", 1)}
                    onContextMenu={(e) => {
                        e.preventDefault();
                        changeStats("subscribers", -1)
                    }}
                >Subscribers: {stats.subscribers}</div>
            </div>
        </div>
    );
};

export default UserStats;