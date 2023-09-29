import { type SchemaTypeDefinition } from "sanity";
import course from "./schemas/course";
import author from "./schemas/author";
import subject from "./schemas/subject";
import topic from "./schemas/topic";
import subTopic from "./schemas/subTopic";
import blogPost from "./schemas/blogPost";
import aboutCourse from "./schemas/aboutCourse";
import syllabus from "./schemas/syllabus";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    author,
    course,
    subject,
    topic,
    subTopic,
    blogPost,
    aboutCourse,
    syllabus,
  ],
};
