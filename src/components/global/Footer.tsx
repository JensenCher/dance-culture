export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 mt-44">
      <div className="max-w-7xl mx-auto flex lg:flex-row flex-col items-center lg:justify-between justify-center gap-y-4 md:px-16 px-6 py-16 text-zinc-400">
        <small className=" duration-300 font-mono">All rights reserved &copy; {new Date().getFullYear()}</small>

        <small className="hover:text-primary/70 duration-300">
          <a href="https://github.com/JensenCher/dance-culture" target="_blank" rel="noreferrer noopener">
            Built by <span className="text-primary">Jensen Cher</span>
          </a>
        </small>
      </div>
    </footer>
  );
}
