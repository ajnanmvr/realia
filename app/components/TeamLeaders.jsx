import Carousel from './Carousel';

const imageUrls = [
  '/1.jpg',
  '/2.jpg',
  '/3.jpg',
  '/4.jpg',

];

function Home() {
  return (
    <div className="flex justify-center items-center">
      <Carousel images={imageUrls} />
    </div>
  );
}

export default Home;