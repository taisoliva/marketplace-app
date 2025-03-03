"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { CalendarIcon } from "lucide-react";
import React from "react";
import { DateRange } from "react-day-picker";

interface FilterPerDayProps {
  fromDate: Date;
  toDate: Date;
}
export const FilterPerDay = ({ fromDate, toDate }: FilterPerDayProps) => {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: fromDate,
    to: toDate,
  });

  return (
    <div className={"grid gap-2"}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"ghost"}
            className={cn(
              "w-[300px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
            disabled={true}
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
  );
};
