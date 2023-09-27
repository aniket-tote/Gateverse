"use client";

import Sidebar from "@/components/Sidebar";
import useSWR from "swr";
import React from "react";
import Dashboard from "@/components/Dashboard";
import { client } from "@/sanity/lib/client";
import { subjectQuery } from "@/sanity/lib/queries";
import { usePathname } from "next/navigation";

interface dataItem {
  name: string;
  slug: string;
}

const Gate = () => {
  // const result = await client.fetch(subjectAndSubtopicQuery);
  const { data, error, isLoading } = useSWR(subjectQuery, getData);

  const pathname = usePathname();

  if (isLoading) {
    return (
      <div className={`w-full h-full gird place-items-center`}>
        <span>Fetching Data...</span>
      </div>
    );
  }

  const subjectTopicMap: Record<string, dataItem[]> = {};

  data.forEach((subject: any) => {
    subjectTopicMap[subject.name] = [
      {
        name: "Tutorial - " + subject.name,
        slug: pathname + "/" + subject.slug.current,
      },
      { name: "Previous Year Question", slug: "/previous-year-question/" },
      { name: "last minute notes", slug: "/last-minute-notes" },
    ];
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
