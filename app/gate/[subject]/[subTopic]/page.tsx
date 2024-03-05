"use client";

import React from "react";

const SubTopic = ({
  params,
}: {
  params: { subject: string; subTopic: string };
}) => {
  return (
    <div>
      SubTopic {params.subject}/{params.subTopic}
    </div>
  );
};

export default SubTopic;
