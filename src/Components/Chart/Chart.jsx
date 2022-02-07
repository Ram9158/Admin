import React from "./chart.css";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Chart({title,data,datakey,grid,name}) {
    
  return(
        <div className="chart">
            <h3 className="chartTitle">{title}</h3>
            <ResponsiveContainer width="100%" aspect={4/1}>
                <LineChart data={data}>
                <XAxis dataKey="name" stroke="#5550bd"/>
                <Line type="monotone" dataKey={datakey}  stroke="#5550bd"/>
                <YAxis/>
                <Tooltip/>    
               {grid && <CartesianGrid strokeDasharray="5 5"/>   }     
                <Legend />
                </LineChart>
            </ResponsiveContainer>
        </div>
  );
}
