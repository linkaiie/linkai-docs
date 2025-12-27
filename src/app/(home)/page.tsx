import Link from 'next/link';

export default function HomePage() {
  const highlights = [
    {
      title: 'OpenAI-compatible API',
      body: 'Use a familiar /v1/chat/completions endpoint with streaming support.',
    },
    {
      title: 'Projects & keys',
      body: 'Create projects, generate keys, and track usage per environment.',
    },
    {
      title: 'Credits & limits',
      body: 'Top up credits with Stripe and enforce per-project rate limits.',
    },
  ];

  return (
    <div className="relative flex flex-1 flex-col overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{ background: 'var(--hero-gradient)' }}
      />
      <div
        className="absolute -top-24 right-[-10%] -z-10 h-64 w-64 rounded-full blur-3xl opacity-60 animate-float-slow"
        style={{ background: 'var(--brand-glow)' }}
      />
      <div
        className="absolute -bottom-24 left-[-10%] -z-10 h-72 w-72 rounded-full blur-3xl opacity-50 animate-float-slow"
        style={{ background: 'var(--brand-foam)' }}
      />

      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col items-center px-6 pb-20 pt-16 text-center">
        <p
          className="animate-rise text-xs uppercase tracking-[0.35em] text-[color:var(--brand-muted)]"
          style={{ animationDelay: '0ms' }}
        >
          LinkAI Route
        </p>
        <h1
          className="animate-rise mt-5 text-4xl font-semibold text-[color:var(--brand-ink)] md:text-6xl"
          style={{ animationDelay: '80ms' }}
        >
          Developer docs for the LinkAI Route API
        </h1>
        <p
          className="animate-rise mt-6 max-w-2xl text-lg text-[color:var(--brand-muted)] md:text-xl"
          style={{ animationDelay: '160ms' }}
        >
          Use a single OpenAI-compatible endpoint, manage API keys and credits,
          and monitor usage from a unified console.
        </p>

        <div
          className="animate-rise mt-8 flex flex-col items-center gap-3 sm:flex-row"
          style={{ animationDelay: '240ms' }}
        >
          <Link
            href="/docs"
            className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-slate-900/20 transition hover:translate-y-[-1px]"
          >
            Read the docs
          </Link>
          <Link
            href="/docs/getting-started"
            className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-400 hover:text-slate-900"
          >
            Quick start
          </Link>
        </div>
      </main>

      <section className="mx-auto grid w-full max-w-5xl gap-4 px-6 pb-12 text-left md:grid-cols-3">
        {highlights.map((item, index) => (
          <div
            key={item.title}
            className="animate-rise rounded-2xl border border-slate-200/70 bg-white/80 p-5 shadow-sm backdrop-blur"
            style={{ animationDelay: `${200 + 120 * index}ms` }}
          >
            <h3 className="text-base font-semibold text-slate-900">
              {item.title}
            </h3>
            <p className="mt-2 text-sm text-slate-600">{item.body}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto w-full max-w-5xl px-6 pb-20 text-left">
        <div className="animate-rise rounded-2xl border border-slate-200/70 bg-white/85 p-6 shadow-sm backdrop-blur" style={{ animationDelay: '320ms' }}>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
            First request
          </p>
          <ol className="mt-4 space-y-2 text-sm text-slate-700">
            <li>1. Sign in at `https://route.linkai.ie`.</li>
            <li>2. Create a project and generate an API key.</li>
            <li>3. Top up credits in Billing.</li>
            <li>4. Send a request to `POST /v1/chat/completions`.</li>
          </ol>
          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            <Link
              href="/docs/gateway-api"
              className="font-semibold text-slate-900 underline decoration-slate-300 underline-offset-4 transition hover:decoration-slate-500"
            >
              Chat Completions API
            </Link>
            <Link
              href="/docs/openai-sdk"
              className="font-semibold text-slate-900 underline decoration-slate-300 underline-offset-4 transition hover:decoration-slate-500"
            >
              OpenAI SDK
            </Link>
            <Link
              href="/docs/errors"
              className="font-semibold text-slate-900 underline decoration-slate-300 underline-offset-4 transition hover:decoration-slate-500"
            >
              Errors & retries
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
