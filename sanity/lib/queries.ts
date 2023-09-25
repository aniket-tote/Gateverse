// ./nextjs-app/sanity/lib/queries.ts

import { groq } from "next-sanity";

// Get all subjects
export const postsQuery = groq`*[_type == "subject"]`;

// Get a single post by its slug
export const postQuery = groq`*[_type == "post" && slug.current == $slug][0]{ 
    title, mainImage, body
  }`;

// Get all post slugs
export const postPathsQuery = groq`*[_type == "post" && defined(slug.current)][]{
    "params": { "slug": slug.current }
  }`;

export const subjectAndSubtopicQuery = groq`
*[_type == "subject" && course->title == "Gate"] {
  name,
  "topics": *[_type == "topic" && references(^._id)] {
    name
  }
}
`;
