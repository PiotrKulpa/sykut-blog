import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";
import parseMD from 'parse-md';

import { BLOG_FILES_PATH } from '../constants';

const getParsedPosts = (files = []) => {
  return files && files.map(filename => {
    const markdownWithMetadata = fs
      .readFileSync(path.join(BLOG_FILES_PATH, filename), 'utf8')
    const {
      metadata: {
        date = '',
        title = '',
        tags = '',
        content = '',
        galleryImages = [],
      },
    } = parseMD(markdownWithMetadata);

    const parsedMarkdown = matter(content);
    const htmlString = marked(parsedMarkdown.content);

    return {
      slug: filename.replace(".md", ""),
      date: date.toString(),
      title,
      tags,
      htmlString,
      galleryImages,
    }

  })
    .sort((a, b) => {
      var dateA = new Date(a.date);
      var dateB = new Date(b.date);
      return dateA - dateB;
    })
    .reverse();

}

export default getParsedPosts