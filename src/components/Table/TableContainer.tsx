import useDevice from "@/utils/hooks/useDevice";
import React, { PropsWithChildren } from "react";
import TableEntryMobile from "./TableEntryMobile";
import { TableEntryProps } from "@/types/table";
import TableEntryDesktop from "./TableEntryDesktop";

export const TableEntryContainer = (
  props: PropsWithChildren<TableEntryProps>
) => {
  const { isMobile } = useDevice();
  return isMobile ? (
    <TableEntryMobile></TableEntryMobile>
  ) : (
    <TableEntryDesktop></TableEntryDesktop>
  );
};
