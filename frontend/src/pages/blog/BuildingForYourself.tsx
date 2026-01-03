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
          Often when I go out to eat, I think about how I'd rate the restaurants I try.
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
        <p>
          Through the brief process of building this silly side project, I realized how much I've improved compared to when I worked on similarly-scoped projects in high school. Most of that improvement came from my experiences in bigger teams working on more significant projects. But considering how much fun I had with Cuisine, I also thought about the concept of <i>ownership</i>, and how it's important in individual and team projects alike. I'll discuss it more in this blog post.
        </p>
      </div>
      <div className="section">
        <h2 id="motivations">What motivates a personal project?</h2>
        <p>
          Let's define a real <i>personal project</i> as something you're making for yourself (not for your resume, an organization, or any of your other responsibilities). I'll be talking mainly about software in this post because it's what I'm most drawn to, but I believe these ideas are applicable to all types of projects.
        </p>
        <p>
          The purpose of such a project is whatever you decide: maybe you want to make a game to play with your friends, improve your browser's appearance with a new homepage, or automate some small task on your desktop for fun.
        </p>
        <p>
          With such a purpose, the success of the project is your own success. If you design it well, you're personally happy using it and proud to show it off; if it has bugs and usability issues, you personally suffer. If you write good code, it's easier for you to reach your goals and extend the project further; if you write bad code, you have only yourself to blame.
        </p>
        <p>
          In a personal project, your progress is not evaluated in the typical ways, like:
        </p>
        <ul>
          <li>Profit earned</li>
          <li>Hours worked</li>
          <li>Tickets completed or issues closed</li>
          <li>Tests passed</li>
          <li>Monthly active users</li>
        </ul>
        <p>
          Rather, progress is the unquantifiable answer to the question: "how well does it match your vision", or more simply, "how much do you like it?" Thus, your core motivation isn't to complete a series of tasks, to work for long hours, or to conform to a set of requirements. Though you may write up some requirements (like I did above), set aside time to work, or break that work down into tasks, the end goal is quite simply to have fun and be proud of your work.
        </p>
        <p>
          This perspective can be called <i>ownership</i>--it's your project, and when it succeeds so do you.
        </p>
      </div>
      <div className="section">
        <h2 id="building-ownership-personal">Building ownership in a personal project</h2>
        <p>
          We fundamentally feel a sense of ownership about all personal projects because of the motivations described above, but the way we approach building these projects can also strengthen that sense.
        </p>
        <p>
          One example is sharing projects with friends. In high school, I worked on a simple game called <a href="https://github.com/Cadecraft/tetrome-source">Tetrome</a> that was playable via a browser extension. After giving it to my friends to try, I enjoyed watching them test out the various modes, configure the controls, and so on; they also told me about bugs and intentionally tried to cause glitches in the block physics. This kind of game reflects personally on the developer--I was the one who had to fix the bugs, and if everyone wanted a new feature, I was the one who got to make that happen. By sharing the game, I felt prouder of my progress.
        </p>
        <p>
          You might also share code with other developers, such as by making open-source projects accessible online. Since the code you write is a reflection of yourself, you won't want to be embarrassed if someone else sees it. When I look back at my older projects like Tetrome, I find there's a lot that could be refactored, and I'm reminded of some unfortunate moments like <a href="https://github.com/Cadecraft/tetrome-source/issues/1">this issue</a> someone raised. Nowadays, when I work on new projects, I make decisions assuming someone else will see my code. This encourages me to be careful about readability and correctness (it always pays off, even if that "someone else" reading the code is just my future self). In this case, the ownership is my sense of responsibility over the quality of the code.
        </p>
        <p>
          These aspects both contributed to my enjoyment of the Cuisine development process (described above). By writing code that I was happy with, and shipping the features to my website for my friends to see, I had a great time building it. This is the exact kind of experience that would be ideal in a team project, too: meaningful progress, a pleasant environment, and a sense of accomplishment. So why isn't this always the case? Because ownership in team projects isn't always a guarantee.
        </p>
      </div>
      <div className="section">
        <h2 id="motivations-team">What motivates a team project?</h2>
        <p>
          Unlike purely personal projects, team projects are driven by a wide range of external motivations, not all of which might apply to their individual members. Some examples include:
        </p>
        <ul>
          <li>
            Fulfilling a societal or institutional need. My <a href="https://peterportal.org/">PeterPortal</a> team at UCI's ICS Student Council maintains a much-needed course planning service that's relied on by thousands of UCI students, and the other teams in the same organization must meet similar demands.
          </li>
          <li>
            Improving the skills of team members. Hackathon projects, like my team's <a href="https://github.com/Big-Dyl/IrvineHacks2025">IrvineHacks 2025 submission</a>, help people experiment with new technologies and get better at collaboration. The same applies to larger student teams like PeterPortal.
          </li>
          <li>
            Growing a userbase and making a profit. During my fellowship at UCI's Product Association, my product team worked on <a href="http://knickknackapp.com/">KnickKnack Marketplace</a> and researched market potential, our competitors, and monetization methods surrounding figurine trading.
          </li>
        </ul>
        <p>
          Because these motivations are shared, they may not line up with every member of the team. For instance, as a software engineer in the Product fellowship, I had initially joined to apply my technical skills and deploy an app, not to compare business ideas and create financial projections. As the purpose of the fellowship was to create a successful startup in the end--which fundamentally requires those business and financial considerations just as much as the engineering ones--this kind of mismatch means that ownership isn't always a guarantee from the start in teams.
        </p>
        <p>
          When the project motivation no longer matches the individual motivation, there's now also a mismatch between how successful the project is and how its progress is evaluated. Instead of creating a great project, the individual motivation may shift to the demands of the process:
        </p>
        <ul>
          <li>"finish this feature in a week"</li>
          <li>"match this design as closely as possible"</li>
          <li>"complete the task by the next meeting"</li>
        </ul>
        <p>
          Immediately, this means that short-term solutions will be preferred over long-term solutions, code quality will suffer, and requirements will be implemented without being questioned or considered thoroughly. More importantly, this means that the project becomes less enjoyable and authentic for those working on it.
        </p>
      </div>
      <div className="section">
        <h2 id="building-team">Building ownership in a team project</h2>
        <p>
          The solution, it turns out, may be to treat team projects as personal projects. Yes, they have (likely <i>very</i>) fundamentally different expectations, responsibilities, and degrees of freedom. But there are always ways to build for yourself, even when you're part of a team.
        </p>
        <p>
          The following considerations won't apply to every team project, but from my own experience, they've helped me and those around me. Note that you'd implicitly experience most of these in any personal project; consider how closely they align with the corresponding aspects above.
        </p>
        <h3>As a member</h3>
        <ul>
          <li>
            Be proud of your contributions. Especially in student projects, show your friends what you've been working on and encourage them to check out the project. If you think the project isn't worth being proud of, then figure out how to change that.
          </li>
          <li>
            Get to know your teammates. Teams are made of people, so if you get to know the people better, you'll have a more personal connection to the project as a whole. It's one thing to work with a peer, but another to work with a friend.
            <ul>
              <li>
                In the KnickKnack team, our conversations and meetups were what helped me really feel enthusiastic about our progress, because I got to understand everyone's unique goals and was inspired to help further them.
              </li>
            </ul>
          </li>
          <li>
            Bring up your own concerns and ideas. When possible, it's great to be able to take something from your mind to a real feature in production that you care about.
          </li>
          <li>
            Build things because it's fun. There's often a reason why you chose your role in a project--if you're a software engineer, hopefully it's because you like coding. So if coding is fun, <a href="https://dantedam.com/blog/for-the-love">you can just code</a>. Even when you're conforming to standards and guidelines, the more you work on a codebase, the more the project becomes your own.
          </li>
        </ul>
        <h3>As a lead</h3>
        <ul>
          <li>
            Lead by example. No one's done this better than my incredible PeterPortal predecesor and co-lead <a href="https://awesome-e.dev/experience/ics-student-council.html">Ethan</a>.
          </li>
          <li>
            Build community (see "get to know your teammates" above). When done naturally and genuinely, things like team socials and a strong team culture really can make a difference.
          </li>
          <li>
            Let everyone bring something to the table, encouraging members to raise concerns and implement their own ideas. When people think critically, even disagreeing with requirements at times, they're able to solve problems creatively and improve the project in unique ways. This means they truly care about the direction the project is going in.
          </li>
        </ul>
        <p>
          For those last few bullet points, I'm still experimenting and figuring out how else I can keep enhancing the PeterPortal team dynamic; this list will grow over time.
        </p>
      </div>
      <div className="section">
        <h2 id="takeaways">Takeaways</h2>
        <p>
          The reason I got into programming is because I like building things. Whether it's by myself or in teams, that won't change; all projects have their own freedoms and limitations, and I'll keep finding ways to enjoy contributing to them. Hopefully this post has given you some ways to do that as well.
        </p>
      </div>
    </PageFrame>
  );
}

export default Post;
