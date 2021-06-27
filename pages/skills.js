import Header from '../components/Header';
import { motion } from 'framer-motion';

export default function Skills() {
  return (
    <div className="skills__page">
      <div className="header__wrapper">
        <Header className="document" />
      </div>
      <main className="main__skills">
        <div className="technical__skills__intro">
          <h2 className="technical__skills__intro__title">Technical skills</h2>
          <p className="technical__skills__intro__text">
            Here is a list of my favorite technologies to use. I'm familiar with a wide
            range of other technologies but I've put here the one I master and enjoy the
            most at the moment.
          </p>
        </div>

        <section className="main__skills__technical">
          <div className="main__skills__technical__field frontend">
            <p>React + Vue</p>
            <p>Next + Nuxt</p>
            <p>Sass + Scss</p>
          </div>
          <div className="main__skills__technical__field backend" id="backend">
            <p>Node + express</p>
            <p>Prismic + Strapi</p>
          </div>
          <div className="main__skills__technical__field database">
            <p>MongoDB</p>
            <p>PostgreSQL + MySQL</p>
          </div>
          <div className="main__skills__technical__field languages">
            <p>Javascript + Typescript</p>
            <p>Python</p>
          </div>
          <div className="main__skills__technical__field devops">
            <p>Docker</p>
            <p>AWS</p>
          </div>
        </section>
        <div className="process__intro">
          <h2 className="process__intro__title">My work process</h2>
          <p className="process__intro__text">
            This is my approach and workflow on the projects I work on.
          </p>
        </div>
        <section className="process_section">
          <p>coucou</p>
        </section>
        <div className="softskills__intro">
          <h2 className="softskills__intro__title">Soft skills</h2>
          <p className="softskills__intro__text">
            Here is a list of the soft skills. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Illum ipsum quam mollitia ipsam totam id alias repellat ex
            quod repudiandae.
          </p>
        </div>
        <section className="softskills__section">
          <div className="softskills__section__field">
            <p>Agile</p>
          </div>
          <div className="softskills__section__field">Blogging</div>
        </section>
        <div className="learning__intro">
          <h2 className="learning__intro__title">Currently learning</h2>
          <p className="learning__intro__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, neque vel
            esse molestias magnam ducimus nisi excepturi maxime voluptatibus. Nihil
            impedit libero exercitationem sapiente placeat.
          </p>
        </div>
        <section className="learning__section">
          <div className="learning__section__field">
            <p>angular</p>
            <p>webgl/threejs</p>
          </div>
          <div className="learning__section__field">
            <p>Django</p>
          </div>
          <div className="learning__section__field">
            <p>Golang</p>
          </div>
          <div className="learning__section__field">
            <p>Kubernetes</p>
          </div>
        </section>
      </main>
    </div>
  );
}
