import React from "react";

const Subscribers = () => {
  //   let valueDisplays = document.querySelectorAll(".num");
  //   let interval = 5000;

  //   valueDisplays.forEach((valueDisplay) => {
  //     let startValue = 0;
  //     let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  //     let duration = Math.floor(interval / endValue);
  //     let counter = setInterval(function () {
  //       startValue += 1;
  //       valueDisplay.textContent = startValue;
  //       if (startValue == endValue) {
  //         clearInterval(counter);
  //       }
  //     }, duration);
  //   });
  return (
    <div>
      <div>
        <div>
          <p className="num" data-val="99">
            00K+
          </p>
          <p>Happy customers</p> 
        </div>
        <div>
          <p className="num" data-val="400">
            000+
          </p>
          <p>Destination collaboration</p>
        </div>
        <div>
          <p className="num" data-val="99">
            00+
          </p>
          <p>Years experience</p>
        </div>
        <div>
          <p className="num" data-val="100">
            0.0K+
          </p>
          <p>Places in the world</p>
        </div>
      </div>
    </div>
  );
};

export default Subscribers;
