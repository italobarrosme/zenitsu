import { useState, useEffect } from 'react';
import { z } from 'zod';

// para simular algum error, mudar o dado do Schema
const UserSchema = z.object({
  id: z.string(),
  name: z.string().max(100),
  anime: z.string().max(100),
  profession: z.string().max(100),
});

const UsersSchema = z.array(UserSchema);

type Users = z.infer<typeof UsersSchema>;

export const useUsers = () => {
  const [users, setUsers] = useState<Users>([]);
  const [error, setError] = useState<object>();

  useEffect(() => {
    fetch('users.json')
      .then(response => response.json())
      .then(data => {
        const result = UsersSchema.safeParse(data);

        if (result.success) {
          setUsers(result.data);
        } else {
          setError(result.error);
          throw new Error(result.error.message);

        }
      })
  }, []);

  return {users, error};
}