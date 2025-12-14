// Small `cn` helper compatible with shadcn + tailwind usage
function cn(...args) {
  return args
    .flatMap((a) => (Array.isArray(a) ? a : [a]))
    .filter(Boolean)
    .join(" ");
}

module.exports = { cn };
