"use client";

import { Users } from "lucide-react";
import React from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { useVisitorsPerDay } from "../../data/hooks/useVisitorsPerDay";
import { FilterPerDay } from "../Filter";
import { If } from "@/shared/components/If";

export const Graphs = () => {
  const { data: visitorsPerDay } = useVisitorsPerDay();

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const date = new Date(label);
      return (
        <div className="bg-white p-3 rounded-lg shadow-lg border">
          <p className="text-sm font-medium text-gray-600 mb-2">
            {new Intl.DateTimeFormat("pt-BR", {
              day: "numeric",
              month: "long",
            }).format(date)}
          </p>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <p className="text-sm text-gray-600">
                <span className="font-medium">
                  {payload[0].value.toLocaleString("pt-BR")}
                </span>{" "}
                visitantes
              </p>
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <If condition={!!visitorsPerDay}>
      <div className="flex flex-col gap-4 p-2">
        <div className=" w-full h-10 rounded-lg flex justify-between">
          <p className="text-black font-bold text-lg ml-4">Visitantes</p>
          <FilterPerDay
            fromDate={new Date(visitorsPerDay?.viewsPerDay[0].date)}
            toDate={
              new Date(
                visitorsPerDay?.viewsPerDay[
                  visitorsPerDay?.viewsPerDay.length - 1
                ].date
              )
            }
          />
        </div>

        {visitorsPerDay?.viewsPerDay && (
          <ResponsiveContainer width="100%" height={240} className={"p-1"}>
            <LineChart
              data={visitorsPerDay.viewsPerDay}
              style={{ fontSize: 12 }}
              margin={{ left: -30, top: 10 }}
            >
              <XAxis
                dataKey="date"
                axisLine={false}
                tickLine={false}
                dy={10}
                padding={{ left: 20, right: 20 }}
                tickFormatter={(value) => {
                  return new Intl.DateTimeFormat("pt-BR", {
                    day: "numeric",
                  }).format(new Date(value));
                }}
              />
              <YAxis
                stroke="#888"
                axisLine={false}
                tickLine={false}
                width={80}
              />
              <CartesianGrid
                vertical={false}
                className="stroke-muted"
                strokeDasharray="3 3"
              />
              <Tooltip content={<CustomTooltip />} />
              <Line
                type="monotone"
                dataKey="amount"
                strokeWidth={2}
                stroke={"#009CF0"}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        )}
      </div>
    </If>
  );
};
