import { STATUS, TableEntryProps, TdProps, Type } from "@/types/table";
import { getTypeStyles } from "@/utils/common";
import Image from "next/image";
import React, { HTMLAttributes, PropsWithChildren, useState } from "react";

const TableEntry = ({
  formName,
  viewTotal,
  confirmationTotal,
  conversionRate,
  type,
  status,
}: PropsWithChildren<TableEntryProps>) => {
  const Td: React.FC<PropsWithChildren<TdProps>> = ({
    children,
    className,
    ...props
  }) => {
    return (
      <span
        className={
          `  flex py-2 my-3 px-2 justify-center w-full border-b border-gray-200` +
          className
        }
        style={{
          backgroundColor: formStatus === STATUS.active ? "" : "#f1f5f9",
          color: formStatus === STATUS.active ? "" : "#9ca3af",
        }}
        {...props}
      >
        {children}
      </span>
    );
  };

  const typeStyles = getTypeStyles(type);
  const [showModal, setShowmodal] = useState(false);
  const [formStatus, setStatus] = useState(status);
  const handleDeactivate = () => {
    setShowmodal(false);
    setStatus(formStatus === STATUS.active ? STATUS.inactive : STATUS.active);
  };

  return (
    <>
      <Td>
        <span className={" w-fit rounded-md p-2 px-4"} style={typeStyles}>
          {type}
        </span>
      </Td>
      <Td className="font-medium">{formName}</Td>
      <Td>{viewTotal?.formattedValue}</Td>
      <Td>{confirmationTotal?.formattedValue}</Td>
      <Td>{conversionRate?.formattedValue}</Td>
      <Td className=" relative cursor-pointer ">
        <Image
          src="/option.svg"
          width={24}
          height={24}
          alt="option"
          className="size-6 self-center hover:animate-pulse"
          onClick={() => setShowmodal(!showModal)}
        ></Image>
        {showModal && (
          <div
            onClick={handleDeactivate}
            className="bg-white text-black absolute p-5 text-md right-[-4.5rem] border-[1px] border-gray-400 rounded-md"
          >
            <span>
              {formStatus === STATUS.active ? "Deactivate" : "Activate"}
            </span>
          </div>
        )}
      </Td>
    </>
  );
};

export default TableEntry;
