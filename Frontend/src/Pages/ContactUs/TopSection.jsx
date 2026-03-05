import { useState } from "react";

function TopSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    }, 1000);
  };

  const handleOpenMaps = () => {
    window.open(
      "https://www.google.com/maps/place/Chhatarpur,+Madhya+Pradesh/@24.8983662,79.5385687,13z/data=!3m1!4b1!4m6!3m5!1s0x3981a7ebfb0fb2d1:0x42df10af49c23c2e!8m2!3d24.9154979!4d79.5931468!16zL20vMDZmYm45?entry=ttu",
      "_blank",
    );
  };

  return (
    <section className="w-full bg-gray-50 px-4 py-12 md:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="relative h-[400px] overflow-hidden rounded-lg shadow-md md:h-[500px] lg:h-[600px]">
            <button
              onClick={handleOpenMaps}
              className="absolute left-3 top-3 z-10 rounded bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-lg transition-all hover:bg-gray-50 hover:shadow-xl"
            >
              Open in Maps →
            </button>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115318.27149741695!2d79.53856874867187!3d24.898366218719806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981a7ebfb0fb2d1%3A0x42df10af49c23c2e!2sChhatarpur%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1709459876543!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Location"
            ></iframe>
          </div>

          <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-white p-6 shadow-md md:p-8 lg:p-10">
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                Get In Touch With Us
              </h2>
              <p className="mt-3 text-sm text-gray-600">
                If you wish to directly reach us, Please fill out the form below
                -
              </p>

              {showSuccess && (
                <div className="mt-4 rounded-lg bg-green-50 p-4 text-sm text-green-800">
                  Thank you! Your message has been sent successfully.
                </div>
              )}

              <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Your name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`mt-1 w-full rounded-md border px-4 py-2 text-gray-900 transition-colors focus:outline-none focus:ring-2 ${
                      errors.name
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray-300 focus:ring-blue-500"
                    }`}
                    placeholder="Enter your name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-600">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`mt-1 w-full rounded-md border px-4 py-2 text-gray-900 transition-colors focus:outline-none focus:ring-2 ${
                      errors.email
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray-300 focus:ring-blue-500"
                    }`}
                    placeholder="Enter your email"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-600">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Your message (optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your message"
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full rounded-md px-6 py-3 font-semibold text-white transition-all ${
                      isSubmitting
                        ? "cursor-not-allowed bg-blue-400"
                        : "bg-[#001f4d] hover:bg-[#002d6a] hover:shadow-lg"
                    }`}
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TopSection;
