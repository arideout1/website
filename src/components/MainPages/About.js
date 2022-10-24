import React, { useState, useEffect } from 'react';
import styles from './About.module.css';
import Divider from '../Utils/Divider';
import { DividerChoices } from '../Utils/Divider';
import Button from '../Utils/Button';
import ExampleSwiper from '../Swipers/ExampleSwiper';
import ExampleSwiperMobile from '../Swipers/ExampleSwiperMobile';
import USC from "../../USC-Logo.png";
import JobSwiper from '../Swipers/JobSwiper';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

function About() {

    const [renderMobile, setRenderMobile] = useState(window.innerWidth < 760);

    useEffect(() => {
        function handleResize() {
            setRenderMobile(window.innerWidth < 760)
            console.log('resized to: ', window.innerWidth, 'x', window.innerHeight)
            console.log(renderMobile)
        }
        window.addEventListener('resize', handleResize)
    });

    const Mission =
        < div className={styles.section} >
            <div className={styles.titleContainer}>
                <div className={styles.title}>
                    My Mission
                </div>
            </div>
            <div className={styles.sectionContainer}>
                <div className={styles.body}>
                    I build frontends that are intuitive, sleek, and fast. For too long, the world of software has been dominted by
                    tools built with a lack of care for the experience of the average user. Software should be accessable to everyone, not
                    just those of us who were lucky enough to grow surounded by technology. My goal is to master frontend development so
                    that I can create products that users are excited to interact with.
                </div>
                <Divider size={DividerChoices.Small} tint={DividerChoices.Light} direction={DividerChoices.Horizontal} />
                <div className={styles.subSection}>
                    <div className={styles.sectionTitle}>Sleek</div>
                    <div>
                        Software should be appealing
                    </div>
                    <div className={styles.exampleButtonsContainer}>
                        <div className={styles.exampleButton}>
                            Things should look like this
                            <Button to="/about" buttonText="Fun" />
                        </div>
                        <div className={styles.exampleButton}>
                            Not like this
                            <button>Ugly</button>
                        </div>
                    </div>
                </div>
                <Divider size={DividerChoices.Small} tint={DividerChoices.Light} direction={DividerChoices.Horizontal} />
                <div className={styles.subSection}>
                    <div className={styles.sectionTitle}>Intuitive</div>
                    <div>
                        Software should be easy to use
                    </div>
                    <div className={styles.swiperContainer}>
                        <ExampleSwiper />
                    </div>
                </div>
                <Divider size={DividerChoices.Small} tint={DividerChoices.Light} direction={DividerChoices.Horizontal} />
                <div className={styles.subSection}>
                    <div className={styles.sectionTitle}>Fast</div>
                    <div className={styles.sectionBody}>
                        I stay up to date on the lastest technologies, industry trends and code tricks to ensure that the frontends
                        I build are always cutting edge and responsive. To see more about the technologies I've used and the projects they've been a part of, check out my portfolio page
                    </div>

                    <div className={styles.centerButton}>
                        <Button to="/portfolio" buttonText="View portfolio" />
                    </div>
                </div>
            </div>
        </div >

    const missionMobile =
        <div className={styles.section} >
            <div className={styles.titleContainerMobile}>
                <div className={styles.titleMobile}>
                    My Mission
                </div>
            </div>
            <div className={styles.sectionContainer}>
                <div className={styles.body}>
                    I build frontends that are intuitive, sleek, and fast. For too long, the world of software has been dominted by
                    tools built with a lack of care for the experience of the average user. Software should be accessable to everyone, not
                    just those of us who were lucky enough to grow surounded by technology. My goal is to master frontend development so
                    that I can create products that users are excited to interact with.
                </div>
                <Divider size={DividerChoices.Small} tint={DividerChoices.Light} direction={DividerChoices.Horizontal} />
                <div className={styles.subSection}>
                    <div className={styles.sectionTitle}>Sleek</div>
                    <div>
                        Software should be appealing
                    </div>
                    <div className={styles.exampleButtonsContainerMobile}>
                        <div className={styles.exampleButtonMobile}>
                            <Button size={"xs"} to="/about" buttonText="Fun" />
                        </div>
                        <div className={styles.exampleButtonMobile}>
                            <div className={styles.uglyButtonContainerMobile}>
                                <button>Ugly</button>
                            </div>

                        </div>
                    </div>
                </div>
                <Divider size={DividerChoices.Small} tint={DividerChoices.Light} direction={DividerChoices.Horizontal} />
                <div className={styles.subSection}>
                    <div className={styles.sectionTitle}>Intuitive</div>
                    <div className={styles.intuitive}>
                        Software should be easy to use
                    </div>
                    <div className={styles.swiperContainer}>
                        <ExampleSwiperMobile />
                    </div>
                </div>
                <Divider size={DividerChoices.Small} tint={DividerChoices.Light} direction={DividerChoices.Horizontal} />
                <div className={styles.subSection}>
                    <div className={styles.sectionTitle}>Fast</div>
                    <div className={styles.sectionBody}>
                        I stay up to date on the lastest technologies, industry trends and code tricks to ensure that the frontends
                        I build are always cutting edge and responsive. To see more about the technologies I've used and the projects they've been a part of, check out my portfolio page
                    </div>

                    <div className={styles.centerButton}>
                        <Button size={'xs'} to="/portfolio" buttonText="View portfolio" />
                    </div>
                </div>
            </div>
        </div >

    const Background = <div className={styles.section}>
        <div className={styles.titleContainer}>
            <div className={styles.title}>
                My Background
            </div>
        </div>
        <div className={styles.sectionContainer}>
            <div className={styles.subSection}>
                <div className={styles.sectionTitle}>Education</div>
                <div className={styles.exampleButtonsContainer}>
                    <img className={styles.img} src={USC} alt="" />
                    <div className={styles.backgroundSection}>
                        I recieved a BS in Computer Science at the University of Southern California
                    </div>
                </div>
            </div>
            <Divider size={DividerChoices.Small} tint={DividerChoices.Light} direction={DividerChoices.Horizontal} />
            <div className={styles.subSection}>
                <div className={styles.sectionTitle}>Work Experience</div>
                <div className={styles.swiperContainer}>
                    <JobSwiper />
                </div>
            </div>
            <Divider size={DividerChoices.Small} tint={DividerChoices.Light} direction={DividerChoices.Horizontal} />
            <div className={styles.subSection}>
                <div className={styles.centerButton}>
                    <div className={styles.sectionTitle}>Learn more about my background</div>
                    <Button iconType="fa" icon={"faLinkedin"} type="a" to="https://www.linkedin.com/in/adam-rideout-505baa127" buttonText="LinkedIn" />
                </div>
            </div>
        </div>
    </div>

    const BackgroundMobile = <div className={styles.section}>
        <div className={styles.titleContainerMobile}>
            <div className={styles.titleMobile}>
                My Background
            </div>
        </div>
        <div className={styles.sectionContainer}>
            <div className={styles.subSection}>
                <div className={styles.sectionTitle}>Education</div>
                <div className={styles.exampleButtonsContainer}>
                    <img className={styles.img} src={USC} alt="" />
                    <div className={styles.backgroundSectionMobile}>
                        Computer Science, B.S.
                    </div>
                </div>
            </div>
            <Divider size={DividerChoices.Small} tint={DividerChoices.Light} direction={DividerChoices.Horizontal} />
            <div className={styles.subSection}>
                <div className={styles.sectionTitle}>Work Experience</div>
                <div className={styles.swiperContainer}>
                    <JobSwiper />
                </div>
            </div>
            <Divider size={DividerChoices.Small} tint={DividerChoices.Light} direction={DividerChoices.Horizontal} />
            <div className={styles.subSection}>
                <div className={styles.centerButton}>
                    <div className={styles.sectionTitle}>Learn more about my background</div>
                    <Button size={'small'} iconType="fa" icon={"faLinkedin"} type="a" to="https://www.linkedin.com/in/adam-rideout-505baa127" buttonText="LinkedIn" />
                </div>
            </div>
        </div>
    </div>

    const ProSkills = <div className={styles.section}>
        <div className={styles.titleContainer}>
            <div className={styles.title}>
                My Skills
            </div>
        </div>
        <div className={styles.sectionContainer}>
            <div className={styles.subSection}>
                <div className={styles.sectionTitle}>Professional Skills</div>
                <div className={styles.skillsContainer}>
                    <div className={styles.skillsRow}>
                        <div className={styles.skillButton}>
                            <Button type="a" to="https://www.javascript.com/" buttonText="Javascript" iconType="svg" icon="javascript" size="small" ></Button>
                        </div>
                        <div className={styles.skillButton}>
                            <Button type="a" to="https://redux.js.org/" buttonText="Redux" iconType="svg" icon="redux" size="small" ></Button>
                        </div>
                        <div className={styles.skillButton}>
                            <Button type="a" to="https://www.java.com/en/" buttonText="Java" icon="java" iconType="svg" size="small" ></Button>
                        </div>
                    </div>
                    <div className={styles.skillsRow}>
                        <div className={styles.skillButton}>
                            <Button type="a" to="https://reactjs.org/" buttonText="React" iconType="svg" icon="react" size="small" ></Button>
                        </div>
                        <div className={styles.skillButton}>
                            <Button type="a" to="https://www.typescriptlang.org/" buttonText="TypeScript" icon="typescript" iconType="svg" size="small" ></Button>
                        </div>
                        <div className={styles.skillButton}>
                            <Button type="a" to="https://www.docker.com/" buttonText="Docker" icon="docker" iconType="svg" size="small" ></Button>
                        </div>
                    </div>
                    <div className={styles.skillsRow}>
                        <div className={styles.skillButton}>
                            <Button type="a" to="https://www.python.org/" buttonText="Python" icon="python" iconType="svg" size="small" ></Button>
                        </div>
                        <div className={styles.skillButton}>
                            <Button type="a" to="https://www.djangoproject.com/" buttonText="Django" icon="django" iconType="svg" size="small" ></Button>
                        </div>
                        <div className={styles.skillButton}>
                            <Button type="a" to="https://developer.mozilla.org/en-US/docs/Web/CSS" buttonText="CSS" icon="css" iconType="svg" size="small" ></Button>
                        </div>
                    </div>
                </div>
            </div>
            <Divider size={DividerChoices.Small} tint={DividerChoices.Light} direction={DividerChoices.Horizontal} />
            <div className={styles.subSection}>
                <div className={styles.sectionTitle}>Work Experience</div>
                <div className={styles.swiperContainer}>
                    <JobSwiper />
                </div>
            </div>
            <Divider size={DividerChoices.Small} tint={DividerChoices.Light} direction={DividerChoices.Horizontal} />
            <div className={styles.subSection}>
                <div className={styles.centerButton}>
                    <div className={styles.sectionTitle}>Learn more about my skills</div>
                    <div className={styles.skillsBottomButtons}>
                        <Button to="/portfolio" buttonText="Portfolio" />
                        <Button iconType="fa" icon={"faLinkedin"} type="a" to="https://www.linkedin.com/in/adam-rideout-505baa127" buttonText="LinkedIn" />
                    </div>
                </div>
            </div>
        </div>
    </div>

    const ProSkillsMobile = <div className={styles.section}>
        <div className={styles.titleContainerMobile}>
            <div className={styles.titleMobile}>
                My Skills
            </div>
        </div>
        <div className={styles.sectionContainer}>
            <div className={styles.subSection}>
                <div className={styles.sectionTitle}>Professional Skills</div>
                <div className={styles.skillsContainer}>
                    <div className={styles.skillsRow}>
                        <div className={styles.skillButtonMobile}>
                            <Button type="a" to="https://www.javascript.com/" buttonText="Javascript" iconType="svg" icon="javascript" size="xs" ></Button>
                        </div>
                        <div className={styles.skillButtonMobile}>
                            <Button type="a" to="https://redux.js.org/" buttonText="Redux" iconType="svg" icon="redux" size="xs" ></Button>
                        </div>
                        <div className={styles.skillButtonMobile}>
                            <Button type="a" to="https://www.java.com/en/" buttonText="Java" icon="java" iconType="svg" size="xs" ></Button>
                        </div>
                    </div>
                    <div className={styles.skillsRow}>
                        <div className={styles.skillButtonMobile}>
                            <Button type="a" to="https://reactjs.org/" buttonText="React" iconType="svg" icon="react" size="xs" ></Button>
                        </div>
                        <div className={styles.skillButtonMobile}>
                            <Button type="a" to="https://www.typescriptlang.org/" buttonText="TypeScript" icon="typescript" iconType="svg" size="xs" ></Button>
                        </div>
                        <div className={styles.skillButtonMobile}>
                            <Button type="a" to="https://www.docker.com/" buttonText="Docker" icon="docker" iconType="svg" size="xs" ></Button>
                        </div>
                    </div>
                    <div className={styles.skillsRow}>
                        <div className={styles.skillButtonMobile}>
                            <Button type="a" to="https://www.python.org/" buttonText="Python" icon="python" iconType="svg" size="xs" ></Button>
                        </div>
                        <div className={styles.skillButtonMobile}>
                            <Button type="a" to="https://www.djangoproject.com/" buttonText="Django" icon="django" iconType="svg" size="xs" ></Button>
                        </div>
                        <div className={styles.skillButtonMobile}>
                            <Button type="a" to="https://developer.mozilla.org/en-US/docs/Web/CSS" buttonText="CSS" icon="css" iconType="svg" size="xs" ></Button>
                        </div>
                    </div>
                </div>
            </div>
            <Divider size={DividerChoices.Small} tint={DividerChoices.Light} direction={DividerChoices.Horizontal} />
            <div className={styles.subSection}>
                <div className={styles.centerButton}>
                    <div className={styles.sectionTitle}>Learn more about my skills</div>
                    <div className={styles.skillsBottomButtons}>
                        <Button size="small" to="/portfolio" buttonText="Portfolio" />
                        <Button size="small" iconType="fa" icon={"faLinkedin"} type="a" to="https://www.linkedin.com/in/adam-rideout-505baa127" buttonText="LinkedIn" />
                    </div>
                </div>
            </div>
        </div>
    </div>



    return (
        <div>
            {renderMobile ?
                <div>
                    <div className={styles.slideContainerMobile}>
                        {missionMobile}
                        {BackgroundMobile}
                        {ProSkillsMobile}
                    </div>
                </div>
                :
                <Swiper
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, Navigation]}
                    slidesPerView={1}
                    spaceBetween={30}
                    navigation={true}
                    className={`mySwiper ${styles.swiper}`}>
                    <SwiperSlide>
                        <div className={styles.slideContainer}>
                            {renderMobile ? missionMobile : Mission}
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.slideContainer}>
                            {Background}
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.slideContainer}>
                            {ProSkills}
                        </div>
                    </SwiperSlide>
                </Swiper>}
        </div >
    )
}

export default About;