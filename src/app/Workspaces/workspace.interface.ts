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