import Header from '../components/Header';
import { motion } from 'framer-motion';

export default function Skills() {
  return (
    <div className="skills__page">
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
            These skills are not necessarily technology oriented, but I found them very
            valuable, and worth mentioning. These are critical skills in regard of
            teamwork.
          </p>
        </div>
        <section className="softskills__section">
          <div className="softskills__section__field team">
            <p>Agile</p>
            <p>Pair programming + code reviews</p>
          </div>
          <div className="softskills__section__field tools">
            <p>Git+Github</p>
            <p>VScode</p>
            <p>Figma</p>
          </div>
          <div className="softskills__section__field communication">
            <p>Fluent English</p>
            <p>Blogging</p>
          </div>
          <div className="softskills__section__field mindset">
            <p>Adaptability</p>
            <p>Cooperation</p>
            <p>Constant learning</p>
            <p>Critical thinking</p>
          </div>
        </section>
        <div className="learning__intro">
          <h2 className="learning__intro__title">Currently learning</h2>
          <p className="learning__intro__text">
            Finally, the list of the technologies I'm the most interested in learning at
            the moment.
          </p>
        </div>
        <section className="learning__section">
          <div className="learning__section__field frontend">
            <p>angular</p>
            <p>webgl/threejs</p>
          </div>
          <div className="learning__section__field backend">
            <p>Django</p>
          </div>
          <div className="learning__section__field languages">
            <p>Golang</p>
          </div>
          <div className="learning__section__field devops">
            <p>Kubernetes</p>
          </div>
          <div className="learning__section__field design">
            <p>Motion Design</p>
          </div>
        </section>
      </main>
    </div>
  );
}
