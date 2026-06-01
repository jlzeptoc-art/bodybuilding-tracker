export function ThemeScript() {
  const script = `
(function() {
  var themeKey = 'bts_theme';
  var scaleKey = 'bts_ui_scale';
  var mode = localStorage.getItem(themeKey) || 'system';
  var scale = localStorage.getItem(scaleKey) || 'large';
  var dark = mode === 'dark' || (mode === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
  document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-ui-scale', scale);
})();
`;
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
