export interface UserType {
    token: string,
    userResult: {
        id: number,
        public_id: string,
        name: string,
        email: string,
        image: string,
    }
}