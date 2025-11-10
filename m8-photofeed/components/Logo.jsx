import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/">
      <Image
        className="max-w-[100px] md:max-w-[125px]"
        src="/lws_logo.png"
        alt="Lws"
        height={100}
        width={125}
      />
    </Link>
  );
};

export default Logo;
