import { ChangeEvent } from "react";
import { Range } from "react-date-range";
import { ProposalActionType } from "../Enum/proposal.enum";
import { IAllBusinessProfileResponse } from "./business-profile.interface";
import { IAllUsersResponse } from "./user.interface";

export interface IAllProposalResponse {
  proposals: IIndividualProposal[];
  totalCount: number;
  totalPages: number;
  currentPage: number;
}

export interface IIndividualProposal {
  _id: string;
  jobTitle: string;
  jobId: string;
  jobLink: string;
  username?: string;
  status?: string;
  roomIds?: string[];
  sharedProposalLinks: string[];
  userId: { _id: string; email: string; name?: string };
  profileId: { _id: string; name: string };
  isViewed: boolean;
  isGenerated: boolean;
  isClosed: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface IUserProposalAnalytics {
  _id: string;
  proposalsSent: number;
  proposalsViewed: number;
  leadsGenerated: number;
  leadsOnboard: number;
  leadsInitiated: number;
  leadsAssist: number;
  userId: string;
  name: string;
}
export interface IBusinessProposalAnalytics {
  _id: string;
  proposalsSent: number;
  proposalsViewed: number;
  leadsGenerated: number;
  leadsOnboard: number;
  profileId: string;
  profileName: string;
}

export interface IProposalLogsReponse {
  _id: string;
  action: string;
  proposalId: string;
  userId: {
    _id: string;
    name: string;
  };
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface IUpworkLeadsResponse {
  upworkLeads: IUpworkLead[];
  totalCount: number;
  totalPages: number;
  currentPage: number;
}

export interface IUpworkLead {
  _id: string;
  jobTitle: string;
  jobId: string;
  jobLink: string;
  userId: {
    _id: string;
    email: string;
    name: string;
  };
  profileId: {
    _id: string;
    name: string;
  };
  isGenerated: boolean;
  createdAt: string;
  username: string;
}

export interface IAddProposalClientNameResponse {
  _id: string;
  jobTitle: string;
  jobId: string;
  jobLink: string;
  userId: string;
  profileId: string;
  promptId: string;
  isViewed: boolean;
  isGenerated: boolean;
  isClosed: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
  username: string;
  status: string;
}

export interface MetaData {
  currentPage: number;
  limit: number;
  search: string;
  userId: string;
  profileId: string;
  startDate: string;
  endDate: string;
  action: string;
}

export interface UpworkProposalContextType {
  metaData: MetaData;
  data: IAllProposalResponse | undefined;
  upworkLeads: IAllProposalResponse | undefined;
  upworkLeadLoader: boolean;
  users: IAllUsersResponse | undefined;
  profiles: IAllBusinessProfileResponse | undefined;
  dateRange: Range | undefined;
  isLoading: boolean;
  handleNext: () => void;
  handlePrevious: () => void;
  handleRowsPerPageChange: (value: string) => void;
  handleUpdateProposal: (
    id: string,
    type: ProposalActionType,
    value: boolean
  ) => Promise<void>;
  handleUpdateUpworkLead: (
    id: string,
    type: ProposalActionType,
    value: boolean
  ) => Promise<void>;

  handleFilters: (name: string, value: string) => void;
  handleDateRangePicker: (newDateRange: Range) => void;
  applyFilters: () => void;
  clearFilters: () => void;
  handleSearchByJobTitle: (e: ChangeEvent<HTMLInputElement>) => void;
  actionOptions: { label: string; value: string }[];
  formattedProfiles: { label: string; value: string }[] | undefined;
  formattedUsers: { label: string; value: string }[] | undefined;
}

export interface ICreateUpworkProposal {
  jobId: string;
  jobTitle: string;
  jobLink: string;
  userId: string;
  profileId: string;
}
