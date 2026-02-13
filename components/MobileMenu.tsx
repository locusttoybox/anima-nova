interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
}

export const MobileMenu = ({ isOpen, setIsOpen }: MobileMenuProps) => {
  return (
    <div
      className={`
        fixed inset-0 bg-gray-800 backdrop-blur-lg z-40 flex flex-col items-center justify-center transition-all duration-300
        ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}
        md:hidden
      `}
    >
      <ul className="text-white text-2xl space-y-8 text-center">
        <li>
          <a href="#about" onClick={() => setIsOpen(false)}>
            Par Mums
          </a>
        </li>
        <li>
          <a href="#projects" onClick={() => setIsOpen(false)}>
            Projekti
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => setIsOpen(false)}>
            Kontakti
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
