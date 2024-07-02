import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Welcome to Fitness Tracker</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Track your workouts and stay fit!</p>
        </CardContent>
      </Card>
      <Button onClick={() => navigate("/dashboard")}>Go to Dashboard</Button>
    </div>
  );
};

export default Index;