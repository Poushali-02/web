const RestaurantMap = () => {
  return (
    <div className="rounded-lg overflow-hidden shadow-2xl h-96 border-2 border-yellow-500/20">
      <iframe
        title="Little Darjeeling Location"
        src="https://www.google.com/maps?q=22.7243035,88.389514&z=16&output=embed"
        width="100%"
        height="100%"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="border-0"
        allowFullScreen
      />
    </div>
  );
};

export default RestaurantMap;
