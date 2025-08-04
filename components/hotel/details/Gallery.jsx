import Image from "next/image";

const Gallery = ({ gallery }) => {
  const newGallery = [...gallery];
  const firstGallery = gallery[0];
  return (
    <section className="container">
      <div className="grid grid-cols-2 imageshowCase">
        <Image
          src={firstGallery}
          className="h-[400px]"
          alt="First Image"
          height={400}
          width={400}
        />

        <div className="grid grid-cols-2 grid-rows-2 h-[400px]">
          {newGallery?.map((img, index) => (
            <Image
              src={img}
              alt="singleImage"
              height={250}
              width={250}
              key={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
