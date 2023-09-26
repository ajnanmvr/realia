import Image from 'next/image'
function Description() {
  return (
    <section className=" bg min-h-screen">
      <div className="w-full p-16 flex justify-end align-center">
        <Image
          src="/arabic-logo.jpg" // Path to the image in the public folder
          alt="Realia Logo"
          width={400} // Set the width of the image
          height={0} // Set the height of the image
        />
      </div>
      <div className="max-w-[1300px] pl-20  mt-48">
      <h1 className="font-bold text-5xl text-theme">Realia'23</h1>
        <p>
          "REALIA'23" is the name of this year's Rabee' festival, organized by
          the Al Huda Students' Association (ASAs), the U.G. Students' Union of
          Darul Huda Islamic University. In a rapidly evolving contemporary
          context rife with falsehoods and fake news, REALIA'23 aims to uncover
          and present the truth and facts.
        </p>
        <p>
          The Darul Huda U.G. Arts Fest will play a pivotal role in enhancing
          the academic progress of students across various fields of study and
          academic activities.
        </p>
      </div>
    </section>
  );
}

export default Description;
