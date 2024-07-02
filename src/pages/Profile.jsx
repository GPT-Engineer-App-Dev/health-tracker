import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Profile</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <Input
            id="name"
            name="name"
            value={profile.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <Input
            id="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
          />
        </div>
        <Button>Save Changes</Button>
      </CardContent>
    </Card>
  );
};

export default Profile;