import React, { useEffect, useState } from "react";

const Clock = () => {
  const [date, setDate] = useState(new Date());
  const refreshClock = () => {
    setDate(new Date());
  };

  useEffect(() => {
    setInterval(() => {
      const timerId = setInterval(refreshClock, 1000);
      // return function cleanup() {
      //   clearInterval(timerId);
      // };
      return (cleanup) => {
        clearInterval(timerId);
      };
    });
  }, []);

  return (
    <div>
      <span>Clock Component</span>
      <h2>{date.toLocaleTimeString()}</h2>
    </div>
  );
};

export default Clock;

// https://medium.com/programming-essentials/how-to-create-a-digital-clock-with-react-hooks-aa30f76cfe3f#id_token=eyJhbGciOiJSUzI1NiIsImtpZCI6IjE4MmU0NTBhMzVhMjA4MWZhYTFkOWFlMWQyZDc1YTBmMjNkOTFkZjgiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJuYmYiOjE2NDM4Mzc4NTAsImF1ZCI6IjIxNjI5NjAzNTgzNC1rMWs2cWUwNjBzMnRwMmEyamFtNGxqZGNtczAwc3R0Zy5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjEwNTk1ODUzNjQ4OTM5Nzg4NDIyMCIsImVtYWlsIjoid2lsZnJlZDA1Nzc3QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhenAiOiIyMTYyOTYwMzU4MzQtazFrNnFlMDYwczJ0cDJhMmphbTRsamRjbXMwMHN0dGcuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJuYW1lIjoiV2lsZnJlZCBCYW5jYWlyZW4iLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EtL0FPaDE0R2hJLUxOejN1OWZ6QjZseElobTk4XzJoWloxVVBRSlU4RlVsdDd4PXM5Ni1jIiwiZ2l2ZW5fbmFtZSI6IldpbGZyZWQiLCJmYW1pbHlfbmFtZSI6IkJhbmNhaXJlbiIsImlhdCI6MTY0MzgzODE1MCwiZXhwIjoxNjQzODQxNzUwLCJqdGkiOiI1YzVhMWIxOTIyNzg5Njg4ZTI3YzM2NmU0NDQwZDIxZGI2YTQ2YzVlIn0.Aa7xzeVmd8Z19pZJVwDNHIeUslzLWY3fRnEBELfp1P3EdCzwHKhxxChyc5LSSOCzXRQH9dbr6lpVOwfjqfT9kaMIDyXoBAH02S2mBQIqQDx0JSS9oAKvLp5Nsp1ZY1hoBTFeyiuCOluvXlXUCTufXDPxRosSEFmd4zrivX2RI6XKVQWNUJ1knG1gdfhXVDitS5Xa2IzQYuGQplDL80pSYxFixLuLx5lIpYfzKB4ifWeXIRGY6ZO0MbdHMFnS0T2--z-vPXoNLC7t12YkSr0m4hLwayQi7aVluL6uVaReEI8lhP7RzrwpmKfRPEuMqnCBVeKgoI6Kx1z3MSfw7j5WVA
