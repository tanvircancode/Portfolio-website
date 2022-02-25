import emailjs from 'emailjs-com';
import '../styles/ContactSection.css';

export default function ContactSection() {
  //   const form = useRef();
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        'gmail',
        'template_rcmb52j',
        e.target,
        'user_94juTd9UmbhCbsMnaUqq4'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  }

  return (
    <div className="contact-container">
      <div className="rightpart-p-contact">
        <div className="contact-main-container">
          <div className="contact-items">
            <div className="contact-title">Contact</div>
            <div className="contact-touch">Get in Touch</div>
            <div className="fields">
              <form onSubmit={sendEmail}>
                <ul>
                  <li>
                    <input type="text" name="name" placeholder="Name" />
                  </li>
                  <li>
                    <input type="email" name="email" placeholder="Email" />
                  </li>
                  <li>
                    <textarea name="message" placeholder="Message"></textarea>
                  </li>
                </ul>
                <div className="form-submit">
                  <button type="submit" className="form-button">Send message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
