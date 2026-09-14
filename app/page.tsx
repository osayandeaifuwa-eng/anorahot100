import chartData from "../data/chart.json";

export default function Home() {
  return (
    <main>
      <nav className="navbar">
        <div className="logo">ANORA CHARTS</div>

        <div className="nav-links">
          <a href="/">HOT 100</a>
          <a href="#">ARTISTS</a>
          <a href="#">ALBUMS</a>
          <a href="#">RECORDS</a>
          <a href="#">WEEKS</a>
        </div>
      </nav>

      <header className="hero">
        <p className="eyebrow">PERSONAL MUSIC CHART</p>
        <h1>ANORA HOT 100</h1>
        <p>
          Week Ending {chartData.weekEnding}
        </p>
      </header>

      <section className="chart">
        <div className="chart-title">
          <h2>Weekly Chart</h2>
          <span>100 SONGS</span>
        </div>

        <div className="chart-row chart-head">
          <span>#</span>
          <span>SONG</span>
          <span>ARTIST</span>
          <span>LW</span>
          <span>PEAK</span>
          <span>WKS</span>
          <span>PLAYS</span>
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
