import React from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";

function YandexMap() {
  return (
    <YMaps>
      <Map
        width={"100%"}
        height={300}
        defaultState={{
          center: [55.751574, 37.573856],
          zoom: 10,
        }}
      >
        <Placemark geometry={[55.684758, 37.738521]} />
      </Map>
    </YMaps>
  );
}

export default YandexMap;
