"use client";

import Dashboard from "@/components/Dashboard";
import Sidebar, { dataItem } from "@/components/Sidebar";
import { useColorMode } from "@/context/ColorModeContext";
import { client } from "@/sanity/lib/client";
import { getTopicAndSubtopicFromSubject } from "@/sanity/lib/queries";
import subject from "@/sanity/schemas/subject";
import React from "react";
import useSWR from "swr";

const Subject = ({
  params,
}: {
  params: { course: string; subject: string };
}) => {
  return <div>{params.subject}</div>;
};

export default Subject;
