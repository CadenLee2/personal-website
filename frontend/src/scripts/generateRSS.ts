import blogMetadata from '../blogMetadata';
import { create } from 'xmlbuilder2';

// Run this script to generate the RSS feed (public/rss.xml)

const ROOT_URL = 'https://cadenlee.dev';

function fullBlogLink(id: string) {
  return ROOT_URL + '/blog/' + id;
}

/** Converts '2025/06/14' to RFC 2822 timestamp 'Sat, 14 Jun 2025 07:00:00 GMT' */
function toPubDate(dateSimple: string) {
  return (new Date(dateSimple)).toUTCString();
}

function generateRSS() {
  const rssFeed = {
    rss: {
      '@version': '2.0',
      channel: {
        title: 'Caden Lee',
        description: 'Student and software engineer',
        link: ROOT_URL,
        item: Object.entries(blogMetadata).map(([id, meta]) => ({
          title: meta.title,
          link: fullBlogLink(id),
          guid: fullBlogLink(id),
          description: meta.descr,
          pubDate: toPubDate(meta.date),
          author: 'Caden Lee'
        }))
      }
    }
  };

  const doc = create(rssFeed)
  const xml = doc.end({ prettyPrint: true });

  console.log(xml);
}

generateRSS();
