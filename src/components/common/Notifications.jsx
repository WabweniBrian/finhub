import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { uiStore } from "../../features/uiSlice";
import { Link } from "react-router-dom";

const Notifications = () => {
  const { isNotificationsOpen } = useSelector(uiStore);
  const notifications = [
    {
      id: 1,
      message: "A payment has been made recently by Jane",
      time: "12 hrs ago",
      user: {
        name: "John",
        avatar: "/images/avatar.png",
      },
    },
    {
      id: 2,
      message: "A payment has been made recently by Jane",
      time: "3 hrs ago",
      link: "/admin/reservations",
      user: {
        name: "Jane",
        avatar: "/images/avatar.png",
      },
    },
    {
      id: 3,
      message: "A payment has been made recently by Jane",
      time: "3 hrs ago",
      link: "/admin/reservations",
      user: {
        name: "Jane",
        avatar: "/images/avatar.png",
      },
    },
  ];
  return (
    <>
      {isNotificationsOpen && (
        <motion.div
          className="dropdown absolute -right-16 z-20 top-full mt-3 p-2 !rounded-xl w-[320px] card"
          initial={{ scale: 0.6, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
        >
          {/*---------------------------------------- Notifications List------------------------------------- */}
          {notifications.length > 0 ? (
            <div>
              {notifications.map((notification) => (
                <div
                  className="flex p-2 space-x-3 border-b dark:border-dark sm:cursor-pointer hover:bg-slate-100 dark:hover:bg-hover-color-dark"
                  key={notification?.id}
                >
                  <div>
                    <img
                      src={notification?.user?.avatar}
                      alt=""
                      className="w-10 rounded-full"
                    />
                  </div>
                  <div>
                    <h1 className="font-bold">{notification?.user?.name}</h1>
                    <p className="text-sm">
                      {notification.message}
                      {notification?.link && (
                        <Link
                          to={notification?.link}
                          className="text-primary hover:underline ml-2"
                        >
                          Check it out
                        </Link>
                      )}
                    </p>
                    <span className="text-sm text-slate-500">
                      {notification?.time}
                    </span>
                  </div>
                </div>
              ))}
              <Link
                to="/notifications"
                className="text-primary hover:underline mt-4 block text-center"
              >
                View all
              </Link>
            </div>
          ) : (
            <div className="flex-center-center py-6 text-center">
              <h1 className="text-2xl font-semibold opacity-50">
                No Notifications
              </h1>
            </div>
          )}
        </motion.div>
      )}
    </>
  );
};

export default Notifications;
