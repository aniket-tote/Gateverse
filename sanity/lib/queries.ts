// ./nextjs-app/sanity/lib/queries.ts

import { groq } from "next-sanity";

// Get all subjects
export const subjectQuery = groq`*[_type == "subject" && course->title == "Gate"]`;

export const subjectAndSubtopicQuery = groq`
*[_type == "subject" && course->title == "Gate"] {
  name,
  "topics": *[_type == "topic" && references(^._id)] {
    name
  }
}`;
