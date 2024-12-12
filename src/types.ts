export type Gender = "male" | "female";

export type UserName = {
    title: string;
    first: string;
    last: string;
}

export type Location = {
    city: string;
    country: string;
};

export type UserPicture = {
    large: string;
    medium: string;
    thumbnail: string;
}

export type Login = {
    uuid: string;
    username: string;
}

export type Dob = {
    age: number
}

export type User = {
    gender: Gender;
    name: UserName;
    location: Location;
    login: Login;
    dob: Dob,
    email: string;
    picture: UserPicture;
};

export type UsersState = {
    loading: boolean;
    error: string | null;
    entities: User[] | [];
}

// export type FetchUsersArgs = {
// page: number;
// }