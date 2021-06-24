import Header from '../components/Header';

export default function Skills() {
  return (
    <div className="">
      <div className="header__wrapper">
        <Header className="document" />
      </div>
      <main className="main__skills">
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
          <div className="main__skills__technical__field languages">
            <p>Javascript + Typescript</p>
            <p>Python</p>
          </div>
          <div className="main__skills__technical__field devops">
            <p>Docker</p>
            <p>AWS</p>
          </div>
        </section>
      </main>
    </div>
  );
}
