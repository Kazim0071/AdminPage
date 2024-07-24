import { GoBell } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  return (
    <>
      <div>
        <div className="border border-b-[#DBD8F0] h-20 py-7 px-4 flex justify-center gap-6">
          <div className="w-[856px]">
            <h4 className="text-2xl leading-6 font-medium w-full max-w-6">
              Dashboard
            </h4>
          </div>

          <div className="flex items-center">
            <div className="border border-solid border-[#DBD8F0] w-12 h-12 rounded-full px-[14px] py-[14px]">
              <GoBell />
            </div>

            <div className="flex w-full max-w-[288px] h-12 gap-4 px-6 justify-between items-center">
              <div className="">
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
        </div>
      </div>
    </>
  );
};

export default Navbar;
