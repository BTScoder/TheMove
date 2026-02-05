import { motion } from "framer-motion";
const Meetings = () => {
  const meetings = [
    {
      day: "Monday",
      sessions: [
        {
          name: "Morning Prayers",
          time: "6am - 7am",
        },
        {
          name: "Afternoon Prayers",
          time: "12noon - 1pm",
        },
        {
          name: "Evening Prayers",
          time: "8pm - 10pm",
        },
      ],
    },
    {
      day: "Tuesday",
      sessions: [
        {
          name: "Morning Prayers",
          time: "6am - 7am",
        },
        {
          name: "Afternoon Prayers",
          time: "12noon - 1pm",
        },
      ],
    },
    {
      day: "Wednesday",
      sessions: [
        {
          name: "Morning Prayers",
          time: "6am",
        },
        {
          name: "Afternoon Prayers",
          time: "12noon",
        },
        {
          name: "Evening Prayers",
          time: "9pm - 10pm",
        },
      ],
    },
    {
      day: "Thursday",
      sessions: [
        {
          name: "Morning Prayers",
          time: "6am - 7am",
        },
        {
          name: "Afternoon Prayers",
          time: "12noon - 1pm",
        },
        {
          name: "Evening Prayers",
          time: "9pm - 10pm",
        },
      ],
    },
    {
      day: "Friday",
      sessions: [
        {
          name: "Morning Prayers",
          time: "6am - 7am",
        },
        {
          name: "Afternoon Prayers",
          time: "12noon - 1pm",
        },
        {
          name: "Evening Prayers Stretch",
          time: "8pm - 11pm",
        },
      ],
    },
    {
      day: "Saturday",
      sessions: [
        {
          name: "Morning Prayers",
          time: "6am - 7am",
        },
        {
          name: "Afternoon Prayers",
          time: "12noon - 1pm",
        },
      ],
    },
    {
      day: "Sunday",
      sessions: [
        {
          name: "Morning Prayers",
          time: "6am - 6:30am",
        },
        {
          name: "Afternoon Prayers",
          time: "12noon - 1pm",
        },
        {
          name: "Evening Prayers",
          time: "8pm - 9pm",
        },
      ],
    },
  ];
  return (
    <>
      <motion.section
        className="mt-16 px-5 lg:mt-30"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-10">
          <h2 className="font-heading text-4xl uppercase md:text-4xl">
            Committed to your spiritual growth
          </h2>
          <p className="my-3 text-sm font-light uppercase md:text-base">
            Here is a list of our weekly online meetings{" "}
          </p>
        </div>
        <div className="max-h-[90vh] w-full overflow-auto rounded-2xl bg-amber-900/10 p-5 md:p-10">
          {/* Mobile View - Card Layout */}
          <div className="mt-6 space-y-4 md:hidden">
            {meetings.map((meet) => (
              <motion.div
                key={meet.day}
                className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="border-b border-gray-200 bg-amber-900/20 px-4 py-3">
                  <h3 className="font-heading text-lg font-semibold text-black uppercase">
                    {meet.day}
                  </h3>
                </div>
                <div className="divide-y divide-gray-200">
                  {meet.sessions.map((session, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between px-4 py-3"
                    >
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">
                          {session.name}
                        </p>
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-semibold text-amber-900">
                          {session.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Desktop View - Table Layout */}
          <div className="mt-10 hidden overflow-x-auto rounded-xl md:block">
            <table className="min-w-full border-collapse bg-white">
              <thead className="bg-gray-50">
                <tr>
                  <th className="font-heading border-b-2 border-gray-200 px-6 py-3 text-left text-sm text-gray-500 uppercase">
                    Day
                  </th>
                  <th className="font-heading border-b-2 border-gray-200 px-6 py-3 text-left text-sm text-gray-500 uppercase">
                    Meetings
                  </th>
                  <th className="font-heading border-b-2 border-gray-200 px-6 py-3 text-left text-sm text-gray-500 uppercase">
                    Time
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                {meetings.map((meet) => (
                  <tr
                    key={meet.day}
                    className="transition-colors hover:bg-gray-50"
                  >
                    <td className="px-6 py-4 align-top font-semibold text-black uppercase">
                      {meet.day}
                    </td>
                    <td className="py-4 text-gray-700">
                      {meet.sessions.map((session, index) => (
                        <p
                          key={index}
                          className={`px-6 py-3 ${
                            index < meet.sessions.length - 1
                              ? "border-b border-gray-100"
                              : ""
                          }`}
                        >
                          {session.name}
                        </p>
                      ))}
                    </td>
                    <td className="py-4 font-medium text-amber-900">
                      {meet.sessions.map((session, index) => (
                        <p
                          key={index}
                          className={`px-6 py-3 ${
                            index < meet.sessions.length - 1
                              ? "border-b border-gray-100"
                              : ""
                          }`}
                        >
                          {session.time}
                        </p>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Meetings;
