import React, { useEffect } from 'react';
import '../../styles/AutomatedZone.css'; // Specific CSS file for the project
import figure1 from '../../images/zone_figure1.png'; // Image file for the project

function AutomatedZone() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="automatedzone-page">
      <div className="header-section">
        <h1>Examining the Potential Automation of Strike Calling in Major League Baseball</h1>
        <p>Nate Fleischli, Riley Pittman, Dan Musachio</p>
        <p>Department of Computer Science, Stanford University</p>
        <p>Email: nathan23@stanford.edu, rileywp@stanford.edu, dmusachi@stanford.edu</p>
      </div>

      <section className="section-overview">
        <h2>Introduction and Motivation</h2>
        <p>The world of professional sports is shifting towards an automated decision-making process instead of a human-based decision-making process. In other words, referees are slowly being replaced by computers. Major League Baseball (MLB) is seriously considering shifting from human umpires (referees) to computer umpires. The umpire is tasked with deciding whether a pitch thrown by the pitcher is considered a strike or a ball. There exists a “strike-zone” relative to the dimensions of each batter and if the ball enters this theoretical zone, then the umpire will deem the pitch a strike. If the ball fails to enter the zone, the umpire calls a ball. So while it seems as if replacing humans with computers in order to determine if a pitch is a strike or a ball sounds rather straightforward, it is anything but.</p>
        <p>The sport of soccer had a fairly easy time implementing a similar feature: “Goal Line Technology”. With dozens of video cameras, a computer could far more accurately determine if a ball had “crossed the line” than even the best referees. However, the situation with baseball is different. With soccer, everyone (players, referees, spectators) can agree that if the entirety of the ball crosses the line, it is a goal. But with baseball, while the definition of a strike is “if the pitch enters the strike-zone”, there is a problem: there is no exact, widely agreed upon definition of what the “strike-zone” is. Different umpires in today’s MLB have different views on the dimensions of the strike-zone.</p>
        <p>Thus, it is difficult to model the “ideal” strike-zone; Minor League Baseball (the league below MLB) has implemented an electronic strike-zone and even they altered the dimensions of the strike-zone mid-season (changing the top of the zone from 54% of the batter’s height to 51%). But an automated strike-zone is needed. Right now in the MLB, a pitcher could throw two identical pitches to the same batter and the umpire could call one a “ball” and the other a “strike”. This kind of non-determinism negatively impacts the game of baseball for obvious reasons; the randomness of the decision making will benefit certain agents and hurt other agents. Thus, a model of the strike-zone for the purposes of automated strike calls is necessary to reduce error and bias in decision-making, assuming that the model of the strike-zone meets certain conditions.</p>
      </section>

      <section className="section-math">
        <h2>Mathematical Model and Fairness Criteria</h2>
        <h3>Model Set-Up</h3>
        <p>Let each pitch thrown by a pitcher to a batter be described with the following three variables:</p>
        <ul>
          <li><strong>h:</strong> The height of the batter</li>
          <li><strong>x:</strong> The horizontal absolute distance in inches from the center of home plate of the baseball when it crosses the plate</li>
          <li><strong>y:</strong> The vertical distance in inches from the ground of the baseball when it crosses the plate</li>
        </ul>
        <div className="image-container">
          <img src={figure1} alt="Strike Zone" />
        </div>
        <p>In the above figure, since the batter is 72 inches, and the ball crosses home plate at 54 inches above the ground and 5.2 inches to the left of the center of the plate, the above pitch would be represented as (h, x, y) = (72, 5.2, 54).</p>
        <p>We elected to take the absolute value of x because umpires would agree in theory, that whether the pitch is to the right or to the left of the plate should not be a factor in determining whether the pitch is a strike.</p>
        <p>We elected to not factor in whether the batter stands on the left or right side of the plate because umpires would agree that in theory, the positioning of the batter should not be a factor in the strike zone.</p>
        <p>All pitches (h, x, y) belong to one of three groups. If h ≤ 70, then (h, x, y) ∈ S. If 70 &lt; h ≤ 75, then (h, x, y) ∈ M. If 75 &lt; h, then (h, x, y) ∈ T. In words, if the batter's height is less than or equal to 70 inches, then the pitch belongs to group S, which is the group of pitches thrown to short batters. If the batter's height is greater than 70 inches and less than or equal to 75 inches, then the pitch belongs to group M, which is the group of pitches thrown to medium height batters. If the batter's height is greater than 75 inches, then the pitch belongs to group T, which is the group of pitches thrown to tall batters.</p>
        <p>Now, imagine there is a function F(h, x, y) which takes the inputs described above. This black box function assumes access to a collection of k umpires and their strike-calling decisions. Given a pitch, (in the form of (h, x, y)), each umpire either calls the pitch a strike or a ball. The function F(h, x, y) outputs the percentage of umpires in group K who called pitch (h, x, y) a strike. If F(h, x, y) = 1, all umpires in group K called (h, x, y) a strike. If F(h, x, y) = .5, then half of the umpires in group K called (h, x, y) a strike. Mathematically, Function F can be described as follows:</p>
        <p><center>F(h, x, y) = |1 ÷ k| ∑(n=1 to k) a_n </center></p>
        <p>Where k is the number of umpires and a_n is 1 if the nth umpire calls the pitch a strike and 0 if he calls it a ball.</p>
        <p>Let A(h, x, y) be a different function with the same inputs but instead outputs either 1 (for strike) or 0 (for ball). In other words, assume that A(h, x, y) is some proposed 2D strike zone for all h, x, and y. The function A(h, x, y) outputs 1 if the proposed pitch is in the strike zone, and 0 otherwise.</p>
        <p>Let U(h, x, y) be a similar function, but instead of a collection of umpires (like function F) or an automated strike zone (like function A), let function U be the decision making of a single umpire.</p>
      </section>

      <section className="section-fairness">
        <h3>Fairness Definition</h3>
        <h4>Equalized Odds</h4>
        <p>In order for a function A to satisfy equalized odds across groups S, M, and T, the following two sets of equations must be satisfied:</p>
        <p><center>Pr[A(h, x, y) = 1 | 1F(h, x, y) ≥ .7 ∧ (h, x, y) ∈ S] = Pr[A(h, x, y) = 1 | 1F(h, x, y) ≥ .7 ∧ (h, x, y) ∈ M] = Pr[A(h, x, y) = 1 | 1F(h, x, y) ≥ .7 ∧ (h, x, y) ∈ T]</center></p>
        <p>Similarly, the following set of equations must be satisfied.</p>
        <p><center>Pr[A(h, x, y) = 0 | 1F(h, x, y) &lt; .7 ∧ (h, x, y) ∈ S] = Pr[A(h, x, y) = 0 | 1F(h, x, y) &lt; .7 ∧ (h, x, y) ∈ M] = Pr[A(h, x, y) = 0 | 1F(h, x, y) &lt; .7 ∧ (h, x, y) ∈ T]</center></p>
        <p>In words, the first set of equations ensures that if the ground truth function (F) indicates that 70% or more of umpires believe the pitch is a strike, then Function A should determine the pitch to be a strike (output = 1) with the same probability regardless of the batter's height. The second set of equations is needed to ensure not just equalized odds among strikes called, but also equalized odds among balls called.</p>
        <p>We believe that a proposed function A must meet this criterion for the following reason: Consider a group of pitches to a short batter where for each pitch in the group, 90% of umpires would call the pitch a strike. Consider a different group of pitches to a tall batter where similarly, for each pitch in the group, 90% of umpires would call it a strike. If an automated model classifies one group of pitches as strikes 80% of the time and the other group 60% of the time, this will discriminate against certain groups of batters' heights and will introduce a new bias into baseball. So at minimum, for an automated strike-caller function A to be fair, it must satisfy equalized odds across batter heights when determining strikes and balls.</p>
        <h4>Accuracy Compared to Alternative</h4>
        <p>A proposed function A must also satisfy the following equation. Let N be the number of pitches we are testing the model on. (A reasonable number could be N=10,000) and P_n be the nth pitch and a shortened version of (h, x, y).</p>
        <p><center>∑(n=1 to N) (F(P_n) - A(P_n))^2 &lt; ∑(n=1 to N) (F(P_n) - U(P_n))^2 </center></p>
        <p>In words, the terms in this equation represent the following: For every pitch in the dataset, we take the sum of the difference (squared) between the predicted strike value of F and the actual strike value given by A. We then compare this summation with a real human umpire (U) compared to function F. We say that the proposed automated function A must outperform the umpire U. In other words, the function A across N pitches must output closer values to F than U. We believe this is a necessary equation to satisfy; If a single umpire is able to, on average, determine strikes and balls closer to the expected outcomes from a group of umpires than an automated model, we believe the single umpire is a superior choice to the automated model.</p>
      </section>

      <section className="section-related">
        <h2>Related Work</h2>
        <p>The automated strike-zone is much more complex than the automation of referees in other sports such as tennis or soccer, so it is difficult to find academic papers on the fairness of that automation. Due to this, we researched general computer vision fairness concerns. One paper from the FAccT conference in 2023 titled Fairness Indicators for Systematic Assessments of Visual Feature Extractors discusses the fairness, harms, and biases associated with computer vision systems, especially as they are deployed on a large scale. It argues that a systematic diagnosis of these things is needed because it is an important step towards building socially responsible systems. To help solve this, the authors of the paper propose three fairness indicators in order to quantify harms and biases, particularly focusing on harmful label associations, disparity in learned representations of social and demographic traits, and biased performance on geographically diverse images. The most important takeaways of their research that relate to our project were their fairness indicators, the results that showed training on larger and more diverse datasets significantly enhances the overall performance on geographically diverse images, and the importance of continuous evaluation of models in order to optimize the model and adapt to any changing conditions that may occur in the data.</p>
        <p>The computer vision paper introduces fairness indicators, and although we may not use the exact same indicators as those discussed in the paper, we could use similar ones in order to evaluate the performance of the automated strike-zone system. It is important to use these indicators to assess the model's fairness considering the different player demographics in baseball. Some players have a unique stance, some are much taller or shorter, etc. Additionally, the research paper dives into the impact of data size and domain on fairness indicators. Relating this to our paper, understanding the effects of data size and domain-specific factors on the automated strike-zone is essential and our dataset should consider a wide variety of player statistics and historical data. Lastly, as previously mentioned, the paper emphasized that it is crucial to continuously evaluate a model. In our case, we may need to adjust our fairness definition because it's possible that our current conditions are not met. We will need to monitor the model's accuracy and ensure that the two criteria conditions in the fairness definition are being satisfied.</p>
      </section>

      <section className="section-limitations">
        <h2>Limitations and Next Steps</h2>
        <p>While we have defined a method for fair determination of a strike, there are inherent limitations to the approach we have taken. The first being the definition of "pitch" being analyzed. Our model takes into account where the ball passes the plate at a certain x,y coordinate. While this is true for location, it does not take into account the movement direction of the pitch. Therefore, it is possible that two pitches cross the plate plane at the same coordinate, yet have two different movement directions and therefore are more or less likely to be called a strike by the umpire. For example, imagine a ball that crosses at a low x,y coordinate moving in a severe downward trajectory, bouncing before it reaches the catcher's mitt. This ball might be a strike by the coordinates, but a human umpire would not call this pitch a strike in practice. Thus using a distribution of umpire strikes (F), or automated defined zone (A), solely considering the coordinates of the pitch does not take into account the movement pattern which influences the output (ball, strike).</p>
        <p>Next, because our model uses the distribution of strikes called by umpires, it is likely that biases in the data itself will influence the output. Currently baseball statistics show that umpires are less likely to call a strike in the top of the zone on a shorter player, and bottom of the zone for a taller player. Therefore, when considering pitches in the top or bottom of the zone, in our setup it is more likely that the single umpire (U) will have a smaller error than automated zone (A) when compared to the distribution of umpires (F).</p>
        <p>Additionally, in practice a hitter can "shrink" the zone by squatting down, decreasing the vertical distance between the waist and the knees. Human umpires either respect the now shrunk distance in their definition of the strike-zone, or they project the true distance based on the batter's height. The latter is incredibly difficult and leads to more inconsistency due to the umpire having to adjust for the perceived height in real time. Thus, in our setup the single umpire (U) again is more likely to have a smaller error than automated zone (A) when compared to the distribution of umpires (F).</p>
        <p>Moving forward, there are opportunities to enhance our model by further enhancing the feature set of a pitch and cleaning the historical data of incorrect strikes and balls to reduce noise. We firmly believe that human umpires have played a crucial role in the sport of baseball by using their best judgment to define the strike zone to the best of their ability. Computer umpires, however implemented, should have a better error than a single human umpire.</p>
      </section>

      <section className="section-bibliography">
        <h2>Bibliography</h2>
        <p>Priya Goyal, Adriana Romero Soriano, Caner Hazirbas, Levent Sagun, and Nicolas Usunier. 2022. Fairness Indicators for Systematic Assessments of Visual Feature Extractors. In Proceedings of the 2022 ACM Conference on Fairness, Accountability, and Transparency (FAccT '22). Association for Computing Machinery, New York, NY, USA, 70–88. <a href="https://doi.org/10.1145/3531146.3533074" target="_blank" rel="noopener noreferrer">https://doi.org/10.1145/3531146.3533074</a></p>
      </section>

      <section className="section-appendix">
        <h2>Appendix</h2>
        <p>Additional materials and supplementary information can be found in the full report and appendix.</p>
      </section>

      <div className="video-container">
        <iframe 
          src="https://www.youtube.com/embed/ItZnE0WXlWg" 
          frameBorder="0" 
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
          title="Automated Zone Video"
        ></iframe>
      </div>
    </div>
  );
}

export default AutomatedZone;
