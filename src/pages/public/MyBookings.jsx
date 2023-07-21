import { Tabs as TabWrapper, Tab, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import BookingList from "../../components/home/booking/BookingList";
import Tickets from "../../components/home/booking/Tickets";

const MyBookings = () => {
  return (
    <div className="px-4 max-w-6xl mx-auto mt-28">
      <div className="pt-8">
        <TabWrapper>
          <TabList>
            <Tab>Bookings (2)</Tab>
            <Tab>Tickets</Tab>
          </TabList>
          <TabPanel>
            <BookingList />
          </TabPanel>
          <TabPanel>
            <Tickets />
          </TabPanel>
        </TabWrapper>
      </div>
    </div>
  );
};

export default MyBookings;
