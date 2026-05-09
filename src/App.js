export default function NoGuardianOS() {
  const apps = [
    {
      name: 'NoguardStation',
      icon: '🎮',
      desc: 'Game Hub'
    },
    {
      name: 'NetGuardian',
      icon: '🎬',
      desc: 'Media Center'
    },
    {
      name: 'Gooqle',
      icon: '🔎',
      desc: 'Browser'
    },
    {
      name: 'Noguardify',
      icon: '🎵',
      desc: 'Music'
    },
    {
      name: 'Settings',
      icon: '⚙️',
      desc: 'Customize'
    }
  ];

  const games = [
    'Space Runner',
    'Metro Escape',
    'Galaxy Drift',
    'Sky Blocks',
    'Shadow Dash',
    'Astro Jump'
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* Animated Background */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-110 animate-pulse"
        style={{
          backgroundImage:
            "url('https://media.tenor.com/9vRAkntogEMAAAAC/silver-surfer.gif')"
        }}
      />

      <div className="absolute inset-0 bg-black/45 backdrop-blur-[2px]" />

      {/* Stars */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-cyan-300 animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex min-h-screen flex-col">

        {/* Header */}
        <header className="flex items-center justify-between px-8 py-6">
          <div>
            <h1 className="text-5xl font-black tracking-wide text-cyan-300 drop-shadow-[0_0_25px_rgba(34,211,238,0.8)]">
              NoGuardian
            </h1>
            <p className="mt-2 text-white/70">
              Futuristic Gaming Dashboard
            </p>
          </div>

          <div className="rounded-2xl border border-cyan-400/30 bg-white/10 px-5 py-3 backdrop-blur-xl shadow-[0_0_30px_rgba(34,211,238,0.25)]">
            <p className="text-cyan-300 font-semibold">12:45 PM</p>
          </div>
        </header>

        {/* Featured */}
        <main className="flex-1 px-8 pb-40">
          <div className="mb-10 rounded-[32px] border border-cyan-400/20 bg-white/10 p-8 backdrop-blur-2xl shadow-[0_0_40px_rgba(34,211,238,0.18)]">
            <h2 className="mb-3 text-4xl font-bold text-cyan-300">
              Welcome Back
            </h2>

            <p className="max-w-2xl text-lg text-white/75">
              Launch games, music, media, and apps from your glowing futuristic dashboard.
            </p>

            <button className="mt-6 rounded-2xl border border-cyan-300/40 bg-cyan-400/20 px-6 py-3 text-lg font-semibold text-cyan-200 transition hover:scale-105 hover:bg-cyan-300/30">
              Open Launcher
            </button>
          </div>

          {/* Games */}
          <section>
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-3xl font-bold text-cyan-300">
                Featured Games
              </h3>

              <button className="rounded-xl border border-cyan-400/20 bg-white/10 px-4 py-2 backdrop-blur-xl hover:bg-white/20">
                View All
              </button>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {games.map((game) => (
                <div
                  key={game}
                  className="group overflow-hidden rounded-[30px] border border-cyan-400/20 bg-white/10 backdrop-blur-2xl transition hover:scale-[1.03] hover:bg-white/15 hover:shadow-[0_0_35px_rgba(34,211,238,0.28)]"
                >
                  <div className="h-48 bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20" />

                  <div className="p-5">
                    <h4 className="text-2xl font-bold text-cyan-200">
                      {game}
                    </h4>

                    <p className="mt-2 text-white/65">
                      Browser-based arcade experience.
                    </p>

                    <button className="mt-5 rounded-xl border border-cyan-300/30 bg-cyan-400/20 px-5 py-2 font-semibold text-cyan-100 hover:bg-cyan-300/30">
                      Play
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>

        {/* Floating Glass Dock */}
        <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2">
          <div className="flex items-center gap-3 rounded-full border border-cyan-300/20 bg-white/10 px-5 py-4 backdrop-blur-3xl shadow-[0_0_50px_rgba(34,211,238,0.25)]">

            {/* Logo */}
            <button className="flex h-14 w-14 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-400/20 text-2xl transition hover:scale-110 hover:bg-cyan-300/30">
              ✦
            </button>

            <div className="h-10 w-px bg-cyan-300/30" />

            {apps.map((app) => (
              <button
                key={app.name}
                className="group flex flex-col items-center rounded-2xl px-4 py-2 transition hover:scale-110 hover:bg-white/10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-white/10 text-2xl shadow-[0_0_25px_rgba(34,211,238,0.18)]">
                  {app.icon}
                </div>

                <span className="mt-2 text-xs text-cyan-100 opacity-0 transition group-hover:opacity-100">
                  {app.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
