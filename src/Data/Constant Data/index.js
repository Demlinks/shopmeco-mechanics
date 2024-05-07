import {
  Booking,
  Dashboard,
  Services,
  Messages,
  Settings,
  Logout,
  DashboardActive,
  MessagesActive,
  ServicesActive,
  BookingActive,
  SettingsActive,
  LogoutActive,
} from "../../assets/images";

// NAVBAR DATA
export const NavbarData = [
  {
    icon: Dashboard,
    iconActive: DashboardActive,
    name: "Dashboard",
    link: "",
    iconActiveLink: "dashboard",
  },
  {
    icon: Services,
    iconActive: ServicesActive,
    name: "Services",
    link: "services",
    iconActiveLink: "services",
  },
  {
    icon: Booking,
    iconActive: BookingActive,
    name: "Booking",
    link: "booking",
    iconActiveLink: "booking",
  },
  {
    icon: Messages,
    iconActive: MessagesActive,
    name: "Messages",
    link: "messages",
    iconActiveLink: "messages",
  },
  {
    icon: Settings,
    iconActive: SettingsActive,
    name: "Settings",
    link: "settings",
    iconActiveLink: "settings",
  },
  {
    icon: Logout,
    iconActive: LogoutActive,
    name: "Log out",
    link: "logout",
    iconActiveLink: "logout",
  },
];

// BOOKING HEADER DATA

export const BookingHeader = [
  { id: 1, name: "Customer name" },
  { id: 2, name: "Service" },
  { id: 3, name: "Booking status" },
  { id: 4, name: "Payment status" },
  { id: 5, name: "Date" },
  { id: 6, name: "Actions" },
];

// DASHBOARD INDEX
// export const DashboardStatsData = [
//   {
//     icon: TotalServices,
//   }
// ]
