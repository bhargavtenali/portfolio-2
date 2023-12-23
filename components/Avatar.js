// next image
import Image from "next/image";

const Avatar = () => {
  return (
    <div className="drop-shadow-2xl hidden xl:flex xl:max-w-none transition-all duration-1000 pr-6 mr-6">
      <Image
        src={"/avatar.png"}
        width={1000}
        height={478}
        alt="home image"
        className="translate-z-0 h-full w-full"
      />
    </div>
  );
};

export default Avatar;
