import { HttpAdapter } from "@/api";
import { INumberResponse, IViewsPerDayResponse } from "./responses";

export class DashboardService extends HttpAdapter {
  numberProducts = () =>
    this.api.get<INumberResponse>("/sellers/metrics/products/sold");
  availableProducts = () =>
    this.api.get<INumberResponse>("/sellers/metrics/products/available");
  numberVisitors = () =>
    this.api.get<INumberResponse>("/sellers/metrics/views");
  visitorsPerDay = () =>
    this.api.get<IViewsPerDayResponse>("/sellers/metrics/views/days");
}
