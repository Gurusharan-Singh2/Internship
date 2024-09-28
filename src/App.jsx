import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Header from "./components/Header";
import { Body } from "./components/Body";

import { AppStore } from "./Store/AppStore";
import ServiceListProvider from "./Store/AppStore";
import { ServiceForm } from "./components/ServiceForm";
import { useState } from "react";

function App() {
  const [list, setList] = useState("0");

  return (
    <ServiceListProvider>
      <Header></Header>

      <div className="container">
        {list == "1" ? (
          <Body setList={setList} />
        ) : list == "2" ? (
          <ServiceForm setList={setList} />
        ) : (
          <div class="container col-xxl-8 px-4 py-5">
            <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
              <div class="col-10 col-sm-8 col-lg-6">
                <img
                  src="https://png.pngtree.com/png-clipart/20230918/ourmid/pngtree-photo-men-doctor-physician-chest-smiling-png-image_10132895.png"
                  class="d-block mx-lg-auto img-fluid"
                  alt="Bootstrap Themes"
                  width="700"
                  height="500"
                  loading="lazy"
                />
              </div>
              <div class="col-lg-6">
                <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">
                  Your health, our priority
                </h1>
                <p class="lead">
                  Our hospital provides exceptional healthcare with
                  compassionate care. Equipped with state-of-the-art technology
                  and a dedicated team of doctors and nurses, we offer
                  comprehensive services, from emergency care to advanced
                  surgeries. Your health is our priority, and we're committed to
                  delivering quality treatment for a faster, healthier recovery.
                  Visit us today!
                </p>
                <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                  <button
                    type="button"
                    class="btn btn-primary btn-lg px-4 me-md-2"
                    onClick={() => setList("1")}
                  >
                    Services
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-secondary btn-lg px-4"
                    onClick={() => setList("2")}
                  >
                    Add Service
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </ServiceListProvider>
  );
}

export default App;
