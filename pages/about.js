import Header from '../components/Header';
export default function About() {
  return (
    <div className="document">
      <Header />
      <main className="about__main">
        <aside>
          <figure>coucou</figure>
        </aside>
        <section className="about__section">
          <div className="about__section__intro">
            <p className="about__section__intro__hello">Hi there ✌️!</p>
            <p className="about__section__intro__presentation">
              I'm a <strong>Full stack developer</strong> and <strong>UI designer</strong>{' '}
              from
              <em> Toulouse, France.</em>
            </p>
            <p>
              I'm focused on well architected applications, simple interface, with easily
              scalable and maintanable code.
            </p>
          </div>
          <div className="about__section__content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam tempore eius
              in dolore quas dolorem modi obcaecati minus atque assumenda?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque incidunt
              corporis fuga eos dolore hic nesciunt, ducimus enim velit et aspernatur
              eaque iusto placeat accusantium laborum aut officia numquam ullam.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nobis eveniet,
              fugiat corporis ab provident! Numquam at earum amet inventore suscipit quo.
              Voluptatem, iure. Tempore pariatur ratione beatae blanditiis nemo. Lorem
              ipsum dolor sit amet.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
