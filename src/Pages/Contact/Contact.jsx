import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [openModal, SetOpenModal] = useState(false);
  const toggleModal = () => {
    SetOpenModal(!openModal);
  };
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_whcwqre",
        "template_lbny2xi",
        e.target,
        "_HIv6dlM376cexXJB"
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
  };
  return (
    <div>
      <div className="w-1/2 mx-auto my-24 text-center">
        <h1 className="text-5xl font-bold text-gray-100">Get In Touch</h1>

        <p className="py-6 text-gray-400">
          I’m currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I’ll try my best
          to get back to you!
        </p>

        <div className="my-12">
          <button
            className="py-2 px-6 border-4 border-violet-400 text-violet-400 rounded hover:bg-violet-900 transition font-medium duration-500"
            onClick={toggleModal}
          >
            SAY HELLO
          </button>
        </div>
      </div>

      {/* Modal starts */}

      <div className=""></div>
      <div
        className={`fixed z-10 overflow-y-auto top-0 w-full left-0 ${
          openModal ? "block" : "hidden"
        }`}
        id="modal"
      >
        <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity">
            <div className="absolute inset-0 bg-gray-900 opacity-75" />
          </div>
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
            &#8203;
          </span>
          <div
            className="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <form ref={form} onSubmit={sendEmail}>
              <div className="bg-violet-900 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <label className="font-medium text-violet-200">Email</label>
                <input
                  type="text"
                  placeholder="example@gmail.com"
                  className="w-full outline-none rounded bg-violet-900 border-b-2 border-violet-200 p-2 mt-2 mb-3"
                  name="user_email"
                  required
                />
                <label className="font-medium text-violet-200">Subject</label>
                <input
                  type="text"
                  placeholder="What do you want to say?"
                  className="w-full outline-none rounded bg-violet-900 border-b-2 border-violet-200 p-2 mt-2 mb-3"
                  name="subject"
                  required
                />
                <label className="font-medium text-violet-200">Message</label>
                <textarea
                  type="text"
                  placeholder="Jot down your lovey dovey message here!!"
                  className="w-full outline-none rounded bg-violet-900 border-b-2 border-violet-200 p-2 mt-2 mb-3"
                  name="message"
                  required
                />
              </div>
              <div className="bg-violet-900 px-4 py-3 text-center">
                <button
                  type="button"
                  className="py-2 px-4 bg-red-700 text-white rounded hover:bg-red-500 mr-2"
                  onClick={toggleModal}
                >
                  <i className="fas fa-times"></i> Cancel
                </button>
                <button
                  type="submit"
                  className="py-2 px-4 bg-violet-500 text-white rounded font-medium hover:bg-violet-700 transition duration-500"
                  value="Submit"
                >
                  Submit
                  <i className="fas fa-arrow-right ml-2"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* ends modal */}

      {/* daisy form add */}
    </div>
  );
};

export default Contact;
