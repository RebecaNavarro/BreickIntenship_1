import { useEffect } from "react";

declare global {
  interface Window {
    CountUp: any;
  }
}

export const Stats = () => {
  useEffect(() => {
    const initializeCountUp = () => {
      if (window.CountUp) {
        const numbers = document.querySelectorAll("[data-count-to]");

        numbers.forEach((number) => {
          const ID = number.id;
          const value = number.getAttribute("data-count-to");
          const decimalValue = number.getAttribute("data-decimal");
          let countUp;

          if (decimalValue) {
            const options = {
              decimalPlaces: parseInt(decimalValue),
            };
            countUp = new window.CountUp(ID, parseFloat(value || "0"), options);
          } else {
            countUp = new window.CountUp(ID, parseInt(value || "0"));
          }

          if (!countUp.error) {
            countUp.start();
          } else {
            console.error(countUp.error);
            number.innerHTML = value || "0";
          }
        });
      }
    };

    const loadScript = () => {
      if (document.querySelector('script[src*="countup.min.js"]')) {
        initializeCountUp();
        return;
      }

      const script = document.createElement("script");
      script.src =
        "https://cdn.jsdelivr.net/gh/Loopple/loopple-public-assets@main/motion-tailwind/scripts/plugins/countup.min.js";
      script.async = true;

      script.onload = initializeCountUp;
      script.onerror = () => console.error("Error loading CountUp script");

      document.body.appendChild(script);
    };

    loadScript();
  }, []);

  return (
    <div >
      <div className="container flex flex-col mx-auto ">
        <div className="w-full draggable">
          <div style={{
        fontFamily: "Arial, sans-serif",
        maxWidth: "800px",
        margin: "0 auto",
        padding: "20px",
        borderRadius: "8px",
      }}>
            <h2
              style={{
                color: "#333",
                fontSize: "18px",
                textTransform: "uppercase",
                paddingBottom: "10px",
              }}
            >
              Promociones Pasadas:
            </h2>

            <div className=" items-centergrid w-full grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-y-8">
              <div className="flex flex-col items-center">
                <h3 className="text-5xl font-bold leading-tight text-center text-shadow-emerald-500">
                  <span
                    className="text-emerald-400"
                    id="countto1"
                    data-count-to="324"
                  >
                    0
                  </span>
                </h3>
                <p className="font-medium leading-7 text-center shadow-emerald-">
                  Ganadores Premiados
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
