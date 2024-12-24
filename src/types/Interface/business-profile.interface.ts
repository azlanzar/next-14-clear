export interface IAllBusinessProfileResponse {
  profiles: { _id: string; name: string }[];
  totalCount: number;
  totalPages: number;
  currentPage: number;
}
