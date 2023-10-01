"use client";

import Sidebar, { dataItem } from "@/components/Sidebar";
import useSWR from "swr";
import React from "react";
import Dashboard from "@/components/Dashboard";
import { client } from "@/sanity/lib/client";
import { getCourseDetails } from "@/sanity/lib/queries";

const Course = ({ params }: { params: { course: string } }) => {
  // const result = await client.fetch(subjectAndSubtopicQuery);
  const { data, error, isLoading } = useSWR(
    getCourseDetails(params.course),
    getData
  );

  const [isAboutOpen, setIsAboutOpen] = React.useState<boolean>(true);

  const toggleAbout = (value: boolean) => {
    setIsAboutOpen(value);
  };

  if (isLoading) {
    return (
      <div className={`w-full h-full gird place-items-center`}>
        <span>Fetching Data...</span>
      </div>
    );
  } else if (error) {
    return (
      <div className={`w-full h-full gird place-items-center`}>
        <span>Some error! Its not you, its us.</span>
      </div>
    );
  } else {
    console.log(data);
    const aboutCourse = data.aboutCourse[0];
    const syllabus = data.syllabus[0];

    const subjectTopicMap: Record<string, dataItem[]> = {};

    data.subjects.forEach((subject: any) => {
      subjectTopicMap[subject.name] = [
        {
          name: "Tutorial - " + subject.name,
          slug: "/" + params.course + "/" + subject.slug.current,
        },
        { name: "Previous Year Question", slug: "/previous-year-question/" },
        { name: "last minute notes", slug: "/last-minute-notes" },
      ];
    });

    return (
      <div className={`flex sticky screenMinusNavHeight`}>
        <Sidebar
          dataObject={subjectTopicMap}
          isAboutOpen={isAboutOpen}
          toggleAbout={toggleAbout}
        />
        {isAboutOpen ? (
          <Dashboard text={aboutCourse}></Dashboard>
        ) : (
          <Dashboard text={syllabus}></Dashboard>
        )}
      </div>
    );
  }
};

export default Course;

const getData = (query: string) => {
  return client.fetch(query);
};
