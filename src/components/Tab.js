import React from "react";
import "./tab.css";

const RTab = () => {
  const tabs = document.querySelector(".wrapper");
  const tabButton = document.querySelectorAll(".tab-button");
  const contents = document.querySelectorAll(".content");

  tabs.onclick = (e) => {
    const id = e.target.dataset.id;
    if (id) {
      tabButton.forEach((btn) => {
        btn.classList.remove("active");
      });
      e.target.classList.add("active");

      contents.forEach((content) => {
        content.classList.remove("active");
      });
      const element = document.getElementById(id);
      element.classList.add("active");
    }
  };

  return (
    <>
      <div className="bg-[#F2F2F2] py-5 mt-5">
        <div>
          <p class="or-divider my-3">
            <span className="span">VERSATILE AD FORMATS</span>
          </p>
          <div class="wrapper">
            <div class="buttonWrapper flex justify-around my-5 text-center">
              <button
                class="tab-button active w-52 h-10 rounded-2xl shadow"
                data-id="pop-under"
              >
                POP UNDER
              </button>
              <button
                class="tab-button w-52 h-10 rounded-2xl shadow"
                data-id="banner-ad"
              >
                BANNER AD
              </button>
              <button
                class="tab-button w-52 h-10 rounded-2xl shadow"
                data-id="native"
              >
                NATIVE
              </button>
              <button
                class="tab-button w-52 h-10 rounded-2xl shadow"
                data-id="skim"
              >
                SKIM
              </button>
            </div>
            <div class="contentWrapper">
              <div class="content active" id="pop-under">
                <div className="mt-6 flex justify-between px-5 w-full h-60">
                  <div className="imgSide w-3/4 bg-blue-300">
                    (Image will be changed)
                  </div>
                  <div className="ml-7">
                    <h4 className="text-[#FF6F00]">POP UNDER</h4>
                    <h5>
                      This is one of the most popular ads. After user’s click,
                      this ad opens landing page in behind. So, the user
                      experience is not hampered much.
                    </h5>
                  </div>
                </div>
              </div>
              <div class="content" id="banner-ad">
                <div className="mt-6 flex justify-between px-5 w-full h-60">
                  <div className="imgSide w-3/4 bg-blue-300">
                    (Image will be changed)
                  </div>
                  <div className="ml-7">
                    <h4 className="text-[#FF6F00]">BANNER AD</h4>
                    <h5>
                      Choose between the available banner formats. Highly
                      effective ad for visibility.
                    </h5>
                  </div>
                </div>
              </div>
              <div class="content" id="native">
                <div className="mt-6 flex justify-between px-5 w-full h-60">
                  <div className="imgSide w-3/4 bg-blue-300">
                    (Image will be changed)
                  </div>
                  <div className="ml-7">
                    <h4 className="text-[#FF6F00]">NATIVE</h4>
                    <h5>
                      Ad format with the image and the title, that perfectly
                      fits into the content of the site. Native ads are placed
                      in the most visible areas of the page and, thus, this
                      format shows good results and the level of interaction.
                    </h5>
                  </div>
                </div>
              </div>
              <div class="content" id="skim">
                <div className="mt-6 flex justify-between px-5 w-full h-60">
                  <div className="imgSide w-3/4 bg-blue-300">
                    (Image will be changed)
                  </div>
                  <div className="ml-7">
                    <h4 className="text-[#FF6F00]">SKIM</h4>
                    <h5>
                      SKIM" is a link that a publisher inserts on a specific
                      site element, and after clicking on it, an advertisement
                      appears to the user. SKIM gives 100% control of your sold
                      traffic amount, higher CR to advertisers and CPM rates to
                      publishers.
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RTab;
