import Sidebar from "@/components/Sidebar";
import React from "react";
import Dashboard from "@/components/Dashboard";
import { client } from "@/sanity/lib/client";
import { subjectAndSubtopicQuery } from "@/sanity/lib/queries";

const Gate = async () => {
  const result = await client.fetch(subjectAndSubtopicQuery);
  // const { data, error, isLoading } = useSWR(subjectAndSubtopicQuery, getData);

  const subjectTopicMap: Record<string, string[]> = {};

  result.forEach((subject: any) => {
    const subjectName = subject.name;
    const topics = subject.topics.map((topic: any) => topic.name);

    subjectTopicMap[subjectName] = topics;
  });

  return (
    <div className={`flex sticky screenMinusNavHeight`}>
      <Sidebar subjects={subjectTopicMap} />
      <Dashboard />
    </div>
  );
};

export default Gate;
