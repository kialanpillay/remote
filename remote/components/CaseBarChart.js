import React from "react";
import { BarChart, Bar, Label, XAxis, YAxis, Tooltip, Legend } from "recharts";

export default class Example extends React.PureComponent {
  render() {
    const data = [
      {
        active: this.props.data.confirmed - this.props.data.recovered,
        recovered: this.props.data.recovered,
      },
    ];
    return (
      <BarChart width={180} height={220} data={data}>
        <Bar
          dataKey="recovered"
          fill="green"
          label={{
            fill: "gray",
            fontSize: 16,
            position: "top",
            fontWeight: 400,
          }}
        />
        <Bar
          dataKey="active"
          fill="silver"
          label={{
            fill: "gray",
            fontSize: 16,
            position: "top",
            fontWeight: 400,
          }}
        />
      </BarChart>
    );
  }
}
