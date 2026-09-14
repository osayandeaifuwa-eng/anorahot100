import chartData from "../data/chart.json";

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <h1>ANORA CHARTS</h1>
        <p>Personal Music Charts</p>
      </header>

      <section className="chart-header">
        <h2>{chartData.chartName}</h2>
        <p>Week Ending {chartData.weekEnding}</p>
      </section>

      <section className="chart">
        <div className="chart-row chart-head">
          <span>#</span>
          <span>Song</span>
          <span>Artist</span>
          <span>LW</span>
          <span>Peak</span>
          <span>Wks</span>
          <span>Plays</span>
        </div>

        {chartData.songs.map((song) => (
          <div className="chart-row" key={`${song.artist}-${song.title}`}>
            <strong>{song.rank}</strong>

            <div className="song">
              <strong>{song.title}</strong>
            </div>

            <span>{song.artist}</span>

            <span>
              {song.lastWeek === null ? "—" : song.lastWeek}
            </span>

            <span>{song.peak}</span>

            <span>{song.weeks}</span>

            <span>{song.plays.toLocaleString()}</span>
          </div>
        ))}
      </section>
    </main>
  );
}
