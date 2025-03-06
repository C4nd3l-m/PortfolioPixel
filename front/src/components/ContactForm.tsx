const ContactForm = () => {
    return (
      <div className="w-full max-w-lg mx-auto p-8 rounded-lg shadow-lg">
        <form
          action="https://formsubmit.co/c4nd3l.m@gmail.com"
          method="POST"
          className="space-y-6"
        >
          <input
            type="hidden"
            name="_next"
            value="https://portfolio-candes-projects-5fc59a09.vercel.app/thanks"
          />
  
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-white-700 mb-2"
            >
              Name
            </label>
            <input
              title="name"
              type="text"
              name="name"
              id="name"
              required
              className=" text-black w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
  
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-white-700 mb-2"
            >
              Email
            </label>
            <input
              title="email"
              type="email"
              name="email"
              id="email"
              required
              className="text-black w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
  
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-white-700 mb-2"
            >
              Message
            </label>
            <textarea
              title="message"
              name="message"
              id="message"
              required
              className="text-black w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent h-32"
            />
          </div>
  
          <button
            type="submit"
            className="w-full py-3 bg-purple-500 text-white font-semibold rounded-md shadow-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
          >
            Send
          </button>
        </form>
      </div>
    );
  };
  
  export default ContactForm;
  