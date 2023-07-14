import { useEffect, useState } from 'react';

function Quotes() {
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState(false);
  const [quotes, setQuotes] = useState(null);

  useEffect(() => {
    const rawData = async () => {
      try {
        const response = await fetch(
          'https://api.api-ninjas.com/v1/quotes?category=success',
          {
            headers: {
              'Content-Type': 'application/json',
              'X-API-key': 'LgO37qqgJKI555yev5bcsQ==feYBZkk2G964hlS1',
            },
          },
        );
        const json = await response.json();
        setQuotes(json);
      } catch (error) {
        setErrors(true);
      }
      setLoading(false);
    };
    rawData();
  }, []);

  if (loading) {
    return <div>Loading Quotes....</div>;
  } if (errors) {
    return <div>Error quote received</div>;
  } if (quotes) {
    return <div>{quotes[0].quote}</div>;
  }
}

export default Quotes;
