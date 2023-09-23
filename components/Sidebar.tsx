"use client";

import { useColorMode } from "@/context/ColorModeContext";
import { useState } from "react";
import { MdOutlineArrowDropUp } from "react-icons/md";

// interface Subject {
//   _type: string;
//   name: string;
//   course: string;
//   _id: string;
//   _updatedAt: string;
//   _createdAt: string;
//   _rev: string;
// }

interface Subjects {
  [key: string]: string[];
}

interface SidebarProps {
  subjects: Subjects;
  isSideOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ subjects, isSideOpen }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  const [openSubjects, setOpenSubjects] = useState<string[]>([]);

  const isSubjectOpen = (subject: string) => openSubjects.includes(subject);

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
      className={`overflow-y-auto transition-all duration-500 ease-in-out ${
        isSideOpen ? "w-4/5 sm:w-1/2 md:w-1/3 lg:w-2/12" : "w-0"
      } ${colorMode === "dark" ? "bg-[#222]" : "#eee"}`}
    >
      <ul>
        {Object.keys(subjects).map((subject) => (
          <li key={subject} className="">
            <button
              className={`flex items-center justify-between w-full p-2 hover:bg-[#333] hover:text-[#4e8e8e]  ${
                colorMode === "dark"
                  ? `${isSubjectOpen(subject) ? "bg-[#333]" : "bg-[#222]"}`
                  : `${isSubjectOpen(subject) ? "bg-[#ddd]" : "bg-[#fff]"}`
              } `}
              onClick={() => toggleSubject(subject)}
            >
              <span>{subject}</span>
              <span
                className={`text-2xl transition-transform duration-500 ease-in-out  ${
                  isSubjectOpen(subject) ? "rotate-0" : "rotate-180"
                }`}
              >
                <MdOutlineArrowDropUp />
              </span>
            </button>
            <div className="w-full h-[0.07rem] bg-[#444]"></div>
            <div
              className={`bg-[#333] transition-all text-sm overflow-y-hidden duration-500 ease-in-out ${
                isSubjectOpen(subject) ? "h-max" : " h-0"
              }`}
            >
              <ul>
                {subjects[subject].map((topic) => (
                  <li
                    className="py-2 px-4 hover:font-semibold cursor-pointer"
                    key={topic}
                  >
                    {topic}
                  </li>
                ))}
                <li className="w-full h-0.5  bg-[#438383]"></li>
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
