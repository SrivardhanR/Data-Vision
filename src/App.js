import React ,{useEffect}from 'react';
import {BrowserRouter,Routes, Route } from 'react-router-dom';
import { FiSettings } from "react-icons/fi";
import {TooltipComponent} from "@syncfusion/ej2-react-popups";

import "./App.css";
import { Ecommerce, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Line, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor } from './pages';
import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import { useStateContext } from './context/ContextProvider';
const App = () => {
    const {activeMenu} = useStateContext();
  return (
    <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
            <div className="fixed right-4 bottom-4" style={{zIndex:'1000'}}>
                <TooltipComponent content="Settings" position='top'>
                    <button type="button" className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray' style={{background:'blue',borderRadius:'50%'}}>
                        <FiSettings/>
                    </button>
                </TooltipComponent>
            </div>
            {activeMenu?(
                <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
                    <Sidebar/>
                </div>
            ):(
                <div className='w-0 dark:bg-secondary-dark-bg'>
                    <Sidebar/>
                </div>
            )}
        <div
            className={
              activeMenu
                ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
            }
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <Navbar />
            </div>
        <div>
            <ThemeSettings/>
            <Routes>
                <Route path='/' element={(<Ecommerce/>)}/>
                <Route path='/ecommerce' element={(<Ecommerce/>)}/>

                <Route path='/orders' element={(<Orders/>)}/>
                <Route path='/employees' element={(<Employees/>)}/>
                <Route path='/customers' element={(<Customers/>)}/>

                <Route path='/kanban' element={(<Kanban/>)}/>
                <Route path='/editor' element={(<Editor/>)}/>
                <Route path='/calendar' element={(<Calendar/>)}/>
                <Route path='/colorPicker' element={(<ColorPicker/>)}/>

                <Route path='/area' element={(<Area/>)}/>
                <Route path='/bar' element={(<Bar/>)}/>
                <Route path='/colorMapping' element={(<ColorMapping/>)}/>
                <Route path='/financial' element={(<Financial/>)}/>
                <Route path='/line' element={(<Line/>)}/>
                <Route path='/pie' element={(<Pie/>)}/>
                <Route path='/pyramid' element={(<Pyramid/>)}/>
                <Route path='/stacked' element={(<Stacked/>)}/>
            </Routes>
        </div>
        </div>
        </div>
    </BrowserRouter>
  )
}

export default App;