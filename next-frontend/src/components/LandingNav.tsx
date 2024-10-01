import { useState } from "react";
import Link  from "next/link";
import Image from "next/image";
const sharedClasses = {
    textBlack: 'text-black',
    hoverRed400: 'hover:text-red-400',
    transitionColors: 'transition-colors',
    textXs: 'text-xs',
    textBase: 'text-base',
    primaryColor: 'text-red-600',
    secondaryColor: 'text-zinc-600',
    bgZinc: 'bg-zinc-50',
    bgZincDark: 'bg-zinc-100',
    bgRed: 'bg-red-600',
    bgRedHover: 'hover:bg-red-700',
    textWhite: 'text-white',
    textZinc: 'text-zinc-300',
    textZincDark: 'text-zinc-400',
    textZincLight: 'text-zinc-100',
    textSm: 'text-sm',
    fontBold: 'font-bold',
    fontSemibold: 'font-semibold',
    rounded: 'rounded-md',
    hoverTransition: 'transition-colors',
    flex: 'flex',
    flexCol: 'flex-col',
    flexRow: 'flex-row',
    itemsCenter: 'items-center',
    justifyCenter: 'justify-center',
    justifyBetween: 'justify-between',
    justifyEvenly: 'justify-evenly',
    gap: 'gap-3',
    gapX8: 'gap-8',
    gap12: 'gap-12',
    gapY6: 'gap-y-6',
    gapY8: 'gap-y-8',
    gapY12: 'gap-y-12',
    p4: 'p-4',
    p8: 'p-8',
    px6: 'px-6',
    py2: 'py-2',
    py4: 'py-4',
    py6: 'py-6',
    py10: 'py-10',
    py20: 'py-20',
    mt4: 'mt-4',
    mt6: 'mt-6',
    mt8: 'mt-8',
    mt12: 'mt-12',
    ml5: 'ml-5',
    mr8: 'mr-8',
    mr10: 'mr-10',
    mb3: 'mb-3',
    mb4: 'mb-4',
    mb12: 'mb-12',
    wFull: 'w-full',
    w40: 'w-40',
    w48: 'w-48',
    maxW7xl: 'max-w-7xl',
    maxW8xl: 'max-w-8xl',
    maxWmd: 'max-w-md',
    maxWsm: 'max-w-sm',
    maxWlg: 'max-w-lg',
    hScreen: 'h-screen',
    hFit: 'h-fit',
    h16: 'h-16',
    h2_4: 'h-2/4',
    hFull: 'h-full',
    inset0: 'inset-0',
    absolute: 'absolute',
    relative: 'relative',
    z10: 'z-10',
    z20: 'z-20',
    z50: 'z-50',
    backdropBlur: 'backdrop-blur-lg',
    bgBlack: 'bg-black',
    bgWhite: 'bg-white',
    bgOpacity80: 'bg-opacity-80',
    bgCenter: 'bg-center',
    bgCover: 'bg-cover',
    bgRed400: 'bg-red-400',
    bgRedHover400: 'hover:bg-red-400',
    shadowLg: 'shadow-lg',
    cursorPointer: 'cursor-pointer',
    cursorBlink: 'cursor-blink',
    block: 'block',
    inlineBlock: 'inline-block',
    hidden: 'hidden',
    pl2: 'pl-2',
    pt1: 'pt-1',
    textCenter: 'text-center',
    textLeft: 'text-left',
    textRight: 'text-right',
    textLg: 'text-lg',
    textXl: 'text-xl',
    text3xl: 'text-3xl',
    text4xl: 'text-4xl',
    text5xl: 'text-5xl',
    text1_5rem: 'text-[1.5rem]',
    text1_8rem: 'text-[1.8rem]',
    fontBlack: 'font-black',
    roundedMd: 'rounded-md',
    focusOutline: 'focus:outline-none',
  };



export default function LandingNav  ()  {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    return (
      <div className="fixed top-0 w-full bg-white h-16 bg-opacity-80 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
          <div>
          <Image src="/LandingPage_Images/Logo.png" height={60} width={80} alt="logo" className="-mt-4" style={{ objectFit: 'contain' }} />
          </div>
          <div>
          <ul className="hidden md:flex gap-8">
            <li>
              <Link href="/home" className={`${sharedClasses.textBlack} ${sharedClasses.hoverRed400} ${sharedClasses.transitionColors} ${sharedClasses.textBase}`}>Home</Link>
            </li>
            <li>
              <Link href="/login" className={`${sharedClasses.textBlack} ${sharedClasses.hoverRed400} ${sharedClasses.transitionColors} ${sharedClasses.textBase}`}>Sign In</Link>
            </li>
            <li>
              <Link href="/signup" className={`${sharedClasses.textBlack} ${sharedClasses.hoverRed400} ${sharedClasses.transitionColors} ${sharedClasses.textBase}`}>Sign Up</Link>
            </li>
          </ul>
          </div>
          
          <div className="lg:hidden">
            <div className="relative">
              <button 
                className="block cursor-pointer text-red-800"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Image src="/LandingPage_Images/hamburger_icon.png" width={20} height={20} alt="menu" className="-mt-3" />
              </button>
              <div className={`absolute right-0 mt-2 w-40 bg-red-400 rounded-md shadow-lg z-20 ${isMenuOpen ? 'block' : 'hidden'}`}>
                <ul className="text-white text-sm">
                  <li className="pl-2 py-2 hover:bg-red-500">
                    <Link href="#home">Home</Link>
                  </li>
                  <li className="pl-2 py-2 hover:bg-red-500">
                    <Link href="/login">Sign in</Link>
                  </li>
                  <li className="pl-2 py-2 hover:bg-red-500">
                    <Link href="#signUp">Sign up</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  