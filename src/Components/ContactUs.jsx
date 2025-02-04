import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";
import Aos from "aos";

function ContactUs() {
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  });

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm
      // "service_zyqoo8t",
      // "template_uljz5ob",
      // e.target,
      // "NafiisQH6PnnknfiV"
      ()
      .then(
        (result) => {
          console.log(result.text);
          setIsSuccess(true);
          setIsSending(false);
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to send the message. Please try again later.");
          setIsSending(false);
        }
      );

    e.target.reset();
  };

  return (
    <>
      <section className="py-12 md:py-20 xl:py-32">
        <Toaster />
        <div className=" mx-auto px-4">
          <div className="flex justify-center">
            <div className="w-full md:w-10/12 lg:w-8/12 xl:w-7/12 2xl:w-6/12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-[#214fc6] ">
                CONTACT US
              </h2>
              <hr className="w-1/2 mx-auto mb-12 border-gray-300" />
              <p className="text-black mb-12 text-lg">
                We are supported by dedicated and experienced professionals that
                identify the exact needs and preferences of the customers and
                serve them accordingly in an efficient and hassle-free manner.
              </p>
            </div>
          </div>
        </div>

        <div className=" mx-auto px-4">
          <div className="w-full">
            <div className="bg-white border border-gray-300 rounded-lg shadow-sm overflow-hidden">
              <div className="p-0">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div
                    data-aos="flip-right"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                    className="relative border-b lg:border-b-0 lg:border-r border-gray-300 bg-cover bg-center bg-no-repeat "
                    style={{
                      backgroundImage: 'url("/path/to/your/image.jpg")',
                    }}
                  >
                    <div className="flex flex-col items-center justify-center h-full p-8">
                      <div className="text-center lg:text-left">
                        <div className="flex mb-8">
                          <div className="mr-4 text-blue-500">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="32"
                              height="32"
                              fill="currentColor"
                              className="bi bi-geo"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fillRule="evenodd"
                                d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z"
                              />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-lg font-bold text-blue-800 mb-2">
                              Address
                            </h4>
                            <address className="text-gray-900">
                              <h2 className="font-bold">
                                MAT JOURNALS PVT. LTD.
                              </h2>
                              Office No-301, 2nd Floor, Plot No:CS-4, Gyan
                              Khand-2, Indirapuram, Ghaziabad, Uttar Pradesh,
                              India, Pin 201014
                            </address>
                          </div>
                        </div>
                        <div className="flex flex-wrap mb-8">
                          <div className="w-full xl:w-1/2 mb-4 xl:mb-0">
                            <div className="flex mb-8">
                              <div className="mr-4 text-blue-500">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="32"
                                  height="32"
                                  fill="currentColor"
                                  className="bi bi-telephone-outbound"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5z" />
                                </svg>
                              </div>
                              <div>
                                <h4 className="text-lg font-bold text-blue-800 mb-2">
                                  Phone
                                </h4>
                                <p className="text-gray-900">
                                  <Link
                                    className="text-gray-900 hover:text-gray-900"
                                    to="#"
                                  >
                                    +91-8506060024 , +91-8506060041
                                  </Link>
                                </p>
                                <p className="text-gray-900">
                                  <Link
                                    className="text-gray-900 hover:text-gray-900"
                                    to="#"
                                    title="WhatsApp Chat Available this number"
                                  >
                                    0120-4289321 0120-4289322
                                  </Link>
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="w-full xl:w-1/2">
                            <div className="flex mb-0">
                              <div className="mr-4 text-blue-500">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="32"
                                  height="32"
                                  fill="currentColor"
                                  className="bi bi-envelope"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-5.857 3.514L15 12.383V5.383zM1 5.383v6.993l5.857-3.486L1 5.383zm6.646 4.126L2 12.618V12h12v.618l-5.646-3.109z" />
                                </svg>
                              </div>
                              <div>
                                <h4 className="text-lg font-bold text-blue-800 mb-2">
                                  Email
                                </h4>
                                <p className="mb-0">
                                  <Link
                                    className="text-gray-900 hover:text-gray-900"
                                    to="mailto:info@matjournals.com"
                                  >
                                    info@matjournals.com
                                  </Link>
                                </p>
                                <p className="mb-0">
                                  <Link
                                    className="text-gray-900 hover:text-gray-900"
                                    to="mailto:matjournals@gmail.com"
                                  >
                                    matjournals@gmail.com
                                  </Link>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="p-8"
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                  >
                    <div className="text-center">
                      <h2 className="text-3xl font-bold mb-3 text-blue-800">
                        Drop your enquiry
                      </h2>
                      <p className="text-lg text-gray-900 mb-8">
                        Fill out the form below and we will get back to you as
                        soon as possible.
                      </p>
                      {isSuccess ? (
                        <div className="text-center mt-20 text-lg font-semibold text-green-600">
                          Thank you! Your message has been sent successfully.
                        </div>
                      ) : (
                        <form onSubmit={sendEmail}>
                          <div className="grid lg:grid-cols-2 gap-4 mb-4">
                            <div>
                              <input
                                type="text"
                                name="first_name"
                                className="block w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                                placeholder="First Name"
                                required
                              />
                            </div>
                            <div>
                              <input
                                type="tel"
                                name="phone"
                                className="block w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                                placeholder="Phone Number"
                                pattern="\d{10}"
                                maxLength="10"
                                required
                                title="Enter 10-digit phone number"
                              />
                            </div>
                          </div>
                          <div className="mb-4">
                            <input
                              type="email"
                              name="email"
                              className="block w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                              placeholder="Email"
                              required
                            />
                          </div>
                          <div className="mb-4">
                            <textarea
                              name="message"
                              className="block w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                              rows="4"
                              placeholder="Message"
                              required
                            ></textarea>
                          </div>
                          <div className="text-center">
                            {isSending ? (
                              <button
                                type="button"
                                disabled
                                className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md"
                              >
                                Sending...
                              </button>
                            ) : (
                              <button
                                type="submit"
                                className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md"
                              >
                                Send Message
                              </button>
                            )}
                          </div>
                        </form>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactUs;
