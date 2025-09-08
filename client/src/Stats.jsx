import { useState, useEffect } from "react";
import { getStatsForGame } from "./api";

const Stats = ({ slug }) => {

  const [stats, setStats] = useState(0);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const { data } = await getStatsForGame(slug);
        setStats(data.registrations); 
      } catch (error) {
        setStats(0);
        console.error(error);
      }
    };

    if (slug) fetchStats(); 
  }, [slug]);

  return (
    <div>
      <h2>Game Stats</h2>
      <p>Registrations for {slug}: {stats}</p>
    </div>
  );
};

export default Stats;
