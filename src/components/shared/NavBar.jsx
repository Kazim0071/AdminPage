import { GoBell } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";

function Navbar() {
  return (
    <div className="h-20 flex flex-row w-full items-center border-b py-7">
      {/* text area */}
      <div className="mx-4 w-[856px] h-6">
        <span className="font-medium text-2xl leading-6">Dashboard</span>
      </div>

      {/* Right area */}
      <div className="border w-12 h-12 rounded-full px-[14px] py-[14px] mx-6">
        <GoBell />
      </div>

      <div className="flex flex-row gap-2 h-12 w-[288px] justify-center items-center">
        <div className="w-12 h-12">
          <img
            className="border rounded-full border-solid border-[#DBD8F0]"
            src="https://s3-alpha-sig.figma.com/img/e483/7386/247dcb9ac97d009a39ac8e1e83ce7e38?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Uu6uC-3KgUcn~P1G2zI7qWSO9sIGgOyEvF1gMAL6r7UJbp6vwZ6RO2wLzO8nOxAK72QIQQebEN6Ey2o2ib5f8eBEUTR-IsLspw-WGO5owoYVO05YaKCZudPIzC0KtgHt~Ei4g9aEiAjBFrzGjuWS3Ts5OmleJ8JLtILXaYs51JQ4TYUPoJsrOTO-psSGRnS83qjGufft7s3bIsP5nn4kk1bh1KOmZk1IZBymIUMFS67eR01V5u2D-TR3tCmMQHUdJGqu307DRpYYz4nnglcAtMe1i6DK72rlhMw4XOHB6U0wn2KSQPYv-8YkLA1lctO4WMUjyESdTJ43a9XpgEfnvQ__"
            alt="User Avatar"
          />
        </div>
        <div className="flex flex-col justify-center w-full max-w-[180px]">
          <span>Robert Fox</span>
          <span>robertfox@mail.com</span>
        </div>

        <div className="border border-solid border-[#DBD8F0] rounded-md w-7 h-[27px] flex items-center px-[5px]">
          <IoIosArrowDown />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
