import chartData from "../data/chart.json";

function movement(lastWeek: number | null, rank: number) {
  if (lastWeek === null) {
    return <span className="new">NEW</span>;
  }

  if (rank < lastWeek) {
    return <span className="up">↑ {lastWeek - rank}</span>;
  }

  if (rank > lastWeek) {
    return <span className="down">↓ {rank - lastWeek}</span>;
  }

  return <span className="same">—</span>;
}

export default function Home() {
  return (
    <main>
      <nav className="navbar">
        <a className="logo" href="/">
          ANORA CHARTS
        </a>

        <div className="nav-links">
          <a href="/">HOT 100</a>
          <a href="/weekly">WEEKS</a>
          <a href="/artists">ARTISTS</a>
          <a href="/albums">ALBUMS</a>
          <a href="/records">RECORDS</a>
        </div>
      </nav>

      <section className="hero">
        <p className="eyebrow">PERSONAL MUSIC CHART</p>

        <h1>ANORA HOT 100</h1>

        <p>Week Ending {chartData.weekEnding}</p>
      </section>

      <section className="chart-card">
        <div className="chart-top">
          <div>
            <p className="small-label">WEEKLY CHART</p>
            <h2>Top 100 Songs</h2>
          </div>

          <div className="week-box">
            <span>WEEK</span>
            <strong>{chartData.week}</strong>
          </div>
        </div>

        <div className="chart-header-row">
          <span>#</span>
          <span>SONG</span>
          <span>ARTIST</span>
          <span>MOVEMENT</span>
          <span>PEAK</span>
          <span>WKS</span>
          <span>PLAYS</span>
        </div>

        {chartData.songs.map((song) => (
          <div
            className="chart-row"
            key={`${song.artist}-${song.title}`}
          >
            <strong className="rank">{song.rank}</strong>

            <div className="song-name">
              <strong>{song.title}</strong>
            </div>

            <span className="artist">{song.artist}</span>

            <span>
              {movement(song.lastWeek, song.rank)}
            </span>

            <span>{song.peak}</span>

            <span>{song.weeks}</span>

            <strong>{song.plays.toLocaleString()}</strong>
          </div>
        ))}
      </section>
    </main>
  );
}
