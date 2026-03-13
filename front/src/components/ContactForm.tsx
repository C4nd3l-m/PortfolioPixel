const ContactForm = () => {
    return (
      <div className="w-full max-w-xl mx-auto p-8 rounded-2xl bg-metal-black/60 border border-metal-white/30 shadow-[0_0_20px_rgba(255,113,206,0.1)] backdrop-blur-md">
        
        <div className="mb-8 text-center">
            <h2 className="text-2xl font-orbitron font-bold text-metal-white mb-3">Trabajemos Juntos</h2>
            <p className="text-sm font-mono text-metal-red leading-relaxed">
                Cuéntame sobre tu proyecto y cómo el trabajo manual está frenando a tu equipo. Te responderé en 24h con una propuesta inicial.
            </p>
        </div>

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
              className="block text-sm font-mono font-semibold text-metal-white/80 mb-2"
            >
              Nombre
            </label>
            <input
              title="name"
              type="text"
              name="name"
              id="name"
              required
              className="text-white bg-metal-gray/20 w-full px-4 py-3 border border-metal-white/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-metal-red focus:border-transparent transition-all placeholder:text-metal-white/30"
              placeholder="Tu nombre"
            />
          </div>
  
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-mono font-semibold text-metal-white/80 mb-2"
            >
              Correo Electrónico
            </label>
            <input
              title="email"
              type="email"
              name="email"
              id="email"
              required
              className="text-white bg-metal-gray/20 w-full px-4 py-3 border border-metal-white/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-metal-red focus:border-transparent transition-all placeholder:text-metal-white/30"
              placeholder="tu@email.com"
            />
          </div>
  
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-mono font-semibold text-metal-white/80 mb-2"
            >
              Mensaje
            </label>
            <textarea
              title="message"
              name="message"
              id="message"
              required
              className="text-white bg-metal-gray/20 w-full px-4 py-3 border border-metal-white/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-metal-red focus:border-transparent h-32 transition-all placeholder:text-metal-white/30 resize-none"
              placeholder="Hola Candela, me gustaría automatizar..."
            />
          </div>
  
          <button
            type="submit"
            className="w-full py-3 mt-4 bg-metal-red text-metal-black font-orbitron font-bold rounded-lg shadow-[0_0_15px_rgba(255,113,206,0.4)] hover:bg-metal-white hover:text-white hover:shadow-[0_0_20px_rgba(180,68,255,0.6)] focus:outline-none focus:ring-2 focus:ring-metal-red transition-all duration-300"
          >
            Enviar Mensaje
          </button>
        </form>
      </div>
    );
  };
  
  export default ContactForm;
  