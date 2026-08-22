export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-brand-border">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-600 text-sm">
        <p>
          Built by{" "}
          <a
            href="https://github.com/umbralrage345"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-purple-light hover:text-brand-gold transition-colors font-medium"
          >
            Abhyudaya Mohan Hegde
          </a>
        </p>
        <p className="font-mono text-xs">
          &lt;/&gt; with{" "}
          <span className="text-brand-red-light">♥</span> using Next.js &amp;
          Tailwind
        </p>
        <p className="font-mono text-xs">
          © {new Date().getFullYear()} · All rights reserved
        </p>
      </div>
    </footer>
  );
}
