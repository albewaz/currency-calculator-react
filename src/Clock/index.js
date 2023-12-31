import {Chrono} from "./styled";
import { useCurrentDate } from "./useCurrentDate";

export const Clock = () => {
  const date = useCurrentDate();
  
  return (
    <Chrono>
      Dzisiaj jest{" "}
      {date.toLocaleString(undefined, {
        weekday: "long",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        day: "numeric",
        month: "long",
      })}
    </Chrono>
  );
};

export default Clock;