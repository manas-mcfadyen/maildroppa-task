import { HTMLAttributes } from "react";

export interface TableEntryProps {
  idx: number;
  formName: string;
  formId: string;
  status: string;
  type: string;
  viewTotal: FormTotal;
  confirmationTotal: FormTotal;
  conversionRate: FormTotal;
}

export interface FormTotal {
  value: number;
  formattedValue: string;
}

export interface TdProps extends HTMLAttributes<HTMLSpanElement> {
  className?: string;
}

export enum Type {
  default = "DEFAULT",
  popup = "POPUP",
  slider = "SLIDER",
  inline = "INLINE",
}

export enum STATUS {
  active = "ACTIVE",
  inactive = "INACTIVE",
}
