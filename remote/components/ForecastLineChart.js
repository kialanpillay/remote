import React from "react";
import { LineChart, Line, XAxis, YAxis, Label, Tooltip } from "recharts";

Date.prototype.addDays = function (date, days) {
  this.setDate(date.getDate() + parseInt(days));
  return this;
};

export default class ForecastLineChart extends React.PureComponent {
  render() {
    let data;
    let current_date = new Date();
    if (this.props.type == "temp") {
      data = this.props.data.map((data, idx) => {
        return {
          date: new Date().addDays(current_date, idx).toDateString(),
          day: data.temp.day,
          night: data.temp.night,
        };
      });
    } else {
      data = this.props.data.map((data, idx) => {
        return {
          date: new Date().addDays(current_date, idx).toDateString(),
          wind: (data.wind_speed * 3.6).toFixed(0),
          rain: data.hasOwnProperty("rain") ? data.rain : 0,
          humidity: data.humidity,
        };
      });
    }

    return (
      <LineChart width={180} height={150} data={data}>
        <YAxis tickLine={false} domain={[0, "auto"]} />
        <XAxis dataKey="date" tick={false} axisLine={false}>
          <Label
            value={this.props.type == "temp" ? "7-Day Forecast" : "Elements"}
            offset={0}
            position="insideBottom"
          />
        </XAxis>
        <Label value="7-Day Forecast" offset={4} position="insideBottom" />
        <Tooltip />
        <Line
          type="monotone"
          dataKey={this.props.type == "temp" ? "day" : "wind"}
          stroke="#0070f3"
          strokeWidth={3}
          dot={false}
        />
        <Line
          type="monotone"
          dataKey={this.props.type == "temp" ? "night" : "rain"}
          stroke="#282c34"
          strokeWidth={3}
          dot={false}
        />
        <Line
          type="monotone"
          dataKey={this.props.type == "temp" ? "" : "humidity"}
          stroke="orange"
          strokeWidth={3}
          dot={false}
        />
      </LineChart>
    );
  }
}
