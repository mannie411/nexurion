import { createContext } from "react";
import type { SidebarContextProps } from "@/components/ui/sidebar";
import type { AppContextProps } from "@/types";
import type {
  FormFieldContextValue,
  FormItemContextValue,
} from "../components/ui/form";
import type { ChartContextProps } from "../components/ui/chart";

export * from "./Contexts";

export const AppContext = createContext<AppContextProps | undefined>(undefined);
export const SidebarContext = createContext<SidebarContextProps | null>(null);
export const FormFieldContext = createContext<FormFieldContextValue>(
  {} as FormFieldContextValue
);
export const FormItemContext = createContext<FormItemContextValue>(
  {} as FormItemContextValue
);
export const ChartContext = createContext<ChartContextProps | null>(null);
