import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

const Workouts = () => {
  const [workouts, setWorkouts] = useState([
    { id: 1, name: "Running", duration: "30 minutes" },
    { id: 2, name: "Swimming", duration: "45 minutes" },
  ]);

  const [editingWorkout, setEditingWorkout] = useState(null);

  const workoutSchema = z.object({
    name: z.string().min(1, "Workout name is required"),
    duration: z.string().min(1, "Duration is required"),
  });

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: zodResolver(workoutSchema),
  });

  const addWorkout = (data) => {
    setWorkouts([...workouts, { ...data, id: workouts.length + 1 }]);
    reset();
  };

  const editWorkout = (data) => {
    setWorkouts(workouts.map(workout => workout.id === editingWorkout.id ? { ...data, id: editingWorkout.id } : workout));
    setEditingWorkout(null);
    reset();
  };

  const deleteWorkout = (id) => {
    setWorkouts(workouts.filter(workout => workout.id !== id));
  };

  return (
    <div className="space-y-4">
      {workouts.map((workout) => (
        <Card key={workout.id}>
          <CardHeader>
            <CardTitle>{workout.name}</CardTitle>
          </CardHeader>
          <CardContent>
            {workout.duration}
            <div className="flex space-x-2 mt-2">
              <Button variant="outline" onClick={() => setEditingWorkout(workout)}>Edit</Button>
              <Button variant="destructive" onClick={() => deleteWorkout(workout.id)}>Delete</Button>
            </div>
          </CardContent>
        </Card>
      ))}
      <Dialog>
        <DialogTrigger asChild>
          <Button>{editingWorkout ? "Edit Workout" : "Add Workout"}</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{editingWorkout ? "Edit Workout" : "Add New Workout"}</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit(editingWorkout ? editWorkout : addWorkout)} className="space-y-4">
            <Input
              placeholder="Workout Name"
              defaultValue={editingWorkout?.name}
              {...register("name")}
            />
            {errors.name && <p className="text-red-500">{errors.name.message}</p>}
            <Input
              placeholder="Duration"
              defaultValue={editingWorkout?.duration}
              {...register("duration")}
            />
            {errors.duration && <p className="text-red-500">{errors.duration.message}</p>}
            <Button type="submit">{editingWorkout ? "Save Changes" : "Add"}</Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Workouts;