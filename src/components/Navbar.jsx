import React,{useEffect} from 'react';
import { useStateContext } from '../context/ContextProvider';
import { AiOutlineMenu} from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import avatar from '../data/avatar.jpg';
import {Cart ,Chat,Notification,UserProfile} from '.';

const NavButton = ({title,customFun,icon,color,dotColor}) => (
  <TooltipComponent content={title} position='BottomCenter'>
    <button 
      type="button"
      onClick={customFun}
      style={{color}}
      className='relative text-xl rounded-full p-3 hover:bg-gray-300'
    >
      <span 
        style={{background:dotColor}}
        className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2'
      />
      {icon}
      
    </button>
  </TooltipComponent>
)
const Navbar = () => {
  const {sctiveMenu , setActiveMenu ,handleClick, isClicked, setIsClicked ,setScreenSize ,screenSize} = useStateContext();
  useEffect(()=>{
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener('resize',handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  },[]);

  useEffect(() => {
    if(screenSize<=900){
      setActiveMenu(false);
    }else{
      setActiveMenu(true);
    }
  },[screenSize]);
  return (
    <div className='flex justify-between p-2 md:ml-6 md:mr-6 relative'>
      <NavButton title="Menu" customFun={()=>setActiveMenu((prevActiveMenu)=>(!prevActiveMenu))} color='blue' icon = {<AiOutlineMenu/>}/>
      <div className='flex'>
        <NavButton title="Cart" customFun={()=>handleClick('cart')} color='blue' icon = {<FiShoppingCart/>}/>
        <NavButton title="Chat" customFun={()=>handleClick('chat')} color='blue' icon = {<BsChatLeft/>} dotColor="#03C9D7"/>
        <NavButton title="notification" customFun={()=>handleClick('notification')} color='blue' icon = {<RiNotification3Line/>} dotColor="#03C9D7"/>
        <TooltipComponent content="Profile" position='BottomCenter'>
          <div 
            className='flex items-center gap-2 cursor-pointer p-1 hover:bg-gray-300 rounded-lg'
            onClick={() => handleClick('userProfile')}
          >
            <img src={avatar} alt="" className='rounded-full h-8 w-8'/>
            <p>
              <span className="text-gray-400 text-14">Hi,</span>{' '}
              <span className="text-gray-400 font-bold ml-1 text-14">
                Srivardhan
              </span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14"/>
          </div>
        </TooltipComponent>

        {isClicked.cart && (<Cart />)}
        {isClicked.chat && (<Chat />)}
        {isClicked.notification && (<Notification />)}
        {isClicked.userProfile && (<UserProfile />)}
      </div>
    </div>
  )
}

export default Navbar; 