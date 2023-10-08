import Chart from "react-apexcharts";

const DonutChart = () => {
  const options = {
    colors: [
      "#F4AA2D",
      "#E3001B",
      "#E85B0C",
      "#0973B6",
      "#883A90",
      "#009A30",
      "#E85B0C",
      "#0878B9",
      "#E31373",
    ],
    series: [44, 55, 41, 17, 15, 20, 22, 50],
    labels: [
      "Eastern Cape",
      "Free State",
      "Gauteng",
      "KwaZulu-Natal",
      "Limpopo",
      "Mpumalanga",
      "North West",
      "Northern Cape",
      "Northern Cape",
      "Western Cape",
    ],
    legend: {
      fontSize: "18px",
      offsetX: -50,
    },
    chart: {
      offsetX: 50,
      offsetY: -100,
    },
    dataLabels: {
      enabled: true,
    },
  };

  const series = [44, 55, 41, 17, 15, 20, 22, 50];
  return (
    <>
      <h1 className="text-center text-4xl font-bold pb-24">STATISTICS</h1>
      <div className="flex justify-between px-[6.25rem]">
        <div className="text-black w-[24.5625rem]">
          <h2 className="text-2xl font-bold">Wildlife</h2>
          <p className="text-base font-medium py-6">
            South Africa is known for its diverse geography, including coastal
            areas, mountains, plateaus, and deserts. The Drakensberg Mountains
            are a prominent feature.
          </p>
          <button className="py-2 px-7 bg-gray-700 rounded-lg text-white font-medium">
            Learn more
          </button>
        </div>
        <div className="w-[43rem]  bg-white">
          <div className="-[1px solid #E5E5EF] " />

          <div className="flex">
            <div className="mt-[-40px] w-[80%]">
              <div xs={12} style={{ height: "400px", marginTop: "100px" }}>
                <div xs={12} item>
                  <div xs={2} item />
                  <div xs={8} item>
                    <Chart
                      options={options}
                      series={series}
                      type="donut"
                      height={400}
                    />
                  </div>
                </div>
                <div xs={2} item />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DonutChart;
