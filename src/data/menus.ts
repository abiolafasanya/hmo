import { Mail, MapPin, PhoneCall } from "lucide-react";

export default {
  navigations: [
    {
      id: 1,
      name: "home",
      url: "#home",
      subMenu: [],
    },
    {
      id: 2,
      name: "About",
      url: "#about",
      subMenu: [],
    },
    {
      id: 3,
      name: "Service",
      url: "#services",
      subMenu: [],
    },
    {
      id: 4,
      name: "Cases",
      url: "/",
      subMenu: [],
    },
    {
      id: 5,
      name: "Blog",
      url: "/",
      subMenu: [],
    },
    {
      id: 6,
      name: "Contact",
      url: "#contact",
      subMenu: [],
    },
  ],

  footerMenus: {
    about: [
      { id: 1, name: "Services", url: "#services" },
      { id: 2, name: "Pricing", url: "#" },
      { id: 3, name: "Blog", url: "#" },
      { id: 4, name: "About Us", url: "#about" },
      { id: 5, name: "Contact Us", url: "#contact" },
    ],
    services: [
      { id: 1, name: "Couple Therapy", url: "#" },
      { id: 2, name: "Family Counselling", url: "#" },
      { id: 3, name: "Anxiety Disorder", url: "#" },
      { id: 4, name: "Personal Meeting", url: "#" },
      { id: 5, name: "Group Therapy", url: "#" },
    ],
    contact: [
      { id: 1, title: "phone", value: "+2349102349812", icon: PhoneCall },
      { id: 2, title: "email", value: "info@healthunit.com", icon: Mail },
      // { id: 3, title: "address", value: "21 King Street Ikeja, 3000, Nigeria", icon: MapPin },
    ],
  },
};
