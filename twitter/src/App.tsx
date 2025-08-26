
import './App.css'
import {useState} from "react";
import type {Stats, User} from "./utils/types";
import Nav from "./components/Nav.tsx";
import Body from "./components/Body.tsx";
import {TwitterContext} from "./utils/twitterContext.ts";

function App() {
  const [user, setUser] = useState<User>({
    name: "User",
    avatar: "https://png.pngtree.com/png-clipart/20211121/original/pngtree-funny-avatar-vector-icons-png-png-image_6948004.png"
  });
  const [stats, setStats] = useState<Stats>({
    followers: 0,
    subscribers: 0
  })

  const changeName = (name:string) => {
    setUser({...user, name: name || user.name})
  }
  const changeAvatar = (url:string) => {
    setUser({...user, avatar: url || user.avatar})
  }
const changeStats = (type: keyof Stats, num:number) => {
   // if(type === "followers")
      setStats({...stats, [type]: Math.max(0, stats[type] + num)})
}
  return (
    <>
      <TwitterContext.Provider value={{user, stats, changeAvatar, changeName, changeStats
      }}>
        <Nav/>
        <Body/>
      </TwitterContext.Provider>
    </>
  )
}

export default App
