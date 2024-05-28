import React, {
  AnchorHTMLAttributes,
  HTMLAttributes,
  PropsWithChildren,
} from "react";

export interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {}

const Tab = ({ children, ...props }: PropsWithChildren<Props>) => {
  return (
    <a
      className="px-2 py-4 text-lg hover:bg-blue-400 hover:text-white rounded-md font-medium select-none cursor-pointer transition-all ease-in-out duration-500"
      {...props}
    >
      {children}
    </a>
  );
};

export default Tab;
