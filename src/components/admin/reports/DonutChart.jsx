import React from "react";
import ReactApexChart from "react-apexcharts";

class DonutChart extends React.Component {
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
      <div>
        <h1 className="text-2xl font-semibold mb-3">Popular Buses</h1>
        <ReactApexChart
          options={this.state.chartOptions}
          series={this.state.chartData}
          type="donut"
          width="100%"
          height="100%"
        />
      </div>
    );
  }
}

export default DonutChart;
