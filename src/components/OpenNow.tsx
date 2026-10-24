"use client";

import { useSyncExternalStore } from "react";
import { openingHours } from "@/content/site";

const DAY_NAMES = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];

function toMinutes(time: string) {
  const [h, m] = time.split(":").map(Number);
  return h * 60 + m;
}

function hourLabel(time: string) {
  const [h, m] = time.split(":").map(Number);
  return m ? `${h}:${String(m).padStart(2, "0")} Uhr` : `${h} Uhr`;
}

// Uhrzeit immer in Dresden, egal wo der Besucher gerade ist.
function dresdenNow() {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Berlin",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(new Date());
  const get = (type: string) => parts.find((part) => part.type === type)?.value ?? "";
  const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(get("weekday"));
  return { day, minutes: Number(get("hour")) * 60 + Number(get("minute")) };
}

function nextOpening(fromDay: number) {
  for (let offset = 1; offset <= 7; offset++) {
    const day = (fromDay + offset) % 7;
    const entry = openingHours.find((item) => item.day === day);
    if (entry?.from) return `${offset === 1 ? "morgen" : DAY_NAMES[day]} ab ${hourLabel(entry.from)}`;
  }
  return null;
}

function status() {
  const { day, minutes } = dresdenNow();
  const today = openingHours.find((item) => item.day === day);
  if (today?.from && today.to) {
    if (minutes < toMinutes(today.from)) return { open: false, text: `Heute ab ${hourLabel(today.from)} geöffnet` };
    if (minutes < toMinutes(today.to)) return { open: true, text: `Jetzt geöffnet, bis ${hourLabel(today.to)}` };
  }
  if (today && "note" in today && today.note === "nach Vereinbarung") {
    return { open: false, text: "Heute nach Vereinbarung – rufen Sie gern an" };
  }
  const next = nextOpening(day);
  return { open: false, text: next ? `Gerade geschlossen, ${next} wieder da` : "Gerade geschlossen" };
}

const subscribe = (callback: () => void) => {
  const timer = window.setInterval(callback, 60_000);
  return () => window.clearInterval(timer);
};

let cache = { key: "", value: { open: false, text: "" } };
function snapshot() {
  const value = status();
  const key = `${value.open}|${value.text}`;
  if (key !== cache.key) cache = { key, value };
  return cache.value;
}
const serverSnapshot = () => null;

export function OpenNow({ fallback }: { fallback: string }) {
  const current = useSyncExternalStore(subscribe, snapshot, serverSnapshot);
  if (!current) return <span className="open-now">{fallback}</span>;
  return (
    <span className="open-now" data-open={current.open}>
      <span className="open-dot" aria-hidden="true" />
      {current.text}
    </span>
  );
}
