import carpenter from "../components/AvailableServices/images/carpenter.png";
import electrician from "../components/AvailableServices/images/electrician.png";
import garbagecollector from "../components/AvailableServices/images/garbagecollector.png";
import handyman from "../components/AvailableServices/images/handyman.png";
import maid from "../components/AvailableServices/images/maid.png";
import plumber from "../components/AvailableServices/images/plumber.png";

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
