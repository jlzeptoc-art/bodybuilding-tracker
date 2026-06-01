export function ThemeScript() {
  const script = `
(function() {
  var key = 'bts_theme';
  var mode = localStorage.getItem(key) || 'system';
  var dark = mode === 'dark' || (mode === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
  document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
})();
`;
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
