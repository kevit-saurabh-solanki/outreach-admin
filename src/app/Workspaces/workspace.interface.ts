export interface WorkspaceInterface {
    _id: string;
    name: string;
    description: string;
    createdAt: Date;
}

export interface SendWorkspaceInterface {
    name: string;
    description: string;
}

export interface PaginateWorkspaceInterface {
    data: WorkspaceInterface[]
    total: number;
    page: number;
    totalPages: number;
}