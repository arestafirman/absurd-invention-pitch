import { mkdirSync, writeFileSync } from "node:fs";

// One-sentence absurd invention pitch for make.fun.
// The entry is a single hardcoded sentence: the Notification Tamer answers
// the endless pings in my voice, then books a meeting with itself about
// them — the fix becomes the very meeting it was meant to prevent.
const ENTRY =
  "Every time my inbox dings for the twelfth time before lunch, the Notification Tamer answers each ping in my voice and schedules a meeting with itself to discuss them all.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
