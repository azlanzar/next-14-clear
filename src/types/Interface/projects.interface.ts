export interface IAllProjectsResponse {
  projects: Array<IIndividualProject>;
  totalCount: number;
  totalPages: number;
  currentPage: number;
}

export interface IIndividualProject {
  _id: string;
  description: Array<string>;
  labels: Array<string>;
  technology: Array<string>;
  projectName: string;
  links: Array<string>;
  industry: string;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
}
