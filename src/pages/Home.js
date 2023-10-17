import styles from "../styles/home.module.css";
import font from "../styles/font.module.css";
import hero_img from "../assets/wp_iimage1.png";
import hero_decor1 from "../assets/profile-decor1.png";
import about_img from "../assets/abt-image-s.png";
import html_icon from "../assets/html-icon.png";
import css_icon from "../assets/css-icon.png";
import js_icon from "../assets/js-icon.png";
import tech_icon from "../assets/comp-tech-icon.png";
import email_icon from "../assets/send-email-logo.png";
import gitlab_icon from "../assets/gitlab-logo.png";
import linkedin_icon from "../assets/linkedin.png";
const Home = () => {
  return (
    <div className={styles.home_container}>
      <header>
        <nav>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#works">Works</a>
            </li>
          </ul>
        </nav>
      </header>
      <section className={styles.hero} id="home">
        <div className={styles.side}>
          <div className={styles.name_plate}>
            <p className={styles.name_head} id={font.name_head}>
              LIANNE LEDESMA
            </p>
            <p className={styles.name_sub} id={font.name_sub}>
              Full-Stack Developer
            </p>
          </div>
        </div>
        <div className={styles.img_container}>
          <img id={styles.profile_decor} src={hero_decor1} alt="decor" />
          <img id={styles.profile_img} src={hero_img} alt="profile" />
        </div>
      </section>
      <section className={styles.about} id="about">
        <div className={styles.about_container}>
          <div id={styles.about_img_bg}>
            <div id={styles.about_img_ctr}>
              <img src={about_img} alt="about" />
            </div>
          </div>
          <div className={styles.about_content} id={font.about_content}>
            <div className={styles.about_title} id={font.about_title}>
              About me
            </div>
            <p>
              Previously worked as an IT Helpdesk Support, I’ve ventured my way
              back to my first love, Coding! I’m currently enrolled in Uplift’s
              Full-Stack Developer Program, and I am passionate with my work,
              driven to succeed.
            </p>
            <div className={styles.about_title} id={font.about_title}>
              Skills
            </div>
            <div className={styles.icons}>
              <div>
                <img src={html_icon} alt="html-logo" />
              </div>
              <div>
                <img src={css_icon} alt="css-logo" />
              </div>
              <div>
                <img src={js_icon} alt="js-logo" />
              </div>
              <div>
                <img src={tech_icon} alt="comp-tech-logo" />
              </div>
              <div id={styles.mongodb_icon}></div>
              <div id={styles.ne_icon}></div>
              <div id={styles.react_icon}></div>
              <div id={styles.gitlab_icon}></div>
            </div>
            <div className={styles.stack}></div>
          </div>
        </div>
      </section>
      <section className={styles.works} id="works">
        <p className={styles.about_title} id={font.about_title}>
          Works
        </p>
        <div className={styles.cards}>
          <div id={styles.cards_ctr}>
            <a href="https://gitlab.com/Lianne-G">
              <div id={styles.bukopan}></div>
            </a>
            <a href="https://gitlab.com/Lianne-G">
              <div id={styles.pitikbulag}></div>
            </a>
            <a href="https://gitlab.com/Lianne-G">
              <div id={styles.p3_p4}></div>
            </a>
            <a href="https://gitlab.com/Lianne-G">
              <div id={styles.branded}></div>
            </a>
            <a href="https://gitlab.com/Lianne-G">
              <div id={styles.placeholder1}></div>
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className={styles.footer_items} id={font.footer_items}>
          <p>Contact Information</p>
          <p>Mobile no. 0917.777.7777</p>
          <p>
            <a
              className={styles.footer_icons}
              href="mailto:lagl24@protonmail.com"
            >
              <img src={email_icon} alt="email" />
            </a>
            <a
              className={styles.footer_icons}
              href="https://gitlab.com/Lianne-G"
            >
              <img src={gitlab_icon} alt="gitlab" />
            </a>
            <a
              className={styles.footer_icons}
              href="https://gitlab.com/Lianne-G"
            >
              <img src={linkedin_icon} alt="linkedin" />
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
