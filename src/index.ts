import { Hono } from "hono"
import { z } from "zod"

const shortURlRecord = z.object({
  id: z.number(),
  originalUrl: z.string().url(),
  shortUrl: z.string(),
  reqOriginatingIp: z.string().ip(),
  createdAt: z.date(),
})

export type ShortURlRecord = z.infer<typeof shortURlRecord>

const app = new Hono<{ Bindings: CloudflareBindings }>()

app.get("/", (c) => {
  return c.text("Hello Hono!")
})

app.get("/r/:short", async (c) => {

  const shortUrlParam = c.req.param("short")

  return c.text(shortUrlParam)
})

app.post("/create", (c) => {
  return c.text("Hello Hono!")
})



export default app
