import { defineField, defineType } from "sanity";

export default defineType({
  name: "topic",
  title: "Topic",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "subject",
      title: "Subject",
      type: "reference",
      to: { type: "subject" },
    }),
  ],
});
