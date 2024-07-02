import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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