#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
PORT="${PORT:-8888}"
echo "🥁 大鼓达人 · 本地服务器"
echo "   http://localhost:${PORT}"
echo "   浏览器打开即可游玩"
python3 -m http.server "$PORT" --bind 0.0.0.0
