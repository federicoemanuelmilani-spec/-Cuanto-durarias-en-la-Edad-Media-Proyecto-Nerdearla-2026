import { getCloudflareContext } from "@opennextjs/cloudflare";

export async function POST(request: Request) {
  const { env } = getCloudflareContext();
  const { profession, survivalDays } = (await request.json()) as {
    profession: string;
    survivalDays: number;
  };

  await env.DB.prepare(
    `CREATE TABLE IF NOT EXISTS resultados (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      profession TEXT NOT NULL,
      survival_days INTEGER NOT NULL,
      created_at INTEGER NOT NULL
    )`
  ).run();

  await env.DB.prepare(
    "INSERT INTO resultados (profession, survival_days, created_at) VALUES (?, ?, ?)"
  )
    .bind(profession, survivalDays, Date.now())
    .run();

  const totalRow = await env.DB.prepare(
    "SELECT COUNT(*) as total FROM resultados"
  ).first<{ total: number }>();

  const lessRow = await env.DB.prepare(
    "SELECT COUNT(*) as c FROM resultados WHERE survival_days < ?"
  )
    .bind(survivalDays)
    .first<{ c: number }>();

  const total = totalRow?.total ?? 1;
  const less = lessRow?.c ?? 0;
  const percentile = Math.round((less / total) * 100);

  return Response.json({ percentile, total });
}