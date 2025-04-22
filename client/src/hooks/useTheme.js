export default function useTheme(theme, invoker ) {
  const toggleTheme = () => {
    const isLight = theme === "light";
    const updatedTheme = isLight ? '{"theme": "dark"}' : '{"theme": "light"}';
    localStorage.setItem("theme", updatedTheme);
    document.body.setAttribute('data-theme', isLight ? "dark" : "light");
    invoker(updatedTheme)
  };

  return { toggleTheme };
}