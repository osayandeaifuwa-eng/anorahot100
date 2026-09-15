import chartData from "../../../data/chart.json";export default function WeeklyPage() {
  return (
    <main>
      <nav className="navbar">
        <a className="logo" href="/">
          ANORA CHARTS
        </a>

        <div className="nav-links">
          <a href="/">HOT 100</a>
          <a href="/app/weekly">WEEKS</a>
          <a href="/artists">ARTISTS</a>
          <a href="/albums">ALBUMS</a>
          <a href="/records">RECORDS</a>
        </div>
      </nav>

      <section className="page-hero">
        <p className="eyebrow">ANORA CHARTS</p>

        <h1>
          WEEKLY
          <br />
          CHARTS
        </h1>

        <p>Browse every week of the Anora Hot 100.</p>
      </section>

      <section className="weeks-card">
        <div className="weeks-header">
          <div>
            <p className="small-label">CHART ARCHIVE</p>
            <h2>Weekly Hot 100</h2>
          </div>

          <span className="week-count">1 WEEK</span>
        </div>

        <a
          className="week-item"
          href={`/weekly/share?week=${encodeURIComponent(chartData.week)}`}
        >
          <div className="week-number">
            <span>WEEK</span>
            <strong>01</strong>
          </div>

          <div className="week-info">
            <strong>ANORA HOT 100</strong>
            <span>Week Ending {chartData.weekEnding}</span>
          </div>

          <div className="week-date">
            <span>{chartData.week}</span>
            <strong>VIEW →</strong>
          </div>
        </a>
      </section>
    </main>
  );
}
