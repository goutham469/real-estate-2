const BrandVideo = () => {
  return (
    <div className="py-8 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
        <span
  className="px-4 py-1.5 rounded-lg font-medium text-sm uppercase tracking-wider"
  style={{
    backgroundColor: '#b38f4f', // Light background similar to orange-50
    color: '#ffffff'
  }}
>
            Our Story
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white">
            Watch Our Comapny Story
          </h2>
        </div>
        
        <div className="relative w-full mx-auto aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl">
          <iframe
            src="https://res.cloudinary.com/deg3uu0iw/video/upload/v1744792862/agrmuxtqbbotqafoxzc2.mp4"
            title="Brand Promo Video"
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default BrandVideo; 