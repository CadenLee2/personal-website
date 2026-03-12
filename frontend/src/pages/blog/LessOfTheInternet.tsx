import '../../App.css'
import PageFrame from '../../components/PageFrame';
import BlogHeaderBox from '../../components/BlogHeaderBox';

function Post() {
  const POST_ID = "less_of_the_internet";

  return (
    <PageFrame pageName='blog'>
      <BlogHeaderBox postId={POST_ID} />
      <div className="section">
        <h2 id="intro">Introduction</h2>
        <p>
          When you walk into a library or bookstore, the room around you is quiet, the shelves unmoving. Out of the entire shelf, you flip through one book at a time; perhaps you choose to buy it and bring it home. Buying a physical book, a CD, a piece of art, or even a magazine is a commitment of money and time. You'll consume it carefully, think about it, treasure it if you really like it.
        </p>
        <p>
          The Internet today is nothing like a quiet bookstore: instead, flashing colors, ads, reels, promotions, products, comments, and suggestions are thrown in our faces. In fact, many companies <a href="https://www.youtube.com/premium)">require us to pay to see *less*</a>! Like most of my peers, I don't consider this kind of content consumption to be intellectually valuable. Doomscrolling is near-universally considered 'brainrot', a feedback loop that tires us out and wastes our time.
        </p>
        <p>
          Fundamentally, this short-form world is only possible because <a href="https://cadenlee.dev/blog/defense_of_digital">the cost of copying data has reached zero</a>, allowing us to obtain any information at any time. But if information is more accessible than ever before, then why does life in the 21st century feel like <a href="https://knowyourmeme.com/memes/our-brains-are-shrinking">"our brains are shrinking"</a>?
        </p>
        <p>
          I argue that using the Internet today feels like losing braincells because of how we engage with media. I'll explain the concept of *forced minimalism* formerly imposed by scarcity, and *forced maximalism* imposed by major Internet companies today. I will then suggest that the zero-cost nature of the Internet offers a newer and in fact superior way to interact with media, but one that takes self-control: *minimalism by choice*.
        </p>
      </div>
      <div className="section">
        <h2 id="forced-minimalism">Minimalism out of scarcity</h2>
        <p>
          In the past, information was not readily accessible at the touch of a finger. Returning to the library example, we can easily see several barriers to obtaining information that existed until a few decades ago:
        </p>
        <ul>
          <li>Acquiring items like books takes time, money, and *intentional choice*</li>
          <li>Reading books takes *thought*</li>
          <li>Books that you own need to be stored and *take up space in the home or the office*</li>
        </ul>
        <p>
          Each of these barriers has its downsides, but also has consequences that lend the books value:
        </p>
        <ul>
          <li>When forced to choose books, we will choose ones that we are intrinsically motivated to study and enjoy, and will *care about them*</li>
          <li>When forced to think critically, we will *make connections and form knowledge*</li>
          <li>When forced to store books, we will *cultivate a personal sense of aesthetics*</li>
        </ul>
        <p>
          This is *forced minimalism*: we are limited in what actions we can take, but these limitations make every action we *do* take more meaningful. In this way, choosing, reading, and collecting books are valuable activities.
        </p>
      </div>
      <div className="section">
        <h2 id="forced-maximalism">The state of the Internet</h2>
        <p>
          Unlike reading books, being active on the Internet brings to mind declining attention spans, trolls and ragebait, misinformation, intrusive advertising, AI slop, and dangerous echo chambers. The Internet is a place where everyone (influencers, bots, and companies) wants to extract value from you via your engagement. Fundamentally, the rules of the game insist that profit is maximized when:
        </p>
        <ul>
          <li>Users don't have to make intentional choices, and are instead *fed content by an algorithm*</li>
          <li>Consuming the content takes *as little thought as possible*</li>
          <li>The amount of content that can be consumed is limitless and consuming a piece of content is *inconsequential*</li>
        </ul>
        <p>
          For that last bullet point, think about the most recent piece of short-form content you watched. Do you even remember what it was about? Many people don't.
        </p>
        <p>
          This is *forced maximalism*: we are coerced into taking many actions at once (e.g. consuming as much content as possible), and thus every action we take is meaningless. We expend energy and time without getting value for ourselves, hence feeling drained and at a loss.
        </p>
      </div>
      <div className="section">
        <h2 id="minimalism-by-choice">The Internet as a space for perfect minimalism</h2>
        <p>
          So is the Internet evil? Would we be better off going back to paper books and physical mail and landlines? I unequivocally say no, because unlike any other time in history, the 21st century affords us the unique ability of choice.
        </p>
        <p>
          We are no longer limited by the contents of local libraries and news stands: we can access news from any year, software for any task, music by any artist, and directions to any city with all of humanity as an open book. In this unlimited world, the value we get out of the Internet now depends on how we limit *ourselves*. You can choose to:
        </p>
        <ol>
          <li>Not limit how you use the Internet, opening its floodgates and drowning in maximalism as described above</li>
          <li>
            Limit how you use the Internet, getting value out of the things you engage with
            <ul>
              <li>Choosing what to watch/read/listen to and when, making sure it's something you care about</li>
              <li>Paying full attention to posts or comment threads, thinking about how you agree and disagree with them</li>
              <li>Saving your favorite posts, videos, songs, and articles; revisiting them once in a while</li>
            </ul>
          </li>
        </ol>
        <p>
          The latter option is *minimalism by choice*, in which we understand that "more is not always better". Unlike forced minimalism, we suffer no cost to acquire or share media, and can extend our intentions into whatever diverse and interesting fields we may be interested in. And unlike forced maximalism, we can curate what we love, care about it, research it, actually remember the last post we read or last video we watched without it being washed away into the polluted sea.
        </p>
      </div>
      <div className="section">
        <h2 id="applications">Applications</h2>
        <p>
          Minimalism by choice takes self-control, especially when the platforms we use daily are designed to be addictive. In practice, you need to identify and engage with the parts of the Internet that really matter to you, while consistently cutting out the rest.
        </p>
        <p>
          The following are a few practical ways I apply this principle.
        </p>
        <ul>
          <li>Ignore ads (use <a href="https://ublockorigin.com/">an adblocker</a>)</li>
          <li>Ignore ragebait or clickbait</li>
          <li>Ignore your recommendations, feed, or for-you page unless you specifically have the goal of discovering new content in mind (i.e. no doomscrolling)</li>
          <li>Don't spend longer watching/reading about an activity you enjoy (e.g. cooking, working out, or programming) than you actually spend doing it. This is something many people struggle with, and is the folly of self-improvement books<sup><a id="footnote-1-ref" href="#footnote-1">1</a></sup></li>
          <li>Don't participate in <a href="https://en.wikipedia.org/wiki/Snack_culture">snack culture</a>, or simply going on the Internet to kill time. There are much better things you could be doing<sup><a id="footnote-2-ref" href="#footnote-2">2</a></sup></li>
          <li>Don't multitask while watching videos as background noise, because you won't get as much value out of either activity. Remember that more is not always better</li>
          <li>
            Have a list of favorite artists, authors, and accounts; intentionally look out for new content from them
            <ul>
              <li>
                One cool example of this is RSS feeds (<a href="https://cadenlee.dev/rss.xml">check out mine</a>!)
              </li>
            </ul>
          </li>
          <li>
            Simply know why you're engaging with a piece of content. Despite my previous statements about brainrot I watch every Instagram reel my friends send me, no matter how pointless each one may be, because I care about my friends and that gives the process value
            <ul>
              <li>
                Note that even memes and 'brainrot' content can be valuable if consumed minimally and intentionally. I love great YouTube videos like <a href="https://www.youtube.com/watch?v=YAgJ9XugGBo">spinning fish 10 hours</a> and <a href="https://www.youtube.com/watch?v=siPzJD2tMDw">Bad Apple on Desmos</a>
              </li>
            </ul>
          </li>
        </ul>
        <p>
          As an interesting philosophical counterpoint, I specifically avoid imposing *forced* minimalism on myself. Many blog posts like this one advocate setting screen time limits, uninstalling social media apps, or deleting accounts. Though this may be effective in curbing bad habits, it does not agree with the *choice* part of minimalism by choice because it has costs (e.g. it's harder to communicate). To truly embrace the ideal of zero cost, we should give ourselves access to social media, group chats with friends, and all of the Internet whenever we *want* without restriction. Rather than limiting our potential, we should limit our choices through self-control. It's hard, but it gives us the responsibility and the agency of deciding exactly how we want to spend our time.
        </p>
      </div>
      <div className="section">
        <h2 id="saving-the-mind">Saving the mind and the world</h2>
        <p>
          Many of my peers are upset about the sheer shoddiness of the Internet nowadays. In particular, the amount of low-value AI slop articles and posts has been rapidly increasing, and with them come wasted resources, inauthenticity, and a general disappointment in humanity. It's reasonable to be offended. However, the best thing we can do is to stop putting energy into the things we don't care about, fundamentally breaking free of the engagement engine that fuels such slop in the first place.
        </p>
        <p>
          As a blog author, I could choose to be upset about companies potentially scraping my writing to improve their LLMs, but I prefer not to. No matter how much slop is produced, no matter how popular that slop may get, I'd rather be spending my time enjoying the activities and interactions I do care about. And maybe if more people start embracing this kind of attitude, the Internet will become a nicer place.
        </p>
      </div>
      <div className="section">
        <h2 id="footnotes">Footnotes</h2>
        <p id="footnote-1">
          1. I.e. the longer you spend reading about self-improvement, the less time you can spend improving your life{' '}
          <a href="#footnote-1-ref">^</a>
        </p>
        <p id="footnote-2">
          2. "Such as?" Talking to people, observing the scenery, thinking, stretching.{' '}
          <a href="#footnote-2-ref">^</a>
        </p>
      </div>
    </PageFrame>
  );
}

export default Post;
