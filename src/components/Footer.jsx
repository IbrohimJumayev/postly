const Footer = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full text-center p-1 flex justify-center gap-1 border-y-2">
      <span className="material-symbols-outlined">copyright</span>
      <p className="mr-5">2024</p>
      <ul className="flex gap-3">
        <li>
          <a
            href="https://www.linkedin.com/in/ibrohim-jumayev-94a049301/"
            target="_blank"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://x.com/Ibrohim_Jumayev" target="_blank">
            Twitter
          </a>
        </li>
        <li>
          <a href="">Email</a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
