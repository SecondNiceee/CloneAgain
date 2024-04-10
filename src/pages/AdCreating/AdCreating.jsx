// import React, { useEffect, useState } from 'react';
// import AdCreatingOne from '../../components/AdCreating/AdCreatingOne/AdCreatingOne/AdCreatingOne';
// import AdCreatingTwo from '../../components/AdCreating/ADCreatingTwo/AdCreatingTwo/AddCreatingTwo'
// import cl from './AdCreating.module.css'
// import AdCreatingThree from '../../components/AdCreating/AdCreatingThree/AdCreatingThree';
// import { useLayoutEffect } from 'react';
// const AdCreating = ({setM , M}) => {
//     console.log('Была вызвана фигня');
//     const [taskInformation , setTaskInformation] = useState( {
//         category : 'дизайн',
//         subcategory : 'дизайн сайтов и приложений',
//         taskName : '',
//         taskDescription : '',
//         photos : '',
//         budget : 0,
//         tonValue : 0,
//         taskDate : {start : '' , end : ''},
//     })
//     const [tonConstant , setTonConstant] = useState(0);
//     const [dollarValue , setDollarValue ]= useState(0);

//     async function getCurrencies() {
//         const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
//         const data = await response.json();
//         const result = await data;
//         console.log('Был вызов!!Снижение производительности!')
//         return(result.Valute.USD.Value)
//     }

//     async function getTonPrice() {
//         const response = await fetch('https://api.coingecko.com/api/v3/coins/the-open-network');
//         const data = await response.json();
//         console.log('Был вызов!!Снижение производительности!')
//         return data.market_data.current_price.usd;
//     }
//     function getDollarByRuble(){
//         console.log('Функция была вызывана!!!')
//         getCurrencies().then(dollarPrice => { console.log(dollarPrice)  
//             setDollarValue(dollarPrice)})
//         return null
//     }

//     function getTonByRuble(){
//         getTonPrice().then(tonPrice => { setTonConstant(dollarValue * tonPrice)}) 
//         return null
//     }

//     useEffect( () => {
//          getDollarByRuble()
//         getTonByRuble()
//     } ,  [tonConstant , dollarValue ] )


//     return (
//         <div className= {cl.AdCreating}>
//             <button onClick={(e) => setM(Date.now())} >Поменять</button>
//              <AdCreatingOne taskInformation = {taskInformation}  setTaskInformation = {setTaskInformation} />  
//              {/* <AdCreatingTwo tonConstant = {tonConstant} taskInformation={taskInformation} setTaskInformation={setTaskInformation}/>  */}
//             {/* <AdCreatingThree taskInformation = {taskInformation}/> */}
//         </div>
//     );
// };

// export default AdCreating;