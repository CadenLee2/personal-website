import BlogFrame from '~/components/BlogFrame';
import { FootnoteContent, FootnoteRef } from '~/components/BlogFootnote';

function Post() {
  const POST_ID = "learn_to_cook";

  return (
    <BlogFrame postId={POST_ID}>
      <div class="section">
        <h2 id="intro">Introduction</h2>
        <p>
          To help my budget and escape <a href="https://cadenlee.dev/cuisine?id=brandy">the dining hall food</a>, I started cooking for myself in my apartment during my second year at UCI. Cooking was more fun than expected, and in this post I'll look at why.
        </p>
        <p>
          Note that I define <i>cooking</i> here to mean home cooking, mostly from scratch. This does include buying some reasonable grocery store products like soups, sauces, or premade dumplings, but microwaveable meals don't count as cooking. Instant ramen and boxed mac and cheese stand on a fine line, depending on what you do with them.
        </p>
      </div>
      <div class="section">
        <h2 id="objective">Cooking objectively improves your life</h2>
        <p>
          This is the most straightforward reason to cook.
        </p>
        <p>
          First, it saves money. If I were to make a fairly large serving of fried rice for dinner with plenty of vegetables, eggs, and chicken, that amounts to under $3<FootnoteRef num={1} />. At many restaurants, a smaller portion would be sold for over $10.
        </p>
        <p>
          Second, it'll most likely be <a href="https://www.health.harvard.edu/blog/home-cooking-good-for-your-health-2018081514449">healthier than eating out</a>. This of course depends on what you make, but it's quite clear that a homemade burger is healthier than McDonald's.
        </p>
        <p>
          And finally, it doesn't take <i>that</i> much time. With enough practice in concurrency, you can make, eat, and clean the dishes after nearly any simple meal in under an hour, or even under 30 minutes. When treating cooking not as a chore but as an intentional activity you enjoy (see below), it's very much worth it.
        </p>
      </div>
      <div class="section">
        <h2 id="learning-skills">Cooking is learned like any other skill</h2>
        <p>
          Surprising as it may be, cooking also helped me formalize how to learn skills. In the past, I struggled to admit that jumping straight into new activities by yourself isn't the best for learning. It can give you good experience, but real skill often takes dedicating yourself to best practices and precedents for a time.
        </p>
        <p>
          When I started cooking for myself, I avoided recipes, went based on assumptions, and didn't ask anyone for advice. I just did whatever felt right to me. The issue is that I didn't have enough experience for my sense of judgment to be helpful: I'd make unappealing stir-fries of cubed chicken and add spices just to see what happened. I didn't salt my pasta water, it was that bad.
        </p>
        <p>
          Improving meant admitting that my food could be better, that I knew very little, and that I should take seriously the advice of others with more experience. Cooking is particularly relevant here because out of all human traditions, it's one of the richest and most ubiquitous. The expertise of centuries of culinary advice from all around the world, modified and adapted by millions of people in kitchens every second, informs each of the recipes you find online, the traditions you've inherited from your family, and the tips from your friends for making better pasta sauce<FootnoteRef num={2} />. As a result, reading recipes, watching tutorials, and watching better cooks do their work gave me a much stronger basis than I could've gotten from experimenting on my own. Only after using these resources did cooking based on intuition start to become productive.
        </p>
        <p>
          I learned about the <a href="https://en.wikipedia.org/wiki/Shuhari">Shuhari</a> framework by chance through a programmer's <a href="https://kaihatsubu.com/posts/2020/07/06/shuhari/">blog post</a> a few months ago, and I find it fitting here<FootnoteRef num={3} />. It defines three steps to learning a skill:
        </p>
        <ol>
          <li>Follow existing principles, forms, and best practices rigidly, so that you can get an intuitive sense of judgment based on the advice of more experienced people. Try to rely on one teacher or a consistent set of resources. Without this basis, you're wandering aimlessly (this is the mistake I made at first with cooking).</li>
          <li>Now that you have a solid basis, break the rules as you try new things or experiment with contradictory advice. Note that you can only break out of a mold productively once such a mold exists (i.e. after Step 1).</li>
          <li>Free yourself completely from the mold and express your own sense of identity instinctively (I'm not even close to this point with cooking).</li>
        </ol>
        <p>
          I find that this applies not just to cooking, but to nearly any skill. For instance, many people have experienced these three steps with driving: learn the rules perfectly from your instructor to pass the driving test; start breaking the rules, like going slightly over the speed limit or taking rolling stops<FootnoteRef num={4} />; and eventually, you develop your own instinctive style of driving where you don't consciously think about how many feet before a turn to signal or how far behind other cars to stay on the freeway.
        </p>
        <p>
          If you never learned driving rigorously from an instructor, you wouldn't be aware of what rules you're breaking, and would probably drive dangerously. Similarly, in terms of software engineering, I credit my professional skill development to having gone through excellent <a href="https://awesome-e.dev/experience/ics-student-council.html">mentorship</a> in a project team. Only then was I able to create nuanced opinions on how to code and decide what principles I most valued.
        </p>
        <p>
          All this is to say that cooking too involves skill acquisition, so it is very much possible to improve at.
        </p>
      </div>
      <div class="section">
        <h2 id="skill-based">Cooking is skill-based</h2>
        <p>
          Beyond merely <i>involving</i> skill, I further consider cooking to be a <i>skill-based</i> pastime rather than an <i>accumulation-based</i> one. To compare the two concepts, compare two well-known games:
        </p>
        <ol>
          <li>
            Chess: the outcome of a match is determined entirely by the player's skill; if a professional player logs into any chess website, no matter how new their account may be, they'll be just as good. As such, progress is defined by improving that skill. Another example is my favorite browser game <a href="https://tetr.io/">TETR.IO</a>.
            <ul>
              <li><span class="codesmall">progress = f(skill)</span></li>
            </ul>
          </li>
          <li>
            Pokémon TCG: skill does matter (such as in battles), but a player's progression and sense of accomplishment is largely based on what cards they've accumulated over time. If their account (or physical collection) is lost, they'll have to spend years to get back to where they were.
            <ul>
              <li><span class="codesmall">progress = f(skill, your collection)</span></li>
            </ul>
          </li>
        </ol>
        <p>
          When it comes to other activities, we can similarly contrast cooking against something like residential gardening, which is accumulation-based in that it depends on the long-term status of your garden. While your skill at gardening <i>is</i> indeed critical, your sense of progress in gardening is also based on the health of your plants, the landscaping you've done, and the pots you've collected over the span of years<FootnoteRef num={5} />.
        </p>
        <p>
		On the other hand, nothing you cook can last longer than a day or two in your fridge; the only thing that tangibly changes before and after cooking a meal is your skill. It's true that you might enjoy using certain equipment or ingredients, but a good chef should be able to cook something good regardless of the kitchen they're in. Thus, cooking is almost entirely <i>skill-based</i>.
        </p>
        <p>
          Skill-based and accumulation-based activities are both fulfilling. However, what I like about cooking is that if we assume that skill only increases with time, then by definition you cannot lose long-term progress. If you discover a technique for frying eggs, an intuition for when to add salt, or a recipe for sauce, it's now part of your skillset forever.
        </p>
        <p>
          Additionally, cooking isn't easily quantifiable or gamifiable--no one cares how many hours you've spent in the kitchen if your food is still bad. Your skill can only be evaluated by the subjective question "how is the dish?" Nowadays people are constantly trying to maximize their step count, follower count, or Duolingo streak, so it can be refreshing to aim at simply <i>getting better at cooking</i>, and doing so <a href="https://cadenlee.dev/blog/building_for_yourself">for yourself</a>.
        </p>
      </div>
      <div class="section">
        <h2 id="why-does-this-matter">Why does this matter?</h2>
        <p>
          These are my personal preferences and experiences, but regardless of what activities you enjoy, it's good to think about what you're spending your time on and why you find meaning in it.
        </p>
        <p>
          I'm still not great at cooking, but I hope to improve with every dish I make. That in itself is satisfying.
        </p>
      </div>
      <div class="section">
        <h2 id="footnotes">Footnotes</h2>
        <FootnoteContent num={1}>
          <>
          Consider the following scenario (though these numbers aren't perfect and might not age well with inflation, you get the idea):
          <ul>
            <li>Fruits and vegetables are $2/lb</li>
            <li>Chicken is $4/lb</li>
            <li>Eggs are $2/dozen</li>
            <li>Rice is $1/lb</li>
            <li>Spices/seasonings are negligible</li>
            <li>So, adding the amounts up respectively: <span class="codesmall">$2/lb * 0.3 + $4/lb * 0.4 + $2/12 * 2 + $1/lb * 0.4 = $2.93</span>.</li>
          </ul>
          </>
        </FootnoteContent>
        <FootnoteContent num={2}>
          Thanks <a href="https://alexanderliu.com/">Alex</a>!
        </FootnoteContent>
        <FootnoteContent num={3}>
          I know there are <a href="https://en.wikipedia.org/wiki/Dreyfus_model_of_skill_acquisition">other models of skill acquisition</a> which could also apply here, but I like that Shuhari is simple with only 3 steps. Step 1 is expressed to some extent in pretty much all of these models, and that's the one I'm most focused on in this section.
        </FootnoteContent>
        <FootnoteContent num={4}>
          Not advised. This is simply an example from Californian popular culture.
        </FootnoteContent>
        <FootnoteContent num={5}>
          The "skill-based vs. accumulation-based" distinction isn't always clear-cut. For instance, a professional gardener might lend their expertise to many gardens at once without being tied down to any one of them; this would make their practice skill-based. Conversely, some cooking practices do involve accumulation over time (see <a href="https://en.wikipedia.org/wiki/Perpetual_stew">perpetual stews</a>).
        </FootnoteContent>
      </div>
    </BlogFrame>
  );
}

export default Post;
