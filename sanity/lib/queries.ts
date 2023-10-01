// ./nextjs-app/sanity/lib/queries.ts

import { groq } from "next-sanity";

export const getSubjectNameAndSlugFromCourse = (courseName: string) => {
  return groq`*[_type == "subject" && course->title == "${courseName}"]{name,slug}`;
};

export const getCourseDetails = (courseName: string) => {
  return groq`
    *[_type == "course" && title == "${courseName}"]{
      title,
      "subjects": *[_type == "subject" && references(^._id)]{name, slug},
      "syllabus": *[_type == "syllabus" && references(^._id)]{content[]},
      "aboutCourse": *[_type == "aboutCourse" && references(^._id)]{content[]}
    }[0]
  `;
};

export const getTopicAndSubtopicFromSubject = (slug: string) => {
  return groq`*[_type == "topic" && subject->slug.current == "${slug}"]{
    name,
    "subTopics": *[ _type == "subtopic" && topic._ref == ^._id ]{name,slug}
  }`;
};
