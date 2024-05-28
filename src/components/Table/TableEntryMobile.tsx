import { STATUS, TableEntryProps, TdProps, Type } from "@/types/table";
import React, { HTMLAttributes, PropsWithChildren, useState } from "react";
import TableCard from "./TableCard";
import data from "@/constants/mock.json";

const TableEntryMobile = () => {
  return data.map((props, idx) => <TableCard key={idx} {...props}></TableCard>);
};

export default TableEntryMobile;
