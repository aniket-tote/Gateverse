import { defineField, defineType } from "sanity";

export default defineType({
  name: "subtopic",
  title: "Subtopic",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    }),
    defineField({
      name: "topic",
      title: "Topic",
      type: "reference",
      to: { type: "topic" }, // Reference to the Topic document
    }),
  ],
});
