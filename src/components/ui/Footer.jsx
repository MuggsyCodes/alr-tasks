// jsx instead of js - javascript with ability to inject HTML and CSS
// F must be caps
import Logo from "../../../public/logo.png";
import { dosis } from "./fonts";

const Footer = () => {
  return (
    <footer
      className={`${dosis.className} antialiased footer bg-transparent text-base-content p-4`}
    >
      <div className="flex flex-row items-center justify-between w-full min-w-full">
        <div className="flex flex-row items-center justify-center gap-2">
          <img
            src={Logo.src}
            alt="my task logo"
            className="h-6 w-6 sm:w-7 sm:h-7"
          />
          <p>
            Copyright &copy; {new Date().getFullYear()} - All rights reserved by
            My Tasks
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
