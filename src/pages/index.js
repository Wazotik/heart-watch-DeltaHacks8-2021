import * as React from "react";
import { useState } from "react";

import Header from "../components/Header.js";
import "../global-styles/basics.css";
import * as styles from "./index-styles.module.css";
import walkthroughVideo from "../images/app-walkthrough-updated.mp4";
import demoVideo from "../images/demo-tutorial.mp4";
import { BiUpArrowAlt } from "react-icons/bi";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { GiDeathSkull } from "react-icons/gi";
import { RiTimerFill } from "react-icons/ri";

import { BsDownload } from "react-icons/bs";
import { SiFitbit } from "react-icons/si";
import { GiCheckMark, GiNightSleep } from "react-icons/gi";

const IndexPage = () => {
	const [scrollPositionY, setScrollPositionY] = useState(0);
	const [topButtonHovered, setTopButtonHovered] = useState(false);

	useScrollPosition(({ prevPos, currPos }) => {
		setScrollPositionY(currPos.y);
	});

	return (
		<>
			<Header />
			<a
				style={{
					opacity:
						scrollPositionY < -50
							? topButtonHovered
								? "1"
								: "0.5"
							: "0",
					transition: "opacity 0.2s ease",
				}}
				onMouseEnter={() => setTopButtonHovered(true)}
				onMouseLeave={() => setTopButtonHovered(false)}
				href="#top"
				className={styles.toTopButton}
			>
				<BiUpArrowAlt size={80} />
			</a>
			<main>
				<div className={styles.infoContainer}>
					<div className={styles.infoTitle}>
						{/* Your Watch Can Save Your Life */}
						Listen to your{" "}
						<span
							style={{
								color: "var(--mylightred)",
							}}
						>
							heart.
						</span>
						<br />
						It's telling you{" "}
						<span
							style={{
								color: "var(--mylightred)",
							}}
						>
							something.
						</span>
					</div>
					<div className={styles.infoDesc}>
						Heart attacks are one of the most common causes of
						deaths today. Heart-Watch puts your health first by
						using your smart watch to let you know if you're at a
						risk for cardiac disease and predicting whether you're
						having a heart attack during sleep.
					</div>
				</div>
				<div className={styles.phoneImage}>
					<img
						src={require("../images/app-img.png").default}
						alt=""
					/>
				</div>
			</main>
			<div className={styles.spacer}></div>

			<section
				id="problem"
				style={{
					marginBottom: "10rem",
					marginTop: "5rem",
				}}
			>
				<div className={styles.sectionTitle}>
					<h2>Why should you care?</h2>
				</div>
				<div className={styles.problemMain}>
					<div className={styles.problemCard}>
						<div className={styles.skullIcon}>
							<GiDeathSkull size={200} />
						</div>
						<div className={styles.problemText}>
							According to the World Health Organization,{" "}
							<span
								style={{
									color: "var(--mydarkred)",
									fontWeight: "bold",
								}}
							>
								the leading cause of death globally
							</span>
							is ischaemic heart disease
						</div>
					</div>
					<div className={styles.problemCard}>
						<div className={styles.timerIcon}>
							<RiTimerFill size={230} />
						</div>
						<div className={styles.problemText}>
							According to the Centers for Disease Control and
							Prevention (CDC), in the United States
							<span
								style={{
									color: "var(--mydarkred)",
									fontWeight: "bold",
								}}
							>
								1 person dies every 36 seconds
							</span>{" "}
							from heart disease
						</div>
					</div>
					<div className={styles.problemCard}>
						<div className={styles.sleepIcon}>
							<GiNightSleep size={230} />
						</div>
						<div className={styles.problemText}>
							According to Roberto Manfredini, professor of
							internal medicine at the University of Ferrara in
							Italy,{" "}
							<span
								style={{
									color: "var(--mydarkred)",
									fontWeight: "bold",
								}}
							>
								the most dangerous times for a heart attack to
								occur are the morning and the last phase of
								sleep.
							</span>
						</div>
					</div>
				</div>
			</section>

			<div className={styles.spacer2}></div>

			<section
				id="solution"
				style={{
					backgroundColor: "#D80032",
					color: "#EDF2F4",
					minHeight: "100vh",
				}}
			>
				<div className={styles.sectionTitle}>
					<h2
						style={{
							color: "var(--mylightgray)",
						}}
					>
						How it works
					</h2>
				</div>

				<div className={styles.steps}>
					<div className={styles.step}>
						<div className={styles.downloadIcon}>
							<BsDownload size={150} color="" />
						</div>
						<div className={styles.downloadText}>
							Download and open our app
						</div>
					</div>
					<div className={styles.step}>
						<div className={styles.fitbitIcon}>
							<SiFitbit size={150} color="#00B0B9" />
						</div>
						<div className={styles.fitbitText}>
							Connect to the FitBit app
						</div>
					</div>
					<div className={styles.step}>
						<div className={styles.checkmarkIcon}>
							<GiCheckMark size={150} color="#008000" />
						</div>
						<div className={styles.checkmarkText}>
							You're good to go!
						</div>
					</div>
				</div>

				<div className={styles.solutionMain}>
					<div className={styles.solutionCard}>
						<div className={styles.featureTitle}>Features</div>
						<div className={styles.featureName}>Heart Attack Warning System</div>
						<p>
							Based on our research, a heart attack can be
							detected by analysing irregularities in heart beat
							and blood oxygen level. The Heart-Watch app analyzes
							all the user's health data, including pulse
							irregularities and blood oxygen levels, from the
							user's smart-watch. This information is processed
							through a sophisticated machine-learning algorithm
							to predict if the user is having a heart attack in
							their sleep. In case of a heart attack, emergency
							services will be automatically called unless
							cancelled by the user.
						</p>
						<div className={styles.featureName}>Cardiac Disease Risk</div>
						<p>
							In addition to the heart attack warning feature, the
							app analyses all users' health data through a
							machine-learning algorithm to identify their risk of
							cardiovascular disease. The user may download this
							analysis to share with a healthcare professional.
							This analysis may help people identify early
							symptoms of cardiovascular disease and prompt
							preventative treatment. We currently have a working
							prototype of this machine learning algorithm in
							Python, which averages about 71% accuracy. We expect
							its accuracy to rise to 97% as we collect more data.
						</p>
					</div>
				</div>
			</section>
			<div className={styles.spacer3}></div>

			<section id="demo" className={styles.demoSection}>
				<div className={styles.demoMain}>
					<div className={styles.demoTitle}>
						<h2>Demo</h2>
					</div>
					<div className={styles.tutorialVideo}>
						<video
							width={1000}
							autoPlay={true}
							loop={true}
							controls={true}
							playsInline
							muted={true}
						>
							<source src={walkthroughVideo} type="video/mp4" />
						</video>
					</div>
				</div>
			</section>
			
			<section id="tutorial" className={styles.tutorialSection}>
				<div className={styles.tutorialTitle}>
					To get started either:
				</div>
				<div className={styles.tutorialMain}>
					<div className={styles.tutorialVideo}>
						<h3>Watch the tutorial video</h3>
						<video
							width={600}
							autoPlay={true}
							loop={true}
							controls={true}
							playsInline
							muted={true}
						>
							<source src={demoVideo} type="video/mp4" />
						</video>
					</div>
					<div className={styles.demoOr}>OR</div>
					<div className={styles.tutorialInstructions}>
						<h3>Follow these steps</h3>
						<ol>
							<li>
								Start by downloading the CSV file that contains
								the data of about 70,000 people to train and
								test the model. It can be downloaded from here
								<a
									target="_blank"
									href="https://www.kaggle.com/sulianova/cardiovascular-disease-dataset/code"
								>
									(Kaggle link)
								</a>{" "}
								or here{" "}
								<a
									target="_blank"
									href="https://drive.google.com/file/d/1wLCqJm-IQWFXEAwE1VF0q4hLSnWKCWHl/view"
								>
									(Google Drive link)
								</a>
							</li>
							<li>
								Now that you have your file ready, go to the
								google collab file{" "}
								<a
									target="_blank"
									href="https://colab.research.google.com/drive/1pnLjfUC6I0b1GqWdHXXGmdfFrxChU3yP?usp=sharing"
								>
									(Google Collab file link)
								</a>
							</li>
							<li>From the 'Runtime' menu, select 'Run All'</li>
							<li>
								You will see a place to upload files under the
								first cell. Upload the CSV file we just
								downloaded there
							</li>
							<li>
								Then, you can scroll down to the 'Final
								Function' which should have started running
							</li>
							<li>
								After you see an input field, you can interact
								with the function
							</li>
							<li>
								Try typing in 'help' to get a list of all the
								functions you can use here
							</li>
							<li>
								If you type in 'run', the function will use the
								health data from the cell above and give what
								the model predicts the cardiac condition is
							</li>
							<li>
								You can type in ‘quit’ to stop the function and
								make changes to the health data in the cell
								above, run that cell and then the final function
								cell to try what the model predicts on you own
								manually entered values!
							</li>
							<li>
								We have included a copy of the original values,
								as comments in the cell below if you want to
								revert back to the original values
							</li>
						</ol>
					</div>
				</div>
			</section>


			<section id="next" className={styles.nextSection}>
				<div className={styles.nextTitle}>
					<h2>What's next?</h2>
				</div>
				<div className={styles.nextMain}>
					<div className={styles.nextText}>
						<p>
							<b>Vision 1 - Increasingly Accurate Predictions</b>{" "}
							There is already an abundance of research and data
							related to the risk factors of cardiac disease.
							According to our reading, pulse detection has high
							sensitivity but low specificity for heart attack
							detection, while pulse oximetry has low sensitivity
							but high specificity. If we run both of these
							metrics through a machine learning algorithm, we can
							expect higher sensitivity and specificity rates.
							Smart-watches measure more than just these two
							metrics. New models can also, when prompted, collect
							ECG and blood-pressure information, all of which may
							improve predictions. As smart-watches become more
							popular and powerful, we can expect larger data
							pools for our machine learning algorithms.
							Additionally, as research in artificial intelligence
							grows, we can improve the way our algorithms are
							constructed. Overall, our predictions will become
							increasingly accurate, and we may uncover more
							connections around risk factors of cardiac disease
						</p>
						<p>
							<b>Vision 2 - User-Friendly Health Insights</b>{" "}
							The information from smart-watch
							devices uncovers many secrets of one's health.
							However, it isn't easy for the average user to make
							insightful conclusions from all their data.
							Additionally, existing UIs for accessing health data
							is quite detailed and complex. The Heart-Watch app
							will use AI algorithms to analyse users' health data
							and present it through engaging and educational
							graphical content. It is known that{" "}
							<a
								target="_blank"
								href="https://www.nia.nih.gov/health/heart-health-and-aging#:~:text=Adults%20age%2065%20and%20older,risk%20of%20developing%20cardiovascular%20disease"
							>
								adults age 65 and older are more likely than
								younger people to suffer from cardiovascular
								disease
							</a>
							. Heart-Watch UI is designed to be incredibly
							accessible and easy to use for older adults. These
							sophisticated data analyses can predict cardiac
							disease and instil early preventative treatment, all
							in all, saving lives.
						</p>
					</div>
				</div>
			</section>

			<section id="citations" className={styles.citationSection}>
				<div className={styles.citationMain}>
					<div className={styles.citationTitle}>
						<h2>Citations</h2>
					</div>
					<ul>
						<li>
							Cooke G, Doust J, Sanders S. Is pulse palpation
							helpful in detecting atrial fibrillation? A
							systematic review. J Fam Pract. 2006
							Feb;55(2):130-4. PMID: 16451780.{" "}
							<a href="https://pubmed.ncbi.nlm.nih.gov/16451780/">
								 https://pubmed.ncbi.nlm.nih.gov/16451780/
							</a>
						</li>
						<li>
							Masip J, Gayà M, Páez J, Betbesé A, Vecilla F,
							Manresa R, Ruíz P. Pulse oximetry in the diagnosis
							of acute heart failure. Rev Esp Cardiol (Engl Ed).
							2012 Oct;65(10):879-84. English, Spanish. doi:
							10.1016/j.recesp.2012.02.022. Epub 2012 Jul 4. PMID:
							22766468.{" "}
							<a href="https://pubmed.ncbi.nlm.nih.gov/22766468/">
								 https://pubmed.ncbi.nlm.nih.gov/22766468/
							</a>
						</li>
						<li>
							World Health Organisation. (2020, December 9). The
							top 10 causes of death. Retrieved from
							<a href="https://www.who.int/news-room/fact-sheets/detail/the-top-10-causes-of-death">
								 https://www.who.int/news-room/fact-sheets/detail/the-top-10-causes-of-death
							</a>
						</li>
						<li>
							Centers for Disease Control and Prevention. (2021,
							September 27). Heart Disease Facts. Retrieved from
							<a href="https://www.cdc.gov/heartdisease/facts.htm">
								 https://www.cdc.gov/heartdisease/facts.htm
							</a>
						</li>
						<li>
							Blue, L. (2008, July 22). When Are You Most Likely
							to Have a Heart Attack? Retrieved from
							<a href="http://content.time.com/time/health/article/0,8599,1825044,00.html">http://content.time.com/time/health/article/0,8599,1825044,00.html</a>
						</li>
					</ul>
				</div>
			</section>

			<footer>Copyright &#169; 2022</footer>
		</>
	);
};

export default IndexPage;
