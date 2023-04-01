import { Box } from "@mui/material";
import { DateCalendarProps } from "@mui/x-date-pickers/DateCalendar";
import dayjs, { Dayjs } from "dayjs";
import { CaretLeft, CaretRight } from "phosphor-react";
import { useEffect, useId } from "react";
import ReactCalendar from "react-calendar";
import classes from "./_.module.scss";
import "react-calendar/dist/Calendar.css";

interface ICalendarProps {
  events?: {
    date: string;
    color: "info" | "primary" | "danger" | "success" | "warning";
  }[];
}
const Calendar: React.FC<ICalendarProps> = ({ events }) => {
  const id = useId();
  const listEvents = new Map();

  useEffect(() => {
    events?.forEach((event) => {
      listEvents.set(event.date, event.color);
    });
  }, [events]);

  return (
    <Box id={id} className={classes.Box}>
      <ReactCalendar
        className={classes.ReactCalendar}
        prevLabel={<CaretLeft size={22} weight="bold" />}
        nextLabel={<CaretRight size={22} weight="bold" />}
        formatShortWeekday={(_, date) =>
          [`Su`, `Mo`, `Tu`, `We`, `Th`, `Fr`, `Sat`][date.getDay()]
        }
        tileContent={(content) => {
          let date = dayjs(content.date).format("DD-MM-YYYY");
          const color = listEvents.get(date);
          return (
            <>
              <div className={`event ${color || "default"}`}></div>
            </>
          );
        }}
      />
    </Box>
  );
};

export default Calendar;