import { useContext, useState } from "react";
import {
  FaRegUserCircle,
  FaRegThumbsUp,
  FaRegThumbsDown,
} from "react-icons/fa";
import { ReviewsContext, ReviewsProvider } from "./ReviewsStore";

function ReviewsContent() {
  const { reviews, dispatch } = useContext(ReviewsContext);

  const [rating, setRating] = useState(0);
  const [reviewTitle, setReviewTitle] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("Sohan Anuragi");
  const [email, setEmail] = useState("sohananuragi81@gmail.com");
  const [saveInfo, setSaveInfo] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !name.trim() ||
      !email.trim() ||
      !reviewTitle.trim() ||
      !message.trim() ||
      !rating
    ) {
      return;
    }

    const currentDate = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    const newReview = {
      id: Date.now(),
      name,
      rating,
      title: reviewTitle,
      message,
      date: currentDate,
    };

    dispatch({
      type: "ADD_REVIEW",
      payload: newReview,
    });

    setRating(0);
    setReviewTitle("");
    setMessage("");
    setName("");
    setEmail("");
    setSaveInfo(false);
  };

  return (
    <section className="w-full pt-[1rem] bg-white">
      <div className="flex flex-col md:flex-row gap-10">
        <div className="w-full md:w-[60%]">
          <h2 className="text-[1.5rem] p-[1rem] leading-none font-medium text-[#0f2747] mb-4">
            {reviews.length} review{reviews.length > 1 ? "s" : ""} for Pbka
            Grain Free Active Dog &amp; Puppy Dog Food
          </h2>

          <div className="space-y-4">
            {reviews.map((item) => (
              <article
                key={item.id}
                className="border rounded-lg p-6 bg-gray-50"
              >
                <div className="flex items-start gap-4">
                  <FaRegUserCircle className="text-gray-400 text-5xl shrink-0" />

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                      <p className="text-sm text-gray-500">
                        <span className="font-medium text-gray-600">
                          {item.name}
                        </span>{" "}
                        – {item.date}
                      </p>
                      <p className="text-yellow-400 text-base leading-none">
                        {"★".repeat(item.rating)}
                      </p>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-800 mt-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mt-1 leading-relaxed">
                      {item.message}
                    </p>

                    <div className="flex justify-end gap-2 mt-4">
                      <button className="w-7 h-7 border border-gray-300 flex items-center justify-center text-gray-400 text-xs">
                        <FaRegThumbsUp />
                      </button>
                      <button className="w-7 h-7 border border-gray-300 flex items-center justify-center text-gray-400 text-xs">
                        <FaRegThumbsDown />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="w-full md:w-[40%] border rounded-lg p-6 bg-gray-50 h-fit">
          <h3 className="text-[24px] leading-none font-semibold text-[#0f2747]">
            Add a review
          </h3>
          <p className="text-[15px] text-gray-500 italic mt-4">
            Your email address will not be published. Required fields are marked
            <span className="text-red-500"> *</span>
          </p>

          <form className="mt-5 space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-[#0f2747] mb-1">
                Your Rating <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((starValue) => (
                  <button
                    type="button"
                    key={starValue}
                    onClick={() => setRating(starValue)}
                    className={`text-xl ${
                      starValue <= rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                    aria-label={`Rate ${starValue} star`}
                  >
                    ★
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-[#0f2747] mb-1">Review title</label>
              <input
                type="text"
                value={reviewTitle}
                onChange={(event) => setReviewTitle(event.target.value)}
                className="border rounded p-2 w-full"
              />
            </div>

            <div>
              <label className="block text-[#0f2747] mb-1">
                Your Review <span className="text-red-500">*</span>
              </label>
              <textarea
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                className="border rounded p-2 w-full h-28 resize-none"
              />
            </div>

            <div>
              <label className="block text-[#0f2747] mb-1">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="border rounded p-2 w-full"
              />
            </div>

            <div>
              <label className="block text-[#0f2747] mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="border rounded p-2 w-full"
              />
            </div>

            <label className="flex items-start gap-2 text-gray-600 text-sm">
              <input
                type="checkbox"
                checked={saveInfo}
                onChange={(event) => setSaveInfo(event.target.checked)}
                className="mt-1"
              />
              <span>
                Save my name, email, and website in this browser for the next
                time I comment.
              </span>
            </label>

            <button
              type="submit"
              className="bg-blue-900 text-white rounded px-6 py-2 font-semibold"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default function Reviews() {
  return (
    <ReviewsProvider>
      <ReviewsContent />
    </ReviewsProvider>
  );
}
