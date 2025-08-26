export type User = {
    name: string,
    avatar: string
}

export type Stats = Record<string, number>

export type PropsBody = {
    user:User,
    stats: Stats,
    changeAvatar: (url: string) => void,
    changeName: (name:string) => void
}

export type ContextValue = {
    user:User,
    stats: Stats,
    changeAvatar: (url: string) => void,
    changeName: (name:string) => void,
    changeStats: (type:string, num: number) => void
}