export interface UsersInterface {
    _id: string;
    email: string;
    password: string;
    role: string;
    workspaceId: {
        _id: string,
        name: string,
        description: string
    }[];
}

export interface SendUsersInterface {
    email: string;
    password: string;
    role: string;
    workspaceId: string;
}

export interface PaginateUserInterface {
    data: UsersInterface[],
    total: number;
    page: number;
    totalPages: number;
}