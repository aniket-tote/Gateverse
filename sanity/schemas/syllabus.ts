import { defineField, defineType } from "sanity";

export default defineType({
  name: "syllabus",
  title: "Syllabus",
  type: "document",
  fields: [
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          type: "block",
        },
        {
          type: "image",
        },
      ],
    }),
    defineField({
      name: "course",
      title: "Course",
      type: "reference",
      to: [{ type: "course" }],
    }),
  ],
});
