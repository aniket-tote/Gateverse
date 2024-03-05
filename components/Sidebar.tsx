"use client";

import { useState } from "react";
import { MdOutlineArrowBackIosNew, MdOutlineArrowDropUp } from "react-icons/md";
import { useRouter, usePathname } from "next/navigation";
import useColorMode from "@/redux/hooks/useColorMode";

// interface subject {
//   name: string;
//   _id: string;
//   _rev: string;
//   _type: string;
//   _createdAt: string;
//   _updatedAt: string;
//   course: {
//     _ref: string;
//     _type: string;
//   };
//   slug: {
//     _type: string;
//     current: string;
//   };
// }

export interface dataItem {
  name: string;
  slug: string;
}
interface dataObject {
  [key: string]: dataItem[];
}

interface SidebarProps {
  dataObject: dataObject;
  isAboutOpen?: boolean;
  toggleAbout?: (value: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  dataObject,
  isAboutOpen,
  toggleAbout,
}) => {
  const { colorMode } = useColorMode();

  const router = useRouter();
  const pathname = usePathname();

  const [isSideOpen, setIsSideOpen] = useState(true);

  return (
    <div
      className={`overflow-y-auto scrollbar scrollbar-w-0 scrollbar-thumb-rounded-md scrollbar-thumb-[#4e8e8e] transition-[width] duration-500 ease-in-out ${
        isSideOpen ? "w-4/5 sm:w-1/2 md:w-1/3 lg:w-2/12" : "w-12"
      } ${
        colorMode === "dark"
          ? "bg-[#222] text-white scrollbar-track-[#222]"
          : "bg-[#fff] text-slate-950 scrollbar-track-[#eee]"
      }`}
    >
      <div className={`flex w-full justify-between items-center p-1 `}>
        <span
          className={`text-xl font-semibold ${
            isSideOpen ? "inline" : "hidden"
          }`}
        >
          Gate
        </span>
        <div
          className={`rounded w-10 cursor-pointer h-10 font-bold text-xl grid place-items-center ${
            colorMode === "dark" ? "hover:bg-[#333]" : "hover:bg-[#eee]"
          }`}
          onClick={() => {
            setIsSideOpen((prev) => (prev ? false : true));
          }}
        >
          <span
            className={` transition-all duration-500 ease-in-out
            ${isSideOpen ? "rotate-0" : "-rotate-180"}
            `}
          >
            <MdOutlineArrowBackIosNew />
          </span>
        </div>
      </div>
      {toggleAbout && (
        <div className={`flex-col ${isSideOpen ? "flex" : "hidden"}`}>
          <button
            className={`flex justify-start w-full p-2 hover:text-[#4e8e8e]  ${
              colorMode === "dark"
                ? `${
                    isAboutOpen ? "bg-[#333] text-[#4e8e8e]" : "bg-[#222]"
                  } hover:bg-[#333]`
                : `${
                    isAboutOpen ? "bg-[#eee] text-[#4e8e8e]" : "bg-[#fff]"
                  } hover:bg-[#eee]`
            } `}
            onClick={() => {
              toggleAbout(true);
            }}
          >
            <span>
              What is{" "}
              {pathname
                .substring(1, 2)
                .toLocaleUpperCase()
                .concat(pathname.substring(2))}{" "}
              ?
            </span>
          </button>
          <button
            className={`flex justify-start w-full p-2 hover:text-[#4e8e8e]  ${
              colorMode === "dark"
                ? `${
                    !isAboutOpen ? "bg-[#333] text-[#4e8e8e]" : "bg-[#222]"
                  } hover:bg-[#333]`
                : `${
                    !isAboutOpen ? "bg-[#eee] text-[#4e8e8e]" : "bg-[#fff]"
                  } hover:bg-[#eee]`
            } `}
            onClick={() => {
              toggleAbout(false);
            }}
          >
            <span>Syllabus</span>
          </button>
        </div>
      )}
      <ul className={`${isSideOpen ? "inline" : "hidden"}`}>
        {Object.keys(dataObject).map((subject) => (
          <details key={subject} className="">
            <summary
              className={`flex items-center justify-between w-full p-2 hover:text-[#4e8e8e] border-b cursor-pointer ${
                colorMode === "dark"
                  ? `bg-[#222] hover:bg-[#333] border-[#444]`
                  : `bg-[#fff] hover:bg-[#eee] border-[#ccc]`
              } `}
            >
              <span className="text-sm">{subject}</span>
              <span className={`text-2xl rotate-180`}>
                <MdOutlineArrowDropUp />
              </span>
            </summary>
            <div
              className={` transition-[height] text-sm overflow-y-hidden duration-500 ease-in-out ${
                colorMode === "dark" ? "bg-[#333]" : "bg-[#eee]"
              }`}
            >
              {dataObject[subject].map((item) => {
                return (
                  <div
                    className="py-2 px-4 hover:font-medium cursor-pointer"
                    key={item.slug}
                    onClick={() => {
                      router.push(item.slug);
                    }}
                  >
                    {item.name}
                  </div>
                );
              })}
              <div className="w-full h-0.5 bg-[#438383]"></div>
            </div>
          </details>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
