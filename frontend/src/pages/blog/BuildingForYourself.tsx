import '../../App.css'
import PageFrame from '../../components/PageFrame';
import BlogHeaderBox from '../../components/BlogHeaderBox';
import { LinkButton } from '../../components/Button';

function Post() {
  const POST_ID = "building_for_yourself";

  return (
    <PageFrame pageName='blog'>
      <BlogHeaderBox postId={POST_ID} />
      <div className="section">
        <h2 id="cuisine">Preface: Cuisine</h2>
        <p>
          Often when I go out to eat, I think about how I'd rate the restaurants I go to.
          Of course there's Yelp and Google Maps, but those are boring, so I made my own food rating page.
        </p>
        <div>
          <LinkButton variant="blue" href="/cuisine">
            Visit Cuisine
          </LinkButton>
        </div>
        <p>
          When planning the project structure, I had a few requirements in mind:
        </p>
        <ul>
          <li>I can update my food ratings without pushing code changes</li>
          <li>I can send my friends a link to a specific restaurant once I've rated it</li>
          <li>The page works naturally on mobile</li>
        </ul>
        <p>
          Since I need to update the data occasionally from my computer,
          the frontend fetches the data from a basic key-value store
          (<a href="https://github.com/Cadecraft/cuisine">source</a>), which I
          write to when adding a new restaurant.
          Cuisine is a typical single-page app, and it uses Leaflet for the map.
        </p>
      </div>
      <div className="section">
        <h2 id="next">Coming soon!</h2>
        <p>
          Through the brief process of building this silly side project, I realized how much I've improved compared to when I worked on similarly-scoped projects in high school. Most of that improvement came from my experiences in bigger teams working on more significant projects. But considering how much fun I had with Cuisine, I also thought about the concept of <i>ownership</i>, and how it's important in individual and team projects alike. I'll discuss it more in this blog post.
        </p>
        <p>
          Look out for more content coming soon! The rest of this article is currently in progress.
        </p>
      </div>
    </PageFrame>
  );
}

export default Post;
