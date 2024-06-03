const Footer = () => {
  return (
    <footer className="fixed bottom-0 z-10 w-full py-1 text-center shadow-lg">
      <p className="mx-auto flex w-max items-center justify-center rounded-md bg-slate-800 p-1 text-sm font-medium text-white">
        &copy; {new Date().getFullYear()} QR Proyect. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
