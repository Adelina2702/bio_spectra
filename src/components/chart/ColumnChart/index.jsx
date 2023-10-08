import ReactApexChart from 'react-apexcharts';

export default function ColumnChart() {
  const chartData = {
    series: [
      {
        name: 'Flora',
        data: [104, 95, 87, 106, 61, 128, 63, 60, 66],
        color: '#1BBD32',
      },
      {
        name: 'Fauna',
        data: [56, 45, 90, 98, 87, 105, 91, 114, 85],
        color: '#FFCC3D',
      },
      {
        name: 'Landscape',
        data: [20, 44, 32, 76, 85, 98, 42, 63, 29],
        color: '#FE6C6B',
      },
      {
        name: 'Water resources',
        data: [20, 44, 32, 76, 85, 98, 32, 93, 69],
        color: '#93AAFD',
      },
    ],
    chart: {
      type: 'bar',
      height: 650,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '75%',
        endingShape: 'rounded',
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: [
        '2015',
        '2016',
        '2017',
        '2018',
        '2019',
        '2020',
        '2021',
        '2022',
        '2023',
      ],
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: (val) => {
          return val + '%';
        },
      },
    },
  };

  return (
    <div className='w-full border-2 bg-white rounded-[20px] mb-[102px]'>
      <div className='flex flex-col pl-[39px] pt-[10px]'>
        <span className='text-[#9291A5] '>Статистика</span>
        <div className='text-[20px] font-semibold pb-[32px]'>Components of biodiversity and natural environment in South Africa.</div>
      </div>
      <div className='border -[1px solid #E5E5EF]'></div>
      <ReactApexChart
        options={chartData}
        series={chartData.series}
        type='bar'
        height={chartData.chart.height}
      />
    </div>
  );
}
