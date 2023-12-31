import { defineField, defineType } from "sanity";

export default defineType({
  name: "subject",
  title: "Subject",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "course",
      title: "Course",
      type: "reference",
      to: { type: "course" },
    }),
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 200,
      },
    },
  ],
});
