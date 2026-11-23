# ORB RUSH — Day 1 vs Day 7

Entry for the make.fun bounty **post-tiktok-day-one-day-seven-20261123-0327**
("Day one, day seven", $20 pot, top 10 places × $2).

## The video

A 21-second vertical video (1080×1920, 30 fps) about **ORB RUSH**, a tiny
game my AI agent built: a blue orb collects gold coins in a small arena.

My creative decision: film the same game twice from one fixed camera and
let the difference tell the story. Day 1 is the game as it was on the first
afternoon — a blue orb, three gold coins, an empty arena, nothing else —
and it already works. Day 7 is the exact same map, the same starting spot
and the same camera after a week of daily updates: two more coins, two pink
gems, three red spike enemies sweeping across the arena, a fading trail
behind the orb and a combo counter ticking up. The framing never changes;
the growth is the story. It opens with a giant "DAY 1" and the line "my AI
agent built a tiny game in one afternoon", cuts to "7 DAYS OF DAILY UPDATES
LATER..." and the busier day-7 play, closes on "Start yours at make.fun",
and ends with make.fun's referral end card carrying code `08bvq6fy`.

The video is posted publicly on TikTok; its full address is in
[`VIDEO.json`](VIDEO.json). Score = TikTok views + 10 × (likes + comments
+ shares + saves); the top 10 entries share the $20 pot.

## The game

`game/index.html` in the build workspace is the real, playable ORB RUSH:
arrow keys / WASD move the blue orb, `?day=1` plays the bare first build,
`?day=7` plays the same map a week later with the extra coins, gems,
enemies, trail and combo counter. The video's footage was rendered from
the same game with a deterministic scripted player.

## This repository

- `main.ts` — the entrypoint (Node 22, standard library only). It copies
  `VIDEO.json` from the bot directory (`MAKEFUN_BOT_DIR`, default `/bot`)
  to the output directory (`MAKEFUN_OUTPUT_DIR`, default `/output`) and
  exits non-zero with an error message if the copy fails.
- `VIDEO.json` — the TikTok address of the posted video. It currently
  holds the placeholder `https://www.tiktok.com/@<handle>/video/<id>`; the
  real URL goes in once the video is posted.
- `LICENSE` — MIT.

## Test

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
# out/VIDEO.json must be identical to VIDEO.json
```
