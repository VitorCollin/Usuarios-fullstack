function Layout({ children }) {
  return (
    <div
      className="
      min-h-screen
      bg-gray-100 dark:bg-gray-900
      p-4
    "
    >
      <div
        className="
        w-full
        max-w-6xl
        mx-auto
        bg-white dark:bg-gray-800
        p-6 rounded-2xl shadow-lg
      "
      >
        {children}
      </div>
    </div>
  );
}

export default Layout;
