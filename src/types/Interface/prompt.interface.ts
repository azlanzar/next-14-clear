import { PromptType } from "../Enum/prompt.enum";

export interface IPromptResponse {
  prompts: {
    _id: string;
    type: PromptType;
    prompt: string;
    model: string;
    businessProfile: { _id: string; name: string };
  }[];
  totalCount: number;
  totalPages: number;
  currentPage: number;
}

export interface ICreatePromptResponse {
  _id: string;
  prompt: string;
  model: string;
  type: PromptType;
}

export interface ICreatePromptPayload {
  prompt: string;
  type: string;
  model: string;
  profileId: string;
}
export interface IUpdatePromptPayload {
  promptId: string;
  prompt: string;
  type: string;
  model: string;
  profileId: string;
}

export interface ICreatePromptForm extends ICreatePromptPayload {
  submit: boolean;
  allBusinessProfiles: {
    profiles: { _id: string; name: string }[];
    totalCount: number;
    totalPages: number;
    currentPage: number;
  };
}
export interface IUpdatePromptForm extends IUpdatePromptPayload {
  submit: boolean;
  allBusinessProfiles: {
    profiles: { _id: string; name: string }[];
    totalCount: number;
    totalPages: number;
    currentPage: number;
  };
}
