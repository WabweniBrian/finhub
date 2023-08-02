import React from "react";
import ReactApexChart from "react-apexcharts";

class LineChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chartData: [],
      chartOptions: {},
    };
  }

  componentDidMount() {
    this.setState({
      chartData: this.props.chartData,
      chartOptions: this.props.chartOptions,
    });
  }

  render() {
    return (
      <div className="card h-[380px] md:h-[350px]">
        <h1 className="text-2xl font-semibold">Loan Income Statistics</h1>
        <ReactApexChart
          options={this.state.chartOptions}
          series={this.state.chartData}
          type="line"
          width="100%"
          height="90%"
        />
      </div>
    );
  }
}

export default LineChart;
