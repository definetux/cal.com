import dayjs from "@calcom/dayjs";

export const HorizontalLines = ({ hours }: { hours: dayjs.Dayjs[] }) => {
  const finalHour = hours[hours.length - 1].add(1, "hour").format("h A");

  return (
    <div
      className="col-start-1 col-end-2 row-start-1 grid divide-y divide-gray-100"
      style={{ gridTemplateRows: `repeat(${hours.length}, minmax(3.5rem, 1fr))` }}>
      <div className="row-end-1 h-7" />
      {hours.map((hour) => (
        <>
          <div key={hour.toString()}>
            <div className="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
              {hour.format("h A")}
            </div>
          </div>
        </>
      ))}
      <div key={finalHour}>
        <div className="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
          {finalHour}
        </div>
      </div>
    </div>
  );
};
