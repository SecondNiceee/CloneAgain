import React, { useState } from "react";
import cl from './AdCreatingOne.module.css'
import Cap from '../../../components/UI/Cap/Cap'
import Categories from "../Categories/Categories";
import TaskName from "../TaskName/TaskName";
import DescriptionAndPhoto from "../DescriptionAndPhoto/DescriptionAndPhoto";
import MakePrivate from "../MakePrivate/MakePrivate";
import ChoiceCategory from "../ChoiceCategory/ChoiceCategory";
import {CSSTransition} from 'react-transition-group';
import ChoiceSubCategory from "../ChoiceSubCategory";
import cicle from '../../../images/icons/Circle.svg';
import {useLocation} from 'react-router-dom'
const AdCreatingOne = ( {taskInformation ,setTaskInformation }) => {
  const location = useLocation()
  const [isCategoryChoiceOpen , setCatagoryChoiceOpen] = useState(false)
  const [isSubcategoryChoiceOpen , setSubcategoryChoiceOpen] = useState(false)
  console.log(isSubcategoryChoiceOpen)
  return (
    <CSSTransition
    key={location.key}
    classNames="fade"
    timeout={30000}
    >
      <div className={cl.AdCreating}>
        <Cap step={1} className={cl.Cap} > <p className = {cl.CapText}> Создайте объявление </p> </Cap>
        <Categories className={cl.Categories } taskInformation = {taskInformation} setCatagoryChoiceOpen = {setCatagoryChoiceOpen} setSubcategoryChoiceOpen = {setSubcategoryChoiceOpen} />
        <TaskName taskInformation = {taskInformation} setTaskInformation = {setTaskInformation} />
        <DescriptionAndPhoto taskInformation={taskInformation}  setTaskInformation={setTaskInformation} className={cl.DescriptionAndPhoto} />
        <MakePrivate
          isPrivate={taskInformation.isPrivate}
          setTaskInformation={setTaskInformation}
          className={cl.MakePrivate}
          taskInformation={taskInformation}
        />
      <CSSTransition classNames={'modal'}
      in = {isCategoryChoiceOpen}
      
      timeout={0}
      mountOnEnter
      unmountOnExit
       >
        <ChoiceCategory taskInformation = {taskInformation} setTaskInformation = {setTaskInformation} setCatagoryChoiceOpen = {setCatagoryChoiceOpen} />
      </CSSTransition>
      
      <CSSTransition classNames={'modal-two'}
          in = {isSubcategoryChoiceOpen}
          timeout={0}
          unmountOnExit
          mountOnEnter
          >

        <ChoiceSubCategory setTaskInformation = {setTaskInformation} setSubcategoryChoiceOpen = {setSubcategoryChoiceOpen} taskInformation = {taskInformation}  ></ChoiceSubCategory>
      </CSSTransition>

      </div>

      </CSSTransition>
  );
};

export default AdCreatingOne;
