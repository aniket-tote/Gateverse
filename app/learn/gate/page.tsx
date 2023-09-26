"use client";

import Sidebar from "@/components/Sidebar";
import useSWR from "swr";
import React from "react";
import Dashboard from "@/components/Dashboard";
import { client } from "@/sanity/lib/client";
import { subjectQuery } from "@/sanity/lib/queries";

const Gate = () => {
  // const result = await client.fetch(subjectAndSubtopicQuery);
  const { data, error, isLoading } = useSWR(subjectQuery, getData);

  if (isLoading) {
    return (
      <div className={`w-full h-full gird place-items-center`}>
        <span>Fetching Data...</span>
      </div>
    );
  }

  const subjectTopicMap: Record<string, string[]> = {};

  data.forEach((subject: any) => {
    const subjectName = subject.name;
    subjectTopicMap[subjectName] = [`Tutorial - ${subjectName}`,`Previous Year Question`,`Last Minute Notes`];
  });

  return (
    <div className={`flex sticky screenMinusNavHeight`}>
      <Sidebar dataObject={subjectTopicMap} />
      <Dashboard />
    </div>
  );
};

export default Gate;

const getData = (query: string) => {
  return client.fetch(query);
};
