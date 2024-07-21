export type UserType = {
    token: string,
    userResult: {
        id: number,
        public_id: string,
        name: string,
        email: string,
        image: string,
    }
}

export type ContactType = {
    id: number,
    public_id: string,
    name: string,
    email: string,
    image: string,
    room: string,
}