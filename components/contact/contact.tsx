export default function Contact(){
  return(
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
    <h1 className="text-6xl font-bold mb-4">Contactez-nous</h1>
    <p className="text-xl mb-8">
      N'hésitez pas à nous contacter pour toute question ou demande d'information.
    </p>
    <form className="w-full max-w-md text-black">
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nom</label>
        <input type="text" id="name" name="name" className="mt-1 p-2 w-full border rounded-md" />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input type="email" id="email" name="email" className="mt-1 p-2 w-full border rounded-md" />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
        <textarea id="message" name="message" className="mt-1 p-2 w-full border rounded-md"></textarea>
      </div>
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Envoyer</button>
    </form>
  </div>
  ) ;
  
}