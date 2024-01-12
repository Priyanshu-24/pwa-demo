const MyBooking = () => {
  return (
    <div className="p-5">
      <h1 className="text-2xl mb-4 font-semibold">My Bookings</h1>
      {JSON.parse(localStorage?.getItem("bookings"))?.length > 0 ? (
        <div>
          {JSON.parse(localStorage?.getItem("bookings")).map((item) => {
            return (
              <div
                key={item.sm}
                className="border border-black rounded-lg p-2 mb-4 text-md font-semibold"
              >
                <div>Equipment : {item?.equipment}</div>
                <div>Branch : {item?.sm}</div>
                <div>Start Time : {item?.startDate?.replace("T", " ")}</div>
                <div>End Time : {item?.endDate.replace("T", " ")}</div>
              </div>
            );
          })}
        </div>
      ) : (
        <div>No Previous Booking Found!</div>
      )}
    </div>
  );
};

export default MyBooking;
