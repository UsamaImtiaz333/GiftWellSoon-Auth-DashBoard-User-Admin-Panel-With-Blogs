import heroBackimage from "../assets/hug.jpg"
export default function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center bg-gray-900 text-white">
      <div className="absolute inset-0">
        <img
          src={heroBackimage}
          alt="Hero background"
          className="w-full h-full object-cover opacity-70"
        />
      </div>

      <div className="relative text-center max-w-2xl px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          The care registry for life’s toughest moments
        </h1>
        <p className="mb-6 text-lg text-gray-200">
          Because support should be simple, thoughtful, and truly helpful.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-blue-500 px-5 py-3 rounded-lg hover:bg-blue-600">
            Start a Registry
          </button>
          <button className="bg-gray-100 text-gray-900 px-5 py-3 rounded-lg hover:bg-gray-200">
            Give a Registry
          </button>
        </div>
      </div>
    </section>
  );
}
