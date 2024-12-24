import { Status } from "./fiverr.interface";

export interface IAllCallsResponse {
  calls: ICall[];
  totalCount: number;
  totalPages: number;
  currentPage: number;
}

export interface ICall {
  _id: string;
  userId: {
    _id: string;
    name: string;
  };
  fiverrId: {
    _id: string;
    username: string;
    status: Status;
    profileId: {
      _id: string;
      name: string;
    };
  } | null;
  upworkId: {
    username: string;
    _id: string;
    profileId: {
      _id: string;
      name: string;
    };
    status: Status;
  } | null;
  feedback: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
