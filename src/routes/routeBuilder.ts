import { PathRouteProps } from "react-router-dom";
import { App } from "App";
import { Routes } from "./routes";

// Route Builder Item Props
export interface RouteBuilderItem extends PathRouteProps {
  Layout?: React.FC<any>; // If you wish to add a layout to the page
  Element: React.FC;
  props?: any;
}

export const RouteBuilder: RouteBuilderItem[] = [
  {
    path: Routes.home,
    Element: App
  },
]