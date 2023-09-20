"use client";

import { useColorMode } from "@/context/ColorModeContext";
import React from "react";

const SubTopic = ({
  params,
}: {
  params: { subject: string; topic: string; subTopic: string };
}) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div>
      SubTopic {params.subject}/{params.topic}/{params.subTopic}
    </div>
  );
};

export default SubTopic;
