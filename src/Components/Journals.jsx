import Aos from "aos";
import React, { useEffect } from "react";
import "aos/dist/aos.css";

function Journals() {
  useEffect(() => {
    Aos.init({
      duration: 800,
    });
  });
  return (
    <div className=" my-8 max-md:my-4"> 
      <div className=" w-2/3 mx-auto text-center p-4 max-md:w-full">
        <h1 className="text-4xl  uppercase font-bold text-blue-800 mb-4">
          Journals
        </h1>
        <p>
          MAT Journals Pvt. Ltd. publishes 90+ Peer reviewed, indexed Journals
          in various domains of Engineering, Pharmacy, Nursing and Management.
          We are bound to provide a quality content solution to students,
          Researchers, Academicians, Faculties, Scientists and stakeholders.
        </p>
      </div>
      <div className="flex flex-wrap justify-center mt-8 gap-4">
        <div
          className="w-[30%] max-md:w-full  rounded-md overflow-hidden bg-[url('https://img.freepik.com/free-photo/person-using-ar-technology-perform-their-occupation_23-2151137538.jpg?t=st=1738391965~exp=1738395565~hmac=5638695f29545ade2804d3484c716262d1fac1ff1d8e0c9c16834c2f49ce04cf&w=900')] bg-cover bg-center bg-no-repeat"
          data-aos="zoom-in"
        >
          <div className=" gap-4  w-full h-full bg-[#22222273] text-white ">
            <div className="p-8 max-md:p-4">
              <img
                className="w-16 bg-white p-2 rounded-full mb-4"
                src="https://th.bing.com/th/id/OIP.EIEIx7M-hhJa0sPji3NAmQHaHa?w=800&h=800&rs=1&pid=ImgDetMain"
              />
              <h1 className="text-2xl uppercase font-bold">Engineering</h1>
              <p>
                We believe in empowering excellence, for which we provide 50+
                peer- reviewed, indexed Journals in various categories of
                Engineering.
              </p>
            </div>
          </div>
        </div>
        <div
          className="w-[30%] max-md:w-full  rounded-md overflow-hidden bg-[url('https://cdn.britannica.com/29/123229-050-4EE13335/stethoscopes-rubber-tubing-sounds-patient-ears-physician.jpg')] bg-cover bg-center bg-no-repeat"
          data-aos="zoom-in"
        >
          <div className=" gap-4  w-full h-full bg-[#22222273] text-white ">
            <div className="p-8 max-md:p-4">
              <img
                className="w-16 bg-white p-2 rounded-full mb-4 r"
                src="https://png.pngtree.com/png-clipart/20220130/original/pngtree-medical-nurse-decorative-illustration-png-image_7244564.png"
              />
              <h1 className="text-2xl uppercase font-bold">Nursing</h1>
              <p>
                To keep our audience up to date regarding recent advances in
                health sciences we avail 12 National and 6 International peer-
                reviewed, indexed Journals.
              </p>
            </div>
          </div>
        </div>
        <div
          className="w-[30%] max-md:w-full  rounded-md overflow-hidden bg-[url('https://img.freepik.com/free-photo/medical-banner-with-doctor-wearing-goggles_23-2149611193.jpg?t=st=1738393437~exp=1738397037~hmac=d623a8ffd439dd28ecc54df9d401f30ddec8571b1e2ffa100760798fe0e8fcd8&w=900')] bg-cover bg-center bg-no-repeat"
          data-aos="zoom-in"
        >
          <div className=" gap-4  w-full h-full bg-[#22222273] text-white ">
            <div className="p-8 max-md:p-4">
              <img
                className="w-16 bg-white p-2 rounded-full mb-4"
                src="https://www.pngmart.com/files/23/Pharmacy-PNG-Image.png"
              />
              <h1 className="text-2xl uppercase font-bold">Pharmacy</h1>
              <p>
                We provide platform by sharing quality content in pharmacy
                domain through 12 peer- reviewed, indexed Journals. we avail 12
                National.
              </p>
            </div>
          </div>
        </div>
        <div
          className="w-[30%] max-md:w-full  rounded-md overflow-hidden bg-[url('https://img.freepik.com/free-photo/management-coaching-business-dealing-mentor-concept_53876-133858.jpg?t=st=1738393854~exp=1738397454~hmac=9112d2bd22dda4466ea0ff814681a5f1b1ee5e0c60fb737c14224793fc71e8e8&w=900')] bg-cover bg-center bg-no-repeat"
          data-aos="zoom-in"
        >
          <div className=" gap-4  w-full h-full bg-[#22222273] text-white ">
            <div className="p-8 max-md:p-4">
              <img
                className="w-16 bg-white p-2 rounded-full mb-4"
                src="https://th.bing.com/th/id/OIP.6dpLDtsdDh0YksDbRSZjuwHaHA?rs=1&pid=ImgDetMain"
              />
              <h1 className="text-2xl uppercase font-bold">Management</h1>
              <p>
                We committed to publish online and print peer reviewed journals.
                We accept case study / Research / Review article in all field of
                Management.
              </p>
            </div>
          </div>
        </div>
        <div
          className="w-[61%] max-md:w-full  rounded-md overflow-hidden bg-[url('https://img.freepik.com/free-photo/horizontal-view-office-suppliances-pen-cinnamon-limes-conifer-cone-brown-towel-dark-background_140725-140696.jpg?t=st=1738394652~exp=1738398252~hmac=93089e50f37012f723a1dad5ef7aade70928b84e1f170cdf3b547894532f3c29&w=900')] bg-cover bg-center bg-no-repeat"
          data-aos="zoom-in"
        >
          <div className=" gap-4 w-full h-full bg-[#22222273] text-white ">
            <div className="p-8 max-md:p-4">
              <img
                className="w-16 bg-white p-2 rounded-full mb-4"
                src="https://cdn3.iconfinder.com/data/icons/pyconic-icons-1-2/512/download-2-1024.png"
              />
              <h1 className="text-2xl uppercase font-bold">Download</h1>
              <a className=" underline" href="#">
                MAT Journals Catalogue/Price List - 2025
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Journals;
