import React, { PropsWithChildren } from "react";
import data from "@/constants/mock.json";
import TableEntry from "@/components/Table/TableEntry";
const TableEntryDesktop = () => {
  const TableHeaderUI = ({ children, ...props }: PropsWithChildren) => {
    return (
      <span
        className="text-lg font-medium bg-gray-100 p-2 text-center min-w-fit text-clip"
        {...props}
      >
        {children}
      </span>
    );
  };

  return (
    <div className="grid my-10 grid-cols-6 w-max select-none">
      <>
        <TableHeaderUI>Type</TableHeaderUI>
        <TableHeaderUI>Name</TableHeaderUI>
        <TableHeaderUI>Views</TableHeaderUI>
        <TableHeaderUI>Confirmations</TableHeaderUI>
        <TableHeaderUI>Conversions</TableHeaderUI>
        <TableHeaderUI>Options</TableHeaderUI>
      </>
      {data.map((props, idx) => (
        <TableEntry idx={idx} {...props}></TableEntry>
      ))}
    </div>
  );
};

export default TableEntryDesktop;
