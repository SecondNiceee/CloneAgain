import React, { useEffect, useMemo, useState } from "react";
import FirstTop from "../../components/First/FirstMain/FirstTop";
import FirstMain from "../../components/First/FirstMain/FirstMain";
import axios from "axios";
import FirstDetails from '../../components/First/FirstDetails/FirstDetails'
import { useFilteredArr } from "../../hooks/useFilteredArr";
import { Transition } from 'react-transition-group'

const First = ( {setMenuActive , isMenuActive} ) => {
  const [ordersInformation, setOrderInformation] = useState([
    {
      title: "UX/UI-дизайнер для разработки прототипа интернет-магазина",
      executionPlace: "Можно выполнить удаленно",
      startTime: "Начать 28 февраля, 00:00",
      tonPrice: "261 TON",
      rublesPrice: "52 200 RUB",
      fullDescription : "Необходимо разработать логотип для магазина! Пример стиля, и пример лого, от которого отталкиваться - предоставлю.",
      dedline : "Воскресенье, 10 марта 2024 23:59",
      rate : '5',
      customerName : 'YourName',
      isActive : true,
      creationTime : 'Создано когда-то , ..timing',
      viewsNumber : '51'
    },
    {
      title: "UX/UI-дизайнер для разработки прототипа интернет-магазина",
      executionPlace: "Можно выполнить удаленно",
      startTime: "Начать 28 февраля, 00:00",
      tonPrice: "261 TON",
      rublesPrice: "52 200 RUB",
      fullDescription : "Необходимо разработать логотип для магазина! Пример стиля, и пример лого, от которого отталкиваться - предоставлю.",
      dedline : "Воскресенье, 10 марта 2024 23:59",
      rate : '5',
      customerName : 'YourName',
      isActive : true,
      creationTime : 'Создано когда-то , ..timing',
      viewsNumber : '51'
    },
    {
      title: "UX/UI-дизайнер для разработки прототипа интернет-магазина",
      executionPlace: "Можно выполнить удаленно",
      startTime: "Начать 28 февраля, 00:00",
      tonPrice: "261 TON",
      rublesPrice: "52 200 RUB",
      fullDescription : "Необходимо разработать логотип для магазина! Пример стиля, и пример лого, от которого отталкиваться - предоставлю.",
      dedline : "Воскресенье, 10 марта 2024 23:59",
      rate : '5',
      customerName : 'YourName',
      isActive : true,
      creationTime : 'Создано когда-то , ..timing',
      viewsNumber : '51'
    },
  ]);


  


  

  // const [isMenuActive, setMenuActive] = useState(false);

  const [filterBy, setFilterBy] = useState("");

  const filteredArr = useFilteredArr(ordersInformation , filterBy)

  const [isDetailsActive, setDetailsActive] = useState(false);
  return (
    <div className="First" onClick={() => { if(isMenuActive){setMenuActive(false) }   }}>
       <FirstTop setMenuActive={setMenuActive} setFilterBy = {setFilterBy} />

      <FirstMain setDetailsActive = {setDetailsActive} ordersInformation = {filteredArr}  />

      {/* <FirstMenu isMenuActive={isMenuActive} setMenuActive={setMenuActive} /> */}
      <Transition
              in = {isDetailsActive}
              timeout = {0}
              mountOnEnter
              unmountOnExit
      >
        {state => <FirstDetails state = {state} isDetailsActive = {isDetailsActive} orderInformation = {ordersInformation[0]} similarAds = {ordersInformation}  />}
        
      </Transition>

    </div>
  );


};

export default First;
