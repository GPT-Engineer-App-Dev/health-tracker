import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { name: "Week 1", workouts: 3, calories: 1500 },
  { name: "Week 2", workouts: 4, calories: 2000 },
  { name: "Week 3", workouts: 2, calories: 1000 },
  { name: "Week 4", workouts: 5, calories: 2500 },
];

const Dashboard = () => {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Total Workouts</CardTitle>
        </CardHeader>
        <CardContent>10</CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Calories Burned</CardTitle>
        </CardHeader>
        <CardContent>5000</CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Progress Over Time</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="workouts" stroke="#8884d8" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="calories" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Recent Activities</CardTitle>
        </CardHeader>
        <CardContent>
          <ul>
            <li>Running - 5km</li>
            <li>Swimming - 30 minutes</li>
            <li>Cycling - 10km</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;