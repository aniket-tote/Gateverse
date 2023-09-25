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
      name: "topic",
      title: "Topic",
      type: "reference",
      to: { type: "topic" }, // Reference to the Topic document
    }),
  ],
});
