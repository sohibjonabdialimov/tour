import "leaflet/dist/leaflet.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import logoSrc from "@/assets/images/logo_w.png";
import tuit from "@/assets/images/fasl.jpg";
import { BuildingProps } from "@/types";
const buildingList = [
  {
    id: 1,
    name: "O'rnatilgan joy 1",
    value: "Toshkent",
    latitude: 41.3407803,
    longitude: 69.2873812,
    info: {
      name: "Toshkent axborot texnologiyalar universiteti",
      price: 1000000,
      image: tuit,
      url360: "https://tuit.uz/360",
      phone: "+998991234567",
    },
  },
  {
    id: 2,
    name: "O'rnatilgan joy 2",
    value: "Toshkent",
    latitude: 41.3407562,
    longitude: 69.287,
    info: {
      name: "Toshkent axborot texnologiyalar universiteti",
      price: 1000000,
      image: tuit,
      url360: "https://tuit.uz/360",
      phone: "+998991234567",
    },
  },
  {
    id: 3,
    name: "O'rnatilgan joy 3",
    value: "Toshkent",
    latitude: 41.3402,
    longitude: 69.287,
    info: {
      name: "Toshkent axborot texnologiyalar universiteti",
      price: 1000000,
      image: tuit,
      url360: "https://tuit.uz/360",
      phone: "+998991234567",
    },
  },
];

export default function Hotel() {
  const [currentLocation, setCurrentLocation] = useState<BuildingProps>(
    buildingList[0]
  );
  const navigate = useNavigate();
  return (
    <>
      <div style={{ display: "flex", height: "100vh" }}>
        <div className="w-[300px] h-full p-5 bg-[#f8f9fa] rounded-[20px_15px_15px_20px]">
          <div className="flex justify-between items-center mb-5 flex-col h-full">
            <div className="w-full">
              <div
                onClick={() => navigate("/")}
                className="mb-3 flex items-center gap-2 cursor-pointer"
              >
                <img
                  src={logoSrc}
                  alt="TUIT logo"
                  className="w-[4.4rem] h-[4.4rem] object-fit object-center"
                />
                <div>
                  <h3 className="font-medium text-lg">
                    Mehmonxonalar ro'yxati
                  </h3>
                </div>
              </div>
              <h3 className="text-[#555]">Binolar</h3>
              <ul>
                {buildingList?.map((bino, index) => (
                  <li
                    className={
                      currentLocation?.id === bino.id
                        ? "text-blue-600 text-base bg-blue-100 my-3 p-[10px_15px] cursor-pointer rounded-2xl"
                        : "my-3 p-[10px_15px] text-[#444] text-base cursor-pointer rounded-2xl"
                    }
                    key={index}
                    onClick={() => setCurrentLocation(bino)}
                  >
                    <p className="uppercase font-medium">{bino.name}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full">
              <Button onClick={() => navigate("/")} className="w-full mt-10">
                Asosiy sahifaga qaytish
              </Button>
            </div>
          </div>
        </div>

        <MapContainer
          center={[41.3407803, 69.2873812]}
          zoom={100}
          attributionControl={false}
          style={{ flex: 1 }}
          // zoom={16}
          // minZoom={5}
          // maxZoom={20}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {currentLocation && (
            <Marker
              position={[currentLocation.latitude, currentLocation.longitude]}
            >
              <Popup>
                <h1 className="text-sm font-semibold mb-1 uppercase">
                  {currentLocation.name}
                </h1>
                <p className="text-xs text-[#555]">
                  {currentLocation.info.price}
                </p>
                <p className="text-xs text-[#555]">
                  {currentLocation.info.name}
                </p>
                <img
                  src={currentLocation.info.image}
                  alt="Building image"
                  className="w-full rounded-[8px]"
                />
                <p className="text-xs text-[#555]">
                  {currentLocation.info.phone}
                </p>
              </Popup>
            </Marker>
          )}
        </MapContainer>
      </div>
    </>
  );
}
