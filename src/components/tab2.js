import React from "react";
import "./x.css";

const Tab2 = () => {
  const labels = document.querySelectorAll(".accordion-item__label");
  const tabs = document.querySelectorAll(".accordion-tab");

  function toggleShow() {
    const target = this;
    const item = target.classList.contains("accordion-tab")
      ? target
      : target.parentElement;
    const group = item.dataset.actabGroup;
    const id = item.dataset.actabId;

    tabs.forEach(function (tab) {
      if (tab.dataset.actabGroup === group) {
        if (tab.dataset.actabId === id) {
          tab.classList.add("accordion-active");
        } else {
          tab.classList.remove("accordion-active");
        }
      }
    });

    labels.forEach(function (label) {
      const tabItem = label.parentElement;

      if (tabItem.dataset.actabGroup === group) {
        if (tabItem.dataset.actabId === id) {
          tabItem.classList.add("accordion-active");
        } else {
          tabItem.classList.remove("accordion-active");
        }
      }
    });
  }

  labels.forEach(function (label) {
    label.addEventListener("click", toggleShow);
  });

  tabs.forEach(function (tab) {
    tab.addEventListener("click", toggleShow);
  });

  return (
    <div>
      {" "}
      <section class="accordion">
        <section class="accordion-tabs">
          <button
            class="accordion-tab accordion-active"
            data-actab-group="0"
            data-actab-id="0"
          >
            Tab 1
          </button>
          <button class="accordion-tab" data-actab-group="0" data-actab-id="1">
            Tab 2
          </button>
          <button class="accordion-tab" data-actab-group="0" data-actab-id="2">
            Tab 3
          </button>
          <button class="accordion-tab" data-actab-group="0" data-actab-id="3">
            Tab 4
          </button>
          <button class="accordion-tab" data-actab-group="0" data-actab-id="4">
            Tab 5
          </button>
        </section>
        <section class="accordion-content">
          <article
            class="accordion-item accordion-active"
            data-actab-group="0"
            data-actab-id="0"
          >
            <h4 class="accordion-item__label">Tab 1</h4>
            <div class="accordion-item__container">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates, deserunt minima? Ut facere minus, ipsa dolore animi
                quis alias eos, porro corporis quod esse quidem. Maxime a
                aperiam perspiciatis architecto?
              </p>
            </div>
          </article>
          <article
            class="accordion-item"
            data-actab-group="0"
            data-actab-id="1"
          >
            <h4 class="accordion-item__label">Tab 2</h4>
            <div class="accordion-item__container">
              <p>
                reprehenderit temporibus, assumenda cupiditate consequatur
                soluta odit ex repudiandae delectus cumque, provident hic sed
                quod? Quis, nam. Similique eaque quae vel recusandae expedita
                qui sint fugiat, nisi assumenda et ex molestiae atque deleniti
                magni, ipsam libero!
              </p>
            </div>
          </article>
          <article
            class="accordion-item"
            data-actab-group="0"
            data-actab-id="2"
          >
            <h4 class="accordion-item__label">Tab 3</h4>
            <div class="accordion-item__container">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates, deserunt minima? Ut facere minus, ipsa dolore animi
                quis alias eos, porro corporis quod esse quidem. Maxime a
                aperiam perspiciatis architecto?
              </p>
            </div>
          </article>
          <article
            class="accordion-item"
            data-actab-group="0"
            data-actab-id="3"
          >
            <h4 class="accordion-item__label">Tab 4</h4>
            <div class="accordion-item__container">
              <p>
                psum dolor sit amet, consectetur adipisicing elit. Voluptates,
                deserunt minima? Ut facere minus, ipsa dolore
              </p>
            </div>
          </article>
          <article
            class="accordion-item"
            data-actab-group="0"
            data-actab-id="4"
          >
            <h4 class="accordion-item__label">Tab 5</h4>
            <div class="accordion-item__container">
              <p>
                aborum similique facere quae. Quo cupiditate ad iste qui aliquam
                quibusdam quod, ut doloremque ipsa quas soluta, sapiente
                possimus, tempora rerum ab nesciunt vitae molestiae dolor earum
                illum repudiandae! Voluptas sed, soluta facere nisi perferendis
                cupiditate! Dicta et praesentium non ab, quod commodi, illo
                saepe accusantium tempora autem eos nemo. Animi, pariatur
                placeat laudantium dolorib!
              </p>
            </div>
          </article>
        </section>
      </section>
      <p>Scale down the browser to view the mobile version</p>
    </div>
  );
};

export default Tab2;
