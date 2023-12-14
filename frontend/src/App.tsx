import { useEffect, useState } from 'react';
import styles from './App.module.css';
import axios from 'axios';

interface User {
  id: number;
  name: string;
  gender: string;
  aboutMe: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const asyncDData = async () => {
      try {
        const { data } = await axios('http://localhost:3000/users');
        setUsers((prev) => [...prev, ...data]);
      } catch (error) {
        console.log(error);
      }
    };

    asyncDData();
  }, []);

  return (
    <main className={styles.main}>
      <h2 className={styles.h2}>Backend Users</h2>
      {users.length > 0 && (
        <div className={styles.users}>
          {users.map(({ id, name, gender, aboutMe }) => (
            <div key={id} className={styles.user}>
              <h3 className="flex justify-between">
                <span>{name}</span>
                <span>{gender}</span>
              </h3>

              <p>{aboutMe} </p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}

export default App;
