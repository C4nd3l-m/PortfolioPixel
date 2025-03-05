const ContactForm = () => {
    return (
        <div>
            <form action="https://formsubmit.co/c4nd3l.m@gmail.com" method="POST">
                <input type="hidden" name="_next" value="https://portfolio-candes-projects-5fc59a09.vercel.app/thanks" />

                <div>
                    <label>Name</label>
                    <input title="name" type="text" name="name" required />
                </div>

                <div>
                    <label>Email</label>
                    <input title="email" type="email" name="email" required />
                </div>

                <div>
                    <label>Message</label>
                    <textarea title="message" name="message" required />
                </div>

                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default ContactForm;
