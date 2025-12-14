import '../../App.css'
import PageFrame from '../../components/PageFrame';
import BlogHeaderBox from '../../components/BlogHeaderBox';

function Post() {
  const POST_ID = "defense_of_digital";

  return (
    <PageFrame pageName='blog' hideDefaultMeta>
      <BlogHeaderBox postId={POST_ID} />
      <div className="section">
        <h2 id="intro">Introduction</h2>
        <p>
          Teachers, psychologists, and productivity enthusiasts tend to be <a href="https://www.npr.org/2016/04/17/474525392/attention-students-put-your-laptops-away">critical of digital notetaking</a>--at least <i>typed</i> notetaking--compared to handwriting with a pen and paper. Beyond forcing you to slow down and think, which improves retention, paper creates a "personal connection" to the material, some say. It has its own texture, its own physical presence in our lives. The process of handwriting is philosophically held to be more authentic than the process of using a computer.
        </p>
        <p>
          As a computer scientist, I'm inclined to fight back against these sentiments. Yes, paper may have merits, and the way we use information technology can cause huge problems (see short-form content, invasive digital advertising, declining attention spans), but I want us to believe, philosophically, that there is hope for a more ideal future in technological advancements--something that's critical for us in changing and challenging times.
        </p>
        <p>
          For the sake of simplicity, I'll be comparing handwritten paper notes with purely typed digital notes, putting aside intermixed mediums like a stylus on a digital tablet (or perhaps a typewriter), and offering a defense of the digital method's potential.
        </p>
      </div>
      <div className="section">
        <h2 id="complexities">Complexities</h2>
        <p>
          One of the most uncontested benefits of digital notetaking is the efficiency with which we can search, reorganize, and access notes. This is not merely a practical benefit, though; it's also a philosophical advantage.
        </p>
        <p>
          Taking inspiration from the analysis of algorithms in computer science, let us define <span className="codesmall">n</span> to be the amount (lines, words, etc.) we write. We can describe the <i><a href="https://en.wikipedia.org/wiki/Big_O_notation">complexity</a></i> of a process by identifying how the amount of resources required grows as <span className="codesmall">n</span> grows.
        </p>
        <p>
          The key difference between paper and digital writing is that paper takes up a sizeable amount of space in your house (think about your bookshelf) and many actions must be done by hand (or via printers, if you're really that serious about it). But text files on a computer, in the grand scheme of things, are like grains of sand on a beach, nothing compared to the big whales of video files and photo archives and gigabyte-sized games. For all intents and purposes, text takes no resources at all, and can move and shift independent of the medium that hosts it.
        </p>
        <table>
          <thead>
            <tr>
              <th>Resource usage</th>
              <th>Handwritten</th>
              <th>Digital</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Time to write</td>
              <td><span className="codesmall">O(n)</span></td>
              <td><span className="codesmall">O(n)</span></td>
            </tr>
            <tr>
              <td>Time to copy <span className="codesmall">k</span> times</td>
              <td><span className="codesmall">O(n·k)</span></td>
              <td><span className="codesmall">O(1)</span></td>
            </tr>
            <tr>
              <td>Time to send to <span className="codesmall">k</span> people</td>
              <td><span className="codesmall">O(k)</span></td>
              <td><span className="codesmall">O(1)</span></td>
            </tr>
            <tr>
              <td>Time to erase/mass-edit a page <span className="codesmall">k</span> lines long</td>
              <td><span className="codesmall">O(k)</span></td>
              <td><span className="codesmall">O(1)</span></td>
            </tr>
            <tr>
              <td>
                Time to search for a specific date/subject
                <br />(if you're well-organized)
              </td>
              <td><span className="codesmall">O(lg(n))</span></td>
              <td><span className="codesmall">O(1)</span></td>
            </tr>
            <tr>
              <td>Space taken up</td>
              <td><span className="codesmall">O(n)</span></td>
              <td><span className="codesmall">O(1)</span>*</td>
            </tr>
            <tr>
              <td>Lead/ink/pencils/pens needed</td>
              <td><span className="codesmall">O(n)</span></td>
              <td><span className="codesmall">O(1)</span></td>
            </tr>
            <tr>
              <td>Trees killed</td>
              <td><span className="codesmall">O(n)</span></td>
              <td><span className="codesmall">O(1)</span></td>
            </tr>
          </tbody>
        </table>
        <i>* See the sand analogy above</i>
        <p>
          In summary, though the actual values depend on various factors like your speed, organizational ability, and so on, these theoretical complexities give the digital a clear high ground: no matter how much you reasonably write, share (!, see below), and reorganize, you will never get bogged down by the limits of the physical world.
        </p>
      </div>
      <div className="section">
        <h2 id="information">Information wants to live</h2>
        <p>
          Your reams of notebooks and binders and college-ruled papers, if you don't have the heart to throw them away, beg to be shoved away into a closet somewhere, into big plastic boxes or archival cabinets, precisely because of their physical ponderousness (above). You'll forget about them until you start purging things because you've run out of space. Even the dreadful process of manually taking photos of paper notes seals them into large binary files such as PNG's. Only scans preserve actual text as data, and even those might not faithfully read your all-too-human handwriting.
        </p>
        <p>
          But beyond just easy accessibility (check your folders, do a quick search), digital notes are built to be shared--to live beyond your own mind. In my 2024-25 Humanities Core class at UCI, I took notes in Markdown then uploaded them to a shared Google Drive folder; lots of my classmates thanked me for the study material, since I caught key points that weren't in the lecturers' slides. Importantly, the act of sharing is made incredibly easy: just drag into the browser, send in a message, and so on. That's because the Internet is fundamentally a network about connecting computers, and thus connecting the people who use them.
        </p>
        <p>
          The more effectively we can share, compare, and discuss our writings, the more that information has a chance to <i>live</i>. This process shouldn't be restricted to such institutions as academic journals and research; it should instead reflect a broader societal ideal of openness that is able to thrive only because of technology.
        </p>
      </div>
      <div className="section">
        <h2 id="universal">Text is universal</h2>
        <p>
          Any file that stores data in plain text, such as a{' '}
          <span className="codesmall">.txt</span>,{' '}
          <span className="codesmall">.md</span>, or{' '}
          <span className="codesmall">.cpp</span> file,{' '}
          is instantly the most vital, universal, and time-resilient way to store information. Of course there are different encoding standards and such, but still, practically anyone with a computer can open your file; read it; and copy it somewhere else. People may stop using certain complicated file formats, but plain text will only be unreadable if we destroy every computer.
        </p>
        <p>
          In his <i>Republic</i>, Plato theorized a higher sort of universe composed of <i>Forms</i>: perfect blueprints, abstractions, or essences of things that are imperfectly mirrored in our own world. We can consider the Form of the Square, for example, to be the quadrilateral with four equal sides and four right angles, and one of its instances (called a <i>particular</i>) to be the square-like shape that your screen is rendering (□).
        </p>
        <p>
          There are many problems with this idea (see my first-year <a href="https://cadenlee2.github.io/archive/research_presentation.html">research project</a>), but it presents a useful vision of authenticity. What is <i>writing</i>? It is the recording of ideas through language that has been preserved in a visual form. That is, it is the production of text. And when such text is encoded unambiguously and universally in binary data, independent from the physical pieces of memory that it might currently reside on, it is far closer to the perfect ideal of writing than are the messy and uncertain scrawls produced with flecks of graphite upon the pulp of long-dead trees.
        </p>
      </div>
      <div className="section">
        <h2 id="takeaways">Takeaways</h2>
        <p>
          What does it mean for there to be a justification and ideal behind digital notetaking? In a practical sense, it means that when you take full advantage of your computer's capabilities, you're stepping into a potentially more satisfying experience. Personally, I recommend:
        </p>
        <ul>
          <li>Using a reliable and simple text editor, like <a href="https://www.vim.org/">Vim</a></li>
          <li>Organizing your files well (to achieve that essentially-<span className="codesmall">O(1)</span> lookup time)</li>
          <li>Using a standard language like <a href="https://en.wikipedia.org/wiki/Markdown">Markdown</a> to enrich your notes (e.g. with headings, italics, and links)</li>
          <li>Avoiding distraction by keeping as few tabs and windows open as possible</li>
          <li>And sharing your notes with those who might find them helpful</li>
        </ul>
        <p>
          Of course, it's hard to achieve these ideals, and some of us still prefer paper because of the texture, the sensation of writing, or the nuance we can produce through our penmanship, but that's okay. Paper isn't going anywhere--we haven't actually <i>lost</i> anything with the invention of computers. Rather, it's important to recognize that innovation continues to bring new possibilities that we could use to improve our lives if we're open to change.
        </p>
      </div>
    </PageFrame>
  );
}

export default Post;
