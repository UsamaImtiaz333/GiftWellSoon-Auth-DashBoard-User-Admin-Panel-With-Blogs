const CareRegistrySection = () => {
  return (
    <section className="bg-[#6B8E74] py-20 px-6 flex flex-col items-center justify-center text-center">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        The Care Registry for Life’s Toughest Moments
      </h1>

      {/* Subtitle */}
      <p className="text-base md:text-lg text-gray-800 mb-8 max-w-2xl">
        Because support should be simple, thoughtful, and truly helpful.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button className="bg-blue-200 hover:bg-blue-300 transition-colors text-gray-900 font-semibold px-6 py-3 rounded-lg shadow">
          Start a Registry
        </button>
        <button className="border border-gray-600 hover:bg-gray-100 transition-colors text-gray-800 font-semibold px-6 py-3 rounded-lg shadow">
          Give a GiftWell
        </button>
      </div>
    </section>
  );
};

export default CareRegistrySection;
