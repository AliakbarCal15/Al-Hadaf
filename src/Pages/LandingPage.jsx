// src/pages/LandingPage.jsx
import Header from "../components/Header";

function LandingPage() {
  return (
    <div className="relative min-h-screen w-full">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section
        className="h-screen flex items-center justify-center text-center"
        style={{
          backgroundImage: "url('/src/assets/hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-black bg-opacity-40 p-6 rounded">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Foremost And Reliable
          </h1>
          <p className="text-xl md:text-2xl text-yellow-400 mb-6">
            Powder Coating Services For You
          </p>
          <button className="px-6 py-3 rounded bg-yellow-500 text-white font-bold hover:bg-yellow-600">
            Enquire Now
          </button>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
