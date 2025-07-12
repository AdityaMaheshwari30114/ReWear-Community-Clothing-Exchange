import carpenter from "./imgs/icon_2.png";
import electrician from "./imgs/icon_1.jpg";
import garbagecollector from "./imgs/icon_3.png";
import handyman from "./imgs/icon_4.png";
import maid from "./imgs/icon_5.png";
import plumber from "./imgs/icon_6.png";

const availableServices = [
  {
    id: "1",
    serviceName: "SHIRTS",
    serviceInfo: "formal shirts ",
    serviceImage: maid,
    serviceTime: "5",
  },
  {
    id: "2",
    serviceName: "PANTS",
    serviceInfo: "professional look",
    serviceImage: electrician,
    serviceTime: "15",
  },
  {
    id: "3",
    serviceName: "T-SHIRTS",
    serviceInfo: "funkey look ",
    serviceImage: garbagecollector,
    serviceTime: "5",
  },
  {
    id: "4",
    serviceName: "TROUSERS",
    serviceInfo: "get a good fit ",
    serviceImage: handyman,
    serviceTime: "10",
  },
  {
    id: "5",
    serviceName: "FORMALS",
    serviceInfo: "professional with good experience",
    serviceImage: carpenter,
    serviceTime: "20",
  },
  {
    id: "6",
    serviceName: "CASUALS",
    serviceInfo: "A comfortable one's",
    serviceImage: plumber,
    serviceTime: "2",
  },
];

export default availableServices;
