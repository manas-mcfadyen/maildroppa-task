import { STATUS, TableEntryProps, TdProps } from "@/types/table";
import { getTypeStyles } from "@/utils/common";
import Image from "next/image";
import React, { PropsWithChildren, useState } from "react";

const TableCard = ({
  formName,
  viewTotal,
  confirmationTotal,
  conversionRate,
  type,
  status,
}: PropsWithChildren<TableEntryProps>) => {
  const typeStyles = getTypeStyles(type);
  const [showModal, setShowmodal] = useState(false);
  const [formStatus, setStatus] = useState(status);
  const handleDeactivate = () => {
    setShowmodal(false);
    setStatus(formStatus === STATUS.active ? STATUS.inactive : STATUS.active);
  };

  const Td: React.FC<PropsWithChildren<TdProps>> = ({
    children,
    className,
    ...props
  }) => {
    return (
      <span
        className={`  flex py-5 px-2 justify-center w-full ` + className}
        {...props}
      >
        {children}
      </span>
    );
  };

  const Thead: React.FC<PropsWithChildren> = ({ children }) => {
    return <Td className="bg-gray-200  h-full">{children}</Td>;
  };
  return (
    <div
      className="grid grid-cols-2 my-5  items-center text-center border-[1px] border-gray-400 rounded-md"
      style={{
        backgroundColor: formStatus === STATUS.active ? "" : "#f1f5f9",
        color: formStatus === STATUS.active ? "" : "#9ca3af",
      }}
    >
      <Thead>Type</Thead>
      <Td style={typeStyles}>{type}</Td>
      <Thead>Name</Thead>
      <Td className="font-medium">{formName}</Td>
      <Thead>Views</Thead>
      <Td>{viewTotal.formattedValue}</Td>
      <Thead>Confirmations</Thead>
      <Td>{confirmationTotal.formattedValue}</Td>
      <Thead>Conversions</Thead>
      <Td>{conversionRate.formattedValue}</Td>
      <Thead>Options</Thead>
      <Td>
        <Image
          src="/option.svg"
          width={24}
          height={24}
          alt="option"
          className="size-6 self-center hover:animate-pulse"
          onClick={() => setShowmodal(!showModal)}
        ></Image>{" "}
        {showModal && (
          <div
            onClick={handleDeactivate}
            className="bg-white text-black absolute p-3 text-md right-[-0.1rem] border-[1px] border-gray-400 rounded-md"
          >
            <span>
              {formStatus === STATUS.active ? "Deactivate" : "Activate"}
            </span>
          </div>
        )}
      </Td>
    </div>
  );
};

export default TableCard;
