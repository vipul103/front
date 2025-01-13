

const TextArea = () => {
  return (
    <section className="about__text pt-115 pb-100">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-4">
            <div
              className="about__text-wrapper wow fadeInUp"
              data-wow-delay=".3s"
              data-wow-duration="1s"
            >
              <h3 className="about__text-title">
                It started with a <br /> bang now we are here.
              </h3>
            </div>
          </div>
          <div className="col-xl-8 col-lg-8">
            <div
              className="about__text wow fadeInUp"
              data-wow-delay=".6s"
              data-wow-duration="1s"
            >
              <p> 
               Founded in 2023, Green Energy Power Co is a progressive company delivering premium energy solutions to residents in Melbourne, Australia.
               We specialize in upgrading hot water and air conditioning systems with a strong focus on energy efficiency and sustainability.
              </p>

              <p>
              As an active participant in the Victorian Energy Upgrades program, we help customers reduce energy use and greenhouse gas emissions.
               By providing cutting-edge energy-efficient technology, we lower utility costs and promote a greener future, while also educating individuals on how they can contribute to environmental conservation.
              </p>
              <p>
              Our skilled professionals are driven by a passion for innovation and excellence. We meticulously choose and install products that uphold the highest standards of performance and environmental sustainability.
               Whether you need to upgrade your hot water system or enhance your air conditioning efficiency, we offer customized solutions tailored to your requirements and budget.
              </p>
              <p>
              Central to our mission is the goal of making energy efficiency accessible to all.
               We believe that through thoughtful upgrades and sustainable practices, we can build a brighter future for generations to come. 
               Join us in our journey toward a cleaner, more energy-efficient Australia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextArea;
