import React, { useEffect } from 'react';
import '../../styles/TownHall.css'; // Specific CSS file for the project
import townhall_1 from '../../images/townhall_1.png'; // Image for the project
import townhall_2 from '../../images/townhall_2.png'; // Image for the project
import townhall_data from  '../../images/townhall_data.png'; // Data for the project
import townhall_expo from '../../images/townhall_expo.png'; // Image for the project

function TownHall() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="project-page">
      <section className="section-overview">
        <h1>TownHall</h1>
        <h2>Community discourse application for college students</h2>
        <p>Built in collaboration with John Clark, Yishu Chen, and Ben Felter</p>
        <p><strong>Town Hall </strong>is a community discourse application aimed at engaging college students with hot-button topics that echo across campuses. Thus far, no matter how much university administrations attempt to provide safe spaces for students to share their views, their efforts are fruitless due to fear of being ostracized. As a result, students need an outlet carefully designed for this kind of discourse.</p>
        <p>We set out to design an application for those civically and socially minded college students to safely engage in discussions on current events. Through our ideation, platform safety became the most significant feature of our application. We tackled this by establishing sophisticated and descriptive norms through playful flows but also the confidence provided by a pseudonym. Nothing a user says in the app can be tied back to them.</p>
        <p>Of course, anonymity lowers inhibitions, which could be a negative if it led to trolls or flaming, so we also implemented a very clear and accessible report button that is on each comment directly next to the author’s pseudonym. In parallel to community flagging we also have an in-person moderation team that watches for any potentially harmful comments. This multi-pronged approach proved effective for the beta-launch of TownHall, and we acknowledge the need for a more robust content moderation classifier as the platform scales.</p>
        <p>In all, we created an app with little friction between a user and participation in engaging debate. Each day, all one must do to engage in provoking discussion is simply choose a position on a scale of “takes” on the daily issue and then type a response. From there, users can interact with other users through upvoting and downvoting comments and sending replies in thread.</p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/SxRnIbL2jGI?si=mg8c-ZkADXi_kgYD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <p><a href="https://github.com/jacktheclark/TownHallCS278/tree/final">[GitHub Repository]</a></p>
        <p>Scan with Expo Go Mobile App</p>
        <img src={townhall_expo} alt="TownHall Expo" className='expo-image'/>
      </section>

      <section className="section-design">
        <h2>Design</h2>
        <img src={townhall_1} alt="TownHall Design" className='prototype-image'/>
        <p>Upon opening the app, users are greeted with a slick and minimalistic dark-themed app. We hope to convey to users the reliability of the platform as well as a touch of mystery through our simple yet powerful design.</p>
        <p>New users are prompted to select a randomized pseudonym by clicking on a die, adding the first touch of fun and customization with low effort. Once logged in, users are prompted with a slider and a text box to express their opinions on the prompt of the day, an easy and quick task to complete. We prompt the user to respond before seeing what others have rated/commented to prevent the effects of social proof and biases. Although comments are not required, the format of the layout is meant to make it seem required to prompt people to engage. After submitting, users are able to see the average rating for the scale as well as all the comments by other users.</p>
        <img src={townhall_2} alt="TownHall Design" className='prototype-image'/>
        <p>The comments are shown in the color that matches where the author stands on the spectrum, leading to a page that is fun and colorful and that shows off the diversity of opinions (or perhaps the lack of it, depending on the question). This page gives users the opportunity to understand what other students think and get a sense of where they fit in on the spectrum. They can then engage further by upvoting/downvoting other comments or replying to them to spark deeper discussions.</p>
        <p>Overall, we designed our app to be straightforward, fun, and low-effort in order for busy students to want to engage and be able to do so easily.</p>
      </section>

      <section className="section-implementation">
        <h2>Implementation</h2>
        <p>We created TownHall with a React Native frontend and a Supabase backend. Users can fully authenticate by logging in or signing up with an email and password. Tied to each account is a pseudonym the user chooses when creating an account, which we handle on our backend and save under the UserInfo table. It serves as their display name and identifier throughout the app to promote anonymity in a fun way. The pseudonym system pulls from a GPT-generated list of approximately 50 adjectives and a list of around 50 nouns. This is accomplished by pulling from a Uniform PDF to receive two numbers between 0 and 1 and then multiplying each of them by the length of each of the lists and taking the floors. We used these numbers to then index into the lists and make the pairings.</p>
        <p>Each day our frontend pulls from the backend table Questions to display a daily prompt of our choosing. User responses to the prompt are displayed from a fetch request of the Comments table for the given post, which represents the comments to a given day’s prompt.</p>
        <p>Directly below each question is a slider that represents a choice of position on a scale. Poles of the scale are also stored under the Questions table, as Questions[lowerscale] and Questions[upperscale]. We fetch these along with the prompt itself each day. Sliding the slider and choosing a position on the scale assigns users a “spectrum” score, which we store in state and then attach it to a user’s response to the prompt under Comments[spectrum]. A spectrum store is an 8-byte float that can range from 0 to 10. We utilize the spectrum number to map to colors within a frontend-stored colors array and display the spectrum as a gradient. User comments are styled with the color of a user’s position on the spectrum. After submitting a response and accompanying spectrum value, we compute the aggregate participant response to that day’s question by fetching the spectrum scores from our backend Comments[spectrum] and averaging them together. We represent this average with a labelled arrow that appears under the slider. The slider is then deactivated such that users cannot change their input after seeing the average response.</p>
        <p>Upon a ‘submit’ state change we then fetch and render posted comments. Users can upvote or downvote comments, with the results showing up in the local state as well as being tracked in the backend under Comments[votes]. Moreover, there is functionality for comment reporting, which increments a Comments[reports] counter for each comment. When we see a concerning number of reports on a comment, we can choose to remove it and/or the user. Finally, users can reply to specific comments.</p>
        <p>Replies are tracked under a separate table called Replies. To identify which reply leads to which comments, replies have a field called Replies[comment_id] that tracks the comment to which it corresponds. Each comment, on creation, is assigned an id, and when we fetch comments to our frontend, we also fetch each comment’s corresponding replies by selecting by comment_id and grabbing only replies with that specific id.</p>
        <p>Users can choose to sort the comment feed in any of four ways: chronological order (newer first), popular, similar, and dissimilar. Sorting is set to chronological by default, which is done via a direct comparison of each comment’s “created_at” attribute, populated upon comment creation. Sorting by popularity is done by directly comparing each comment’s vote counts, and putting the comments with the highest vote count first. Sorting by similarity compares the absolute value difference of each comment’s spectrum value with the spectrum value of the authenticated user who is viewing the comments, placing the smallest magnitude of difference comments first. Sorting by dissimilarity does the same calculation as the similarity sorting, but places the highest magnitude of difference comments first.</p>
      </section>

      <section className="section-usage">
        <h2>Viral Usage</h2>
        <p>We launched our app to 10 of our friends/acquaintances and asked them to contribute over the period of a week. We used texts to serve as our daily notification system to remind users to contribute.</p>
        <p>Considering participation at the combination of commenting, replying to comments, voting, and reporting, the following users were the best on the platform:</p>
        <ul>
          <li><strong>PowerfulAlpaca:</strong> 3 comments, 0 replies, 11 votes, 0 reports (total participation: 14)</li>
          <li><strong>ZestfulOstrich:</strong> 5 comments, 1 reply, 6 votes, 0 reports (total participation: 12)</li>
          <li><strong>WittyPenguin:</strong> 3 comments, 5 replies, 2 votes, 0 reports (total participation: 10)</li>
          <li><strong>TriumphantPorcupine:</strong> 2 comments, 2 replies, 4 votes, 0 reports (total participation: 8)</li>
          <li><strong>UnstoppableGazelle:</strong> 2 comments, 0 replies, 6 votes, 0 reports (total participation: 8)</li>
        </ul>
        <p>However, the average participant in our study completed the following:</p>
        <ul>
          <li><strong>Average Commenting:</strong> About 1.87 comments per user who comments.</li>
          <li><strong>Average Replying:</strong> Approximately 1.75 replies per user who replies.</li>
          <li><strong>Average Voting:</strong> Around 3 votes per user who votes.</li>
        </ul>
        <p>This made us wonder about the distribution of users in our platform, bucketing based on MSB’s hierarchy of contributions.</p>
        <ol>
          <li>Moderators: Users who flagged other comments as harmful for the platform.</li>
          <li>Contributors: Users who post comments, like and reply to other’s posts.</li>
          <li>Repliers: Users who only like and reply to other’s posts but do not comment originally.</li>
          <li>Likers: Users who only vote on comments.</li>
          <li>Lurkers: Users who do not participate outside of giving their initial vote value.</li>
        </ol>
        <p>It turns out that during our beta test, all participants on the platform fell into the contributor category and above, meaning that every user ended up posting comments, liking, and replying to others' comments (there were no instances of users who only replied, liked, or lurked, respectively). Looking at this closer, we had two outstanding community moderators – Triumphant Porcupine and Zestful Panda – who reported 2 times. These messages, however, were actually harmless – contents of “yay!” and “meh”. Since there were no instances of harmful content in our trial, we presume these reports to be users testing out the feature. We acknowledge this may not be realistic to a full platform launch. Yet we also believe that this initial participation establishes clear descriptive norms of the platform for new users to follow.</p>
        <p>Considering the type of participation over time, we extrapolated each user's participation by categories of report, like, comment, and reply over the course of the study. We then aggregated these results together for a macro analysis of platform engagement.</p>
        <img src={townhall_data} alt="TownHall Data" className='data-image'/>
        <p>This data highlights a few noticeable trends. First, commenting spiked 3 days into the launch and then started to decline steadily. This might indicate that users were excited to participate at the outset, and then lost motivation to comment a few days in. Since replying to comments were somewhat steady, it appears that users would rather post their score response to the question and withhold their thoughts until they saw the average score and what others had said – replying to those comments after they knew where the average was.</p>
        <p>One theory to the sinusoidal nature of these participation results might be the day of the week users engage with social media. Since our user demographic is college students, it is logical to believe that students are busier with school work during the week, reserving weekends for more free time and social activities. If this is the case, we can intuit that the initial rise and fall of participation was due to the weekend timing (Thursday → Sunday). A lull in the action came during the start of the new week, and an increase in participation starting around the 4th/5th (mid-way through the week).</p>
        <p>One interesting result is liking mirrored commenting but at a lower level. As users started they were more likely to post, like a bit, and head out. Yet towards the end we see liking take a huge spike up and comments grow a little slower than the cycle, which may be an indication of participation starting to normalize – more users becoming loafers, and fewer users becoming contributors.</p>
        <p>The average participation per category per day over the whole study was the following:</p>
        <ul>
          <li><strong>Likes:</strong> 6.14 likes per day</li>
          <li><strong>Comments:</strong> 6.14 comments per day</li>
          <li><strong>Replies:</strong> 2.00 replies per day</li>
          <li><strong>Reports:</strong> 0.29 reports per day</li>
          <li><strong>Total:</strong> 14.57 activities per day</li>
        </ul>
        <p>Since replies are a higher form of engagement, we can see MSB’s hierarchy start to take shape. Liking and commenting are the highest forms of participation, followed by replying, followed by reporting. If we only consider the last three days of the study, these categories are bolstered by the participation hierarchy:</p>
        <ul>
          <li><strong>Likes:</strong> 9.33 likes per day</li>
          <li><strong>Comments:</strong> 6.00 comments per day</li>
          <li><strong>Replies:</strong> 2.00 replies per day</li>
          <li><strong>Reports:</strong> 0.00 reports per day</li>
          <li><strong>Total:</strong> 17.33 activities per day</li>
        </ul>
        <p>Looking at the actual content of the content of comments and replies, we ran a sentiment analysis to determine the types of discourse being held. Positive scores are greater than zero, negative scores are less than zero, and neutral scores are around zero. We found an average sentiment of comments of 0.1115 and average sentiment of replies of 0.0857.</p>
        <p>This means that both comments and replies were on average generally positive in tone or sentiment. If we break both comments and replies down into the three categories of neutral, positive, and negative, we saw the following distribution of sentiments:</p>
        <ul>
          <li><strong>Comments:</strong></li>
          <ul>
            <li>Neutral: 57.78% of comments</li>
            <li>Positive: 33.33% of comments</li>
            <li>Negative: 8.89% of comments</li>
          </ul>
          <li><strong>Replies:</strong></li>
          <ul>
            <li>Neutral: 78.57% of replies</li>
            <li>Positive: 21.43% of replies</li>
            <li>Negative: 0.00% of replies (no negative replies)</li>
          </ul>
        </ul>
        <p>Interestingly, the majority of comments and replies were neutral (replies significantly more so). Additionally, users would not reply negatively on other’s comments, but they were willing to post negative comments prior to seeing the results of the daily question. Recalling that reporting was extremely low during our trial, the sentiment findings are consistent – there was little to no need to report harmful content.</p>
        <p>Reflecting on the genuineness of comments and replies, we looked at the lexigraphical diversity (varied vocabulary) which is an indicator of genuine engagement. We found that comments and replies both had extremely high lexigraphical diversity (>.9881), meaning that word choice was unique and varied, supporting that our users engage genuinely with when commenting and replying.</p>
      </section>

      <section className="section-reflections">
        <h2>Design Reflections</h2>
        <h3>What Worked</h3>
        <ul>
          <li>Spectrum and Colors: The color-coded spectrum slider effectively captured and visualized how the user’s opinion compares to the average.</li>
          <li>Prompting for Engagement: Requiring users to respond to the daily question upon login boosted initial participation.</li>
          <li>Anonymity with Accountability: Pseudonyms combined with a robust reporting feature provided a safe yet accountable environment for sharing opinions.</li>
        </ul>

        <h3>What Didn't Work</h3>
        <ul>
          <li>Incentives for Continued Engagement: There was a noticeable drop in user interaction post-initial comment, indicating a need for better incentives to engage further through replying and upvoting.</li>
          <li>Relevance and Frequency of Topics: The choice and frequency of discussion topics sometimes failed to captivate users, potentially limiting deeper or prolonged discussions.</li>
        </ul>

        <h3>Learnings</h3>
        <ul>
          <li>We learned the necessity of creating incentives for engagement and the importance of topic relevance in community-driven platforms to prevent antisocial behavior.</li>
          <li>Improvements could be focused on enhancing user interaction through gamification and refining topic selection processes to better align with user interests potentially with input from the users.</li>
          <li>Alternatively, a list of injunctive norms could have been provided to encourage users to not only state their opinion succinctly with detail but also converse with others on the other side of the spectrum with respectful replies. Without an established user base to create descriptive norms for this, this would have been a helpful addition for early users unsure how to interact with the platform. Overall, we did not offer much in terms of instructions for users, which is a decision with the upside of fostering an open and welcoming environment but with the downside of confusing users and potentially dissuading an otherwise interested user from participating more.</li>
        </ul>
        <p>Looking towards the future, considering our engagement goals as a team of designers is paramount. We found that post-response user interaction was low, which means users engaged but did spent the majority of their time reading responses without engaging. While we do not want TownHall to feel like a ghost town, we believe that there is value today in a more purpose-driven application that is not solely focusing on driving engagement at the detriment of user benefit. We want to explore finding a balance between low-commitment participation and creating a bustling community.</p>
      </section>

      <section className="section-theory">
        <h2>Theory</h2>
        <h3>Our Thought Process</h3>
        <p>We’ve noticed that in person, discussions surrounding politics and other contentious topics often get overly heated or lack depth due to fear of judgment or consequences for sharing an unpopular opinion. Fizz provides a space for some engaging debates, but these discussions often get overshadowed by the large volume of posts (memes, thirst posts, event promotion etc.). We think the core problem with Fizz is that the descriptive norms baked into the design are hyper-casual and that the use of it is very open-ended to the user. It is much easier to make several low-effort attempts at a viral meme than to attempt to have an intellectual debate that yields a few upvotes and comments. With our app, we want to streamline all users on a given day down a path of conversation on just a single topic.</p>
        <p>Another thought of ours that led us to build TownHall is that there is a massive disconnect at universities between when the administration believes students want and what students actually want. We think this is because the current methods of collecting student feedback and opinions at universities often are accompanied by lots of friction and bloated commitment loops. As a result, university-fostered town halls often have minimally valuable results. Combining all these different values, we wanted to create a dedicated space for conversations surrounding contentious, relevant topics for college students to help students express their opinions without fear and let administrators better understand student needs.</p>
        <p>To make our app bustling and welcoming, we took into consideration different class concepts. One of the most important concepts we considered is how identity influences norms on social platforms. We learned from class that anonymity is good for engagement across political divides, conformity to group norms, stronger group identity and more creativity, but also results in greater disinhibition, leading to antisocial behavior. Taking all of this into consideration, we decided for our platform to be anonymous to foster better engagement for political and other potentially polarizing conversations. To achieve anonymity, we developed a pseudonym generation system that chooses from a few thousand possible adjective-noun pairings to generate users a name in the app. In order to better manage the potential negative outcomes of anonymity, all four of us will serve as moderators. We believe that we are qualified moderators since we are driven by the intrinsic motivation of wanting the best for our product, and as students at Stanford like our users, we also understand the context of the comments, which means we can tap into the community moderator strength of being “more likely to have context to make hard calls”. We also built a flagging mechanism for users to flag problematic posts and bring them to our attention. We recognize that setting good descriptive norms would be crucial in an anonymous context since users conform to that norm, so we bootstrapped slightly and pre-populated each question with a couple of authentic but harmless comments with a wide range of perspectives to set the norm and guide user behavior. We believe that anonymity along with bootstrapping, moderation and flagging would foster desired and healthy discourse on contentious topics in the most inclusive and respectful ways possible.</p>
        <p>Another aspect we considered and wanted to prevent is social loafing. We did a couple of things when designing to try to mitigate loafing. First, whenever the user signs in, we prompt them immediately with the question. The screen has two tasks: a slider and a text box. Since it’s two simple tasks on one page with a submit button, we hope to give people a sense of mystery (of what is to come) and the illusion that they must complete the two tasks to proceed (even though commenting is optional). Users cannot see the conversation of the day until they respond themselves. We believe that most people will have some thoughts, no matter how brief, and that it would be interesting to hear from them, so we hope to encourage participation this way. The only required action is choosing a position on the spectrum; users need not write anything if they do not want to do so. We also customize comment color display based on slider score and show spectrum average to make the user feel unique and heard, to make sure that they know they’ve contributed to the overall spectrum score. Since the spectrum responses are collected independently, before the users have a chance to see the average and other users’ responses, it could also serve as good crowdsourced data for student opinion for the admin with enough critical mass. Spectrum colors were intentionally made somewhat arbitrary and are positioned on a scale of hot pink at zero (the far left) and red at ten (the far right. We did not want to set the colors of the spectrum to be the traditional blue and red of the American dual-party system, so we could hopefully achieve nuanced debate without making anything too partisan. The goal is that we can perhaps lead students to discover commonalities and interesting discussions with people with whom they would not usually engage due to political identity differences.</p>
      </section>

      <section className="section-behavior">
        <h3>How People Actually Behaved</h3>
        <p>We believe that because of the anonymous system, people expressed their opinions openly and honestly–the comments all seemed very genuine. Because of the genuine and non-hostile norm we facilitated through bootstrapping, we didn’t have antisocial behavior at all (however we also recognize that because we know our users, they are less likely to sabotage the system).</p>
        <p>The concept of personalization and uniqueness in user experience design suggests that customizing elements can enhance user satisfaction and engagement. Users’ positive feedback on the color customization validated this idea.</p>
        <p>Because of the format where we prompt the user to express their opinion first, most people did actually respond to the prompt with both spectrum and answer. That said, we noticed that some of the comments are a little short, like “Bro”, which doesn’t express much. We also noticed that once users are on the feed page, they don't engage with the posts much (commenting/upvote/downvote) and become social loafers. We hypothesize that this is because users feel like they’ve reached the end goal and there’s no longer enough incentive to engage. Depending on how we look at this as designers, it could be a positive or a negative. At a minimum, students are still expressing their opinions and we give them a platform. At best, though, an actual conversation is fostered.</p>
        <p>Additionally, we had to remind the users to use the app in order to get responses. This highlights the need for a notification system and a gap in our initial understanding: intrinsic motivation alone might not be sufficient for sustained engagement. Users need external nudges to remain active participants. The concept of social loafing suggested that without a sense of individual accountability, users might not feel compelled to contribute actively. This was evident in the low number of comments and upvotes. The lack of interaction despite initial honest responses indicates that while users are willing to share their opinions, they might need more incentives or structural elements (e.g., gamification, recognition) to engage with others' contributions. Going forward, we may want to think about ways to incentivize users to be more motivated to contribute while being mindful to avoid motivation crowding. One idea we have currently is highlighting that student opinions could have influence on admin decisions to show that each and every one of their opinions matter and have power.</p>
      </section>

      <section className="section-conclusion">
        <h2>Conclusion</h2>
        <p>Overall, we believe that TownHall was successful in providing a safe space for students to engage openly and honestly with each other. We observed extremely high participation amongst our users, all of whom engaged in commenting and voting, proving there to be little inhibition for user engagement. Carefully crafting the UI and user flow instilled natural, intrinsic motivation amongst our users. We saw this play out through the generally positive sentiment with which users engaged, which strategically established the positive descriptive norms that are necessary for social proofing when growth takes place.</p>
        <p>With more time we would have liked to stress test the platform to see how users would react to harder topics and more negativity. One thing we would consider is how to introduce more guardrails for instances of flaming from heated debate and the occasional troll.</p>
        <p>In closing, our work highlights the importance of free, open discourse, especially centered towards young people who will become the next leading generation of the world. Socio-technical systems are well suited to handle these discussions in a productive way, and we are pleased to have validated this through the development of TownHall. Thank you for your time in reading this work.</p>
      </section>
    </div>
  );
}

export default TownHall;
