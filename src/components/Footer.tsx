export function Footer() {
  return (
    <footer className="py-8 px-6 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-200 dark:border-gray-700 transition-colors">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-600 dark:text-gray-400 flex items-center justify-center gap-2">
          Raneesha Savindi
          <span className="text-gray-500 dark:text-gray-500 flex items-center justify-center text-sm ">
          © {new Date().getFullYear()} All rights reserved. </span>
        </p>
      </div>
    </footer>
  );
}
