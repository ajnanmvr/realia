import Image from "next/image";

function Count() {
  return (
    <section className="min-h-screen bg-theme bg-blue flex flex-col justify-between content-center items-center">
      <div className="grid grid-cols-2 w-full">
        <div>
          <Image
            src="/realia-txt.png" // Path to the image in the public folder
            alt="Realia Logo"
            width={300} // Set the width of the image
            height={0} // Set the height of the image
          />
        </div>
        <div>
          <Image
            src="/asasicon.png" // Path to the image in the public folder
            alt="Realia Logo"
            width={200} // Set the width of the image
            height={0} // Set the height of the image
          />
        </div>
      </div>

      <Image
        src="/tile.png" // Path to the image in the public folder
        alt="Realia Logo"
        width={600} // Set the width of the image
        height={0} // Set the height of the image
      />
      <div className="w-full p-10 flex justify-start align-end">
        <Image
          src="/date.png" // Path to the image in the public folder
          alt="Realia Logo"
          width={150} // Set the width of the image
          height={0} // Set the height of the image
        />
      </div>
    </section>
  );
}

export default Count;
