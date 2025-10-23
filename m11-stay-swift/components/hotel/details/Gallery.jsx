import Image from 'next/image';

const Gallery = () => {
  return (
    <section className="container">
      <div className="grid grid-cols-2 imageshowCase">
        <Image
          src="/images/1.png"
          className="h-[400px]"
          alt=""
          width={400}
          height={400}
        />

        <div className="grid grid-cols-2 grid-rows-2 h-[400px]">
          <Image src="/images/2.png" alt="" width={150} height={150} />
          <Image src="/images/3.png" alt="" width={150} height={150} />
          <Image src="/images/4.png" alt="" width={150} height={150} />
          <Image src="/images/5.png" alt="" width={150} height={150} />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
