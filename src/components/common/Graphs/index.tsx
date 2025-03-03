"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
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
import { addDays, format } from "date-fns";
import colors from "tailwindcss/colors";
import { DateRange } from "react-day-picker";
import { ptBR } from "date-fns/locale";

export const Graphs = () => {
  const data = [
    {
      date: "10/12",
      revenue: 1200,
    },
    {
      date: "11/12",
      revenue: 800,
    },
    {
      date: "12/12",
      revenue: 800,
    },
    {
      date: "13/12",
      revenue: 5000,
    },
    {
      date: "14/12",
      revenue: 100,
    },
  ];

  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  });

  return (
    <div className="flex flex-col gap-4 p-2">
      <div className=" w-full h-10 rounded-lg flex justify-between">
        <p className="text-black font-bold text-lg ml-4">Visitantes</p>
        <div className={cn("grid gap-2")}>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                id="date"
                variant={"ghost"}
                className={cn(
                  "w-[300px] justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="text-[#009CF0]" />
                {date?.from ? (
                  date.to ? (
                    <>
                      {format(date.from, "dd 'de' LLLL", {
                        locale: ptBR,
                      })}{" "}
                      -{" "}
                      {format(date.to, "dd 'de' LLLL", {
                        locale: ptBR,
                      })}
                    </>
                  ) : (
                    format(date.from, "dd 'de' LLLL", {
                      locale: ptBR,
                    })
                  )
                ) : (
                  <span>Escolha o período</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                initialFocus
                mode="range"
                defaultMonth={date?.from}
                selected={date}
                onSelect={setDate}
                numberOfMonths={2}
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={240} className={"p-1"}>
        <LineChart data={data} style={{ fontSize: 12 }} margin={{ left: -30 }}>
          <XAxis
            dataKey="date"
            axisLine={false}
            tickLine={false}
            dy={10}
            padding={{ left: 20, right: 20 }}
          />
          <YAxis stroke="#888" axisLine={false} tickLine={false} width={80} />
          <CartesianGrid
            vertical={false}
            className="stroke-muted"
            strokeDasharray="3 3"
          />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="revenue"
            strokeWidth={2}
            stroke={"#009CF0"}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
