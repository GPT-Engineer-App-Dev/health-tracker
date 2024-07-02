import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

const Workouts = () => {
  const [workouts, setWorkouts] = useState([
    { id: 1, name: "Running", duration: "30 minutes" },
    { id: 2, name: "Swimming", duration: "45 minutes" },
  ]);

  const [newWorkout, setNewWorkout] = useState({ name: "", duration: "" });

  const addWorkout = () => {
    setWorkouts([...workouts, { ...newWorkout, id: workouts.length + 1 }]);
    setNewWorkout({ name: "", duration: "" });
  };

  return (
    <div className="space-y-4">
      {workouts.map((workout) => (
        <Card key={workout.id}>
          <CardHeader>
            <CardTitle>{workout.name}</CardTitle>
          </CardHeader>
          <CardContent>{workout.duration}</CardContent>
        </Card>
      ))}
      <Dialog>
        <DialogTrigger asChild>
          <Button>Add Workout</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Workout</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <Input
              placeholder="Workout Name"
              value={newWorkout.name}
              onChange={(e) => setNewWorkout({ ...newWorkout, name: e.target.value })}
            />
            <Input
              placeholder="Duration"
              value={newWorkout.duration}
              onChange={(e) => setNewWorkout({ ...newWorkout, duration: e.target.value })}
            />
            <Button onClick={addWorkout}>Add</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Workouts;