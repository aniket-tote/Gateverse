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
    const aboutCourse =
      data.aboutCourse[0].description[0].children[0].text || "";
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
        <Sidebar dataObject={subjectTopicMap} />
        <Dashboard description={aboutCourse}></Dashboard>
      </div>
    );
  }
};

export default Course;

const getData = (query: string) => {
  return client.fetch(query);
};
