import React, { Fragment, useEffect, useState } from "react";
import { BiLoaderCircle } from "react-icons/bi";
import { VscLayoutSidebarRight } from "react-icons/vsc";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { MdLanguage } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { FaRegHourglass } from "react-icons/fa6";
import { LuCalendarDays } from "react-icons/lu";
import { MdOutlineLibraryAddCheck } from "react-icons/md";
import { FiInbox } from "react-icons/fi";
import { RiDashboardLine } from "react-icons/ri";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { IoMdHelpCircleOutline } from "react-icons/io";
import adminImg from "../assets/admin.png";
import Image from "next/image";

const sideMenu = [
  {
    id: 1,
    name: "Orders",
    icon: <FiInbox className="w-5 h-5" />,
  },
  {
    id: 2,
    name: "Subscriptions",
    icon: <MdOutlineLibraryAddCheck className="w-5 h-5" />,
  },
  {
    id: 3,
    name: "Calendar",
    icon: <LuCalendarDays className="w-5 h-5" />,
  },
  {
    id: 4,
    name: "Waitlist",
    icon: <FaRegHourglass className="w-5 h-5" />,
  },
];

function Sidebar() {
  const [collapseSidebar, setCollapseSidebar] = useState(false);
  const [width, setWidth] = useState(0);
  const [selectedSidebar, setSelectedSidebar] = useState<number | null>(null);
  const toggleSidebar = () => {
    setCollapseSidebar(!collapseSidebar);
  };

  useEffect(() => {
    // Function to update the state with the current window width
    const handleResize = () => setWidth(window.innerWidth);

    // Set the initial width
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (width < 768) {
      setCollapseSidebar(true);
    } else {
      setCollapseSidebar(false);
    }
  }, [width])

  return (
    <div
      className={`flex w-16 justify-center items-center overflow-hidden transition-all duration-300 ease-in-out flex-col p-3 bg-[#F8FAFC] min-h-lvh ${
        collapseSidebar ? "md:w-14" : "md:w-72 md:items-start"
      }`}
    >
      <div className="flex justify-between w-full items-center">
        <div className="flex items-center">
          <BiLoaderCircle
            onClick={toggleSidebar}
            className="bg-black cursor-pointer text-white w-6 h-6 mx-auto rounded"
          />
          {!collapseSidebar && (
            <span className="font-bold ml-4">Front•Desk</span>
          )}
        </div>
        {!collapseSidebar && (
          <VscLayoutSidebarRight
            onClick={toggleSidebar}
            className="w-6 h-6 ml-auto p-[0.15rem] text-gray-600 cursor-pointer"
          />
        )}
      </div>
      <div
        className={`mt-4 bg-white ${
          !collapseSidebar ? "p-3" : "p-2"
        } rounded-md shadow-md w-full flex gap-3 text-xs font-medium`}
      >
        {!collapseSidebar && (
          <input placeholder="Location Name" className="outline-none w-full" />
        )}
        <FaArrowRightArrowLeft className="" />
      </div>
      <div
        className={`bg-[#F1F5F9] ${
          !collapseSidebar ? "p-3" : "p-2"
        } rounded-md w-full shadow-md flex flex-col gap-3 text-xs font-medium`}
      >
        {!collapseSidebar && (
          <span className="font-semibold text-base">08:30 AM Tue 20 JAN</span>
        )}
        <div className="flex gap-2">
          <MdLanguage className="w-4 h-4" />
          {!collapseSidebar && (
            <Fragment>
              <span className="text-xs">UTC: +5 hours</span>
              <IoIosArrowDown className="w-4 h-4 ml-auto" />
            </Fragment>
          )}
        </div>
      </div>
      <div className="mt-4 w-full flex flex-col">
        {sideMenu.map((item) => {
          return (
            <div
              onClick={() => setSelectedSidebar(item.id)}
              key={item.id}
              className={`py-3 px-2 mt-2 cursor-pointer flex w-full gap-3 items-center ${
                item.id == selectedSidebar
                  ? "rounded-md shadow-md bg-white"
                  : ""
              }`}
            >
              {item.icon}
              {!collapseSidebar && <span className="text-sm">{item.name}</span>}
            </div>
          );
        })}
      </div>
      <div className="py-2 px-2 mt-auto cursor-pointer flex w-full gap-3 items-center">
        {!collapseSidebar && <RiDashboardLine className="w-5 h-5" />}
        <div className="flex w-full justify-between">
          {!collapseSidebar && <span className="text-sm">Dashboard</span>}
          <BsBoxArrowUpRight className="w-4 h-4" />
        </div>
      </div>
      <div
        className={`flex w-full gap-2 ${
          collapseSidebar ? "p-1" : "p-3"
        } items-center my-4 shadow-md rounded-md bg-white justify-center`}
      >
        <Image
          src={adminImg}
          alt="Admin Image"
          className="w-7 h-7 rounded-full"
        />
        {!collapseSidebar && (
          <div className="flex w-full items-center">
            <div className="text-xs w-full flex flex-col gap-1 text-gray-600">
              <span className="text-sm text-black">Admin name</span>
              <span className="font-normal text-slate-500">
                adminname@mail.com
              </span>
            </div>
            <IoIosArrowDown className="w-5 h-5" />
          </div>
        )}
      </div>

      <div className="flex w-full gap-2 items-center justify-center">
        <IoMdHelpCircleOutline className="w-6 h-6" />
        {!collapseSidebar && (
          <div className="text-xs w-full flex flex-col gap-1 text-gray-600">
            <span className="text-sm text-black">Help center</span>
            <span className="font-normal text-slate-500">
              @2024 Omnify.Inc.
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
