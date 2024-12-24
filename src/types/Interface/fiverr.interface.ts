export interface IAllFiverrLeadsResponse {
  leads: IIndividualFiverrLead[];
  totalCount: number;
  totalPages: number;
  currentPage: number;
}

export interface IIndividualFiverrLead {
  _id: string;
  username: string;
  sharedProposalLinks: string[];
  user: {
    _id: string;
    name: string;
    createdAt: string;
  };
  status: string;
  remarks: Array<{
    _id: string;
    userId: {
      _id: string;
      name: string;
      createdAt: string;
    };
    comment: string;
    createdAt: string;
  }>;
  createdAt: string;
  updatedAt?: string;
  __v: number;
}

export interface IUpdateFiverrStatusResponse {
  lead: IIndividualFiverrLead | null;
  success: boolean;
}

export interface IAssociatedSharedProposal {
  _id: string;
  platform: string;
  user: {
    _id: string;
    name: string;
    createdAt: string;
  };
  links: Array<string>;
  createdAt: string;
}

export interface ILeadByUsernameResponse {
  lead: IIndividualFiverrLead;
  success: boolean;
}

export type Status =
  | "follow-up"
  | "nudge"
  | "potential"
  | "onboarded"
  | "not-possible"
  | "low-budget"
  | "irrelevant"
  | "non-potential"
  | "new-prospect";

export interface ICreateSharedProposal {
  user: string;
  platform: "fiverr" | "upwork" | null;
  fiverr?: string | null;
  upwork?: string | null;
  links: string[];
}

export interface IUpdateFiverrStatus {
  username: string;
  status: Status;
}

export interface ISharedProposalResponse {
  platform: string;
  upwork: string | null;
  user: string;
  fiverr: string;
  links: Array<string>;
  _id: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
