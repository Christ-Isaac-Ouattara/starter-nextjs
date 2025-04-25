export default function About() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-6xl font-bold mb-4">À propos de nous</h1>
      <p className="text-xl mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <a
        href="#"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Learn More
      </a>
    </div>
  );
}