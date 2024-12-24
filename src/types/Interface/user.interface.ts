export interface IUserResponse {
  users: IUser[];
}

export interface IUser {
  _id: string;
  name: string;
  email: string;
}

export interface IIndividualUser {
  fiverrProfile: Array<{
    _id: string;
    name: string;
  }>;
  _id: string;
  email: string;
  businessProfile: Array<{
    _id: string;
    name: string;
  }>;
  name: string;
}

export interface IAllUsersResponse {
  users: IIndividualUser[];
  totalCount: number;
  totalPages: number;
  currentPage: number;
}
