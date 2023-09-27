"use client";

import { useColorMode } from "@/context/ColorModeContext";
import { useState } from "react";
import { MdOutlineArrowBackIosNew, MdOutlineArrowDropUp } from "react-icons/md";
import { useRouter } from "next/navigation";

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

interface dataItem {
  name: string;
  slug: string;
}
interface dataObject {
  [key: string]: dataItem[];
}

interface SidebarProps {
  dataObject: dataObject;
}

const Sidebar: React.FC<SidebarProps> = ({ dataObject }) => {
  const { colorMode } = useColorMode();

  const [isSideOpen, setIsSideOpen] = useState(true);

  const [openSubjects, setOpenSubjects] = useState<string[]>([]);

  const isSubjectOpen = (subject: string) => openSubjects.includes(subject);

  const router = useRouter();

  const toggleSubject = (subject: string) => {
    setOpenSubjects((prevOpenSubjects) => {
      if (isSubjectOpen(subject)) {
        return prevOpenSubjects.filter(
          (openSubject) => openSubject !== subject
        );
      } else {
        return [...prevOpenSubjects, subject];
      }
    });
  };

  return (
    <div
      className={`overflow-y-auto scrollbar scrollbar-w-1 scrollbar-thumb-rounded-md scrollbar-thumb-[#4e8e8e] scrollbar-track-[#222] transition-[width] duration-500 ease-in-out ${
        isSideOpen ? "w-4/5 sm:w-1/2 md:w-1/3 lg:w-2/12" : "w-12"
      } ${
        colorMode === "dark"
          ? "bg-[#222] text-white"
          : "bg-[#fff] text-slate-950"
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
      <ul className={`${isSideOpen ? "inline" : "hidden"}`}>
        {Object.keys(dataObject).map((subject) => (
          <li key={subject} className="">
            <button
              className={`flex items-center justify-between w-full p-2 hover:text-[#4e8e8e]  ${
                colorMode === "dark"
                  ? `${
                      isSubjectOpen(subject)
                        ? "bg-[#333] text-[#4e8e8e]"
                        : "bg-[#222]"
                    } hover:bg-[#333]`
                  : `${
                      isSubjectOpen(subject)
                        ? "bg-[#eee] text-[#4e8e8e]"
                        : "bg-[#fff]"
                    } hover:bg-[#eee]`
              } `}
              onClick={() => toggleSubject(subject)}
            >
              <span className="text-sm">{subject}</span>
              <span
                className={`text-2xl transition-transform duration-500 ease-in-out  ${
                  isSubjectOpen(subject) ? "rotate-0" : "rotate-180"
                }`}
              >
                <MdOutlineArrowDropUp />
              </span>
            </button>
            <div
              className={`w-full h-[0.07rem] ${
                colorMode === "dark" ? "bg-[#444]" : "bg-[#ccc]"
              }`}
            ></div>
            <div
              className={` transition-all text-sm overflow-y-hidden duration-500 ease-in-out ${
                colorMode === "dark" ? "bg-[#333]" : "bg-[#eee]"
              } ${isSubjectOpen(subject) ? "h-max" : " h-0"}`}
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
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
