"use client";

import Sidebar, { dataItem } from "@/components/Sidebar";
import { client } from "@/sanity/lib/client";
import { getTopicAndSubtopicFromSubject } from "@/sanity/lib/queries";
import React from "react";
import useSWR from "swr";

const Layout = ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { course: string; subject: string };
}) => {
  const { data, error, isLoading } = useSWR(
    getTopicAndSubtopicFromSubject(params.subject),
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
    const topicAndSubTopicMap: Record<string, dataItem[]> = {};

    data.forEach((topic: any) => {
      topicAndSubTopicMap[topic.name] = topic.subTopics.map((subTopic: any) => {
        return {
          name: subTopic.name,
          slug:
            "/" +
            params.course +
            "/" +
            params.subject +
            "/" +
            subTopic.slug.current,
        };
      });
    });

    return (
      <div className={`flex sticky screenMinusNavHeight`}>
        <Sidebar dataObject={topicAndSubTopicMap} />
        {children}
      </div>
    );
  }
};

export default Layout;

const getData = (query: string) => {
  return client.fetch(query);
};
