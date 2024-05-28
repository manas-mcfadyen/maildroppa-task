import { Type } from "@/types/table";

export const getTypeStyles = (type: string) => {
  switch (type) {
    case Type.default:
      return { backgroundColor: "#f3f4f6", color: "#475569" };
    case Type.inline:
      return { backgroundColor: "#f0abfc", color: "#a21caf" };
    case Type.popup:
      return { backgroundColor: "#fca5a5", color: "#ef4444" };
    case Type.slider:
      return { backgroundColor: "#93c5fd", color: "#4f46e5" };
  }
};
