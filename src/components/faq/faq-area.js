
import { DotsTwo, General, Support } from "@svg/index";
import FaqThumb from "./faq-thumb";
import SingleFaq from "./single-faq";

// single nav
function NavItem({ active, id, title, icon }) {
  return (
    <button
      className={`nav-link ${active ? "active" : ""}`}
      id={`nav-${id}-tab`}
      data-bs-toggle="tab"
      data-bs-target={`#${id}`}
      type="button"
      role="tab"
      aria-controls={`nav-${id}`}
      aria-selected={active ? "true" : "false"}
      tabIndex="-1"
    >
      <span>{icon}</span>
      {title}
    </button>
  );
}

// TabItem
export function TabItem({ active, id, accordion_items }) {
  return (
    <div
      className={`tab-pane fade ${active ? "show active" : ""}`}
      id={`${id}`}
      role="tabpanel"
      aria-labelledby={`nav-${id}-tab`}
    >
      {/* <!-- faq item one of community question --> */}
      {accordion_items.map((item, i) => (
        <div key={i} className="faq__item pb-95">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-4">
              <div className="faq__content">
                <h3 className="faq__title-2">{item.title}</h3>
              </div>
            </div>
            <div className="col-xl-9 col-lg-9 col-md-8">
              <div className="faq__wrapper faq__style-4 tp-accordion">
                <div className="accordion" id={`${id}-${i + 1}_accordion`}>
                  {item.accordions.map((item) => (
                    <SingleFaq key={item.id} item={item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}


const FaqArea = ({ element_faq = false }) => {
  // tab item
  return (
    <>
      {/* faq thumb start */}
      {!element_faq && <FaqThumb />}
      {/* faq thumb end */}

      {/* faq area start */}
      <section className="faq__area pt-100 pb-25">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="faq__tab-2 tp-tab mb-50">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <NavItem
                      active={true}
                      id="general"
                      icon={<General />}
                      title="General Questions"
                    />
                  </li>
                  <li className="nav-item" role="presentation">
                    <NavItem
                      id="community"
                      icon={<DotsTwo />}
                      title="Community"
                    />
                  </li>
                  <li className="nav-item" role="presentation">
                    <NavItem id="support" icon={<Support />} title="Support" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="faq__item-wrapper">
            <div className="tab-content" id="faqTabContent">
              {/* general */}
              <TabItem
                active={true}
                id="general"
                accordion_items={[
                  {
                    title: (
                      <>
                        Orders <br />& Shipping
                      </>
                    ),
                    accordions: [
                      {
                        id: "One",
                        title: "What services do you offer",
                        show: true,
                        desc: "We offer energy efficent upgrades for resident Hot Water System and Heating and Cooling System(Aircon)",
                        parent: "general-1_accordion",
                      },
                      {
                        id: "Two",
                        title: " how can i benefit from your services?",
                        desc: "we do through assessment of one's ite and as per the requirment that we tailor a plan for them ",
                        parent: "general-1_accordion",
                      },
                      {
                        id: "Three",
                        title: "how do i know  if i am eligible",
                        desc: "Eligibility depends on the specific goverment scheme and the products you need .contact us (1300 785 436)for a detailed assessment.",
                        parent: "general-1_accordion",
                      },
                      {
                        id: "four",
                        title: "How do i get started?",
                        desc: "you can get started by requesting a free quote through our website, and our professional team will guide you through the process",
                        parent: "general-1_accordion",
                      },
                    ],
                  },
                  {
                    title: (
                      <>
                        Returns <br />& Exchanges
                      </>
                    ),
                    accordions: [
                      {
                        id: "five",
                        title: "How do I schedule an install?",
                        show: true,
                        desc: "you can schedule an installation by conatcting us(1300 785 436)through our website or calling our customer service team",
                        parent: "general-2_accordion",
                      },
                      {
                        id: "six",
                        title:
                          "How do I know if I'm eligible?How do I know if I'm eligible?",
                        desc: "Eligibility depends on the specific government scheme and the products you need. Contact us for a detailed assessment.",
                        parent: "general-2_accordion",
                      },
                      {
                        id: "seven",
                        title: "What government schemes do you work with?",
                        desc: "We work with the Victorian Energy Upgrade (VEU) and Energy Savings Scheme (ESS) to provide energy-efficient upgrades.",
                        parent: "general-2_accordion",
                      },
                    ],
                  },
                  {
                    title: "Discounts",
                    accordions: [
                      {
                        id: "eight",
                        title: "Do you provide services for both residential and commercial properties?",
                        show: true,
                        desc: "Yes, we provide services for both residential and commercial properties.",
                        parent: "general-3_accordion",
                      },
                      {
                        id: "nine",
                        title:
                          "How long does the installation process take?",
                        desc: "The installation process typically takes a few hours, depending on the product and property type.s",
                        parent: "general-3_accordion",
                      },
                      {
                        id: "ten",
                        title: "Is there a warranty on the products installed?",
                        desc: "Yes, all products installed come with a warranty. Specific warranty details depend on the product.s",
                        parent: "general-3_accordion",
                      },
                    ],
                  },
                ]}
              />

              {/* community */}
              <TabItem
                id="community"
                accordion_items={[
                  {
                    title: (
                      <>
                        Returns <br />& Exchanges
                      </>
                    ),
                    accordions: [
                      {
                        id: "eleven",
                        title: "How do I schedule an installation?",
                        show: true,
                        desc: "You can schedule an installation by contacting us through our website or calling our customer service team.",
                        parent: "community-1_accordion",
                      },
                      {
                        id: "twelve",
                        title: "Do you offer any guarantees on energy savings?",
                        desc: "Yes, we provide an estimate of potential energy savings based on the products installed and previous customer data.",
                        parent: "community-1_accordion",
                      },
                      {
                        id: "thirteen",
                        title: "Can I choose the products to be installed?",
                        desc: "While we work with a range of accredited products, our team will recommend the best options for your specific needs and eligibility under the government schemes.",
                        parent: "community-1_accordion",
                      },
                      {
                        id: "fourteen",
                        title: "What should I do if I have issues with the installed products?",
                        desc: "You can contact our customer support team for any issues or concerns. We are committed to resolving any problems promptly.",
                        parent: "community-1_accordion",
                      },
                    ],
                  },
                ]}
              />

              {/* support */}
              <TabItem
                id="support"
                accordion_items={[
                  {
                    title: "Discounts",
                    accordions: [
                      {
                        id: "fifteen",
                        title: "Are there any hidden fees?",
                        show: true,
                        desc: "No, there are no hidden fees. All costs covered by the government schemes are disclosed upfront.",
                        parent: "support-1_accordion",
                      },
                      {
                        id: "sixteen",
                        title: "How do I apply for a rebate?",
                        desc: "Our team will assist you in applying for any eligible rebates under the respective government schemes.",
                        parent: "support-1_accordion",
                      },
                      {
                        id: "seventeen",
                        title: "Do you offer any post-installation support?",
                        desc: "Yes, we provide ongoing support and maintenance for all products installed by our team.",
                        parent: "support-1_accordion",
                      },
                    ],
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </section>
      {/* faq area end */}
    </>
  );
};

export default FaqArea;
