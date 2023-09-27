import Carousel from './Carousel';

const imageUrls = [
  '/1.jpg',
  '/2.jpg',
  '/3.jpg',
  '/4.jpg',

];

function Home() {
  return (
    <div className="lg:flex justify-center items-center overflow-hidden h-[450px] hidden ">
      <Carousel images={imageUrls} />
    </div>
  );
}

export default Home;