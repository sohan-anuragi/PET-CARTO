import { FiCheckSquare, FiMessageCircle, FiUser } from "react-icons/fi";

function About4() {
  const cards = [
    {
      title: "Submit a task",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.",
      icon: FiCheckSquare,
    },
    {
      title: "Send message",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.",
      icon: FiMessageCircle,
    },
    {
      title: "Trusted experience",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.",
      icon: FiUser,
    },
  ];

  return (
    <section className="w-full overflow-x-hidden bg-[#f5f5f5] py-10 md:py-14 lg:py-16">
      <style>
        {`
@keyframes iconFloat {
  0%   { transform: translateY(0); }

  

  

  50%  { transform: translateY(-5px); }

  100% { transform: translateY(0); }
}
`}
      </style>
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-4 px-4 sm:px-6 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-7">
        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <article
              key={card.title}
              className="flex min-h-[260px] flex-col items-center justify-center border border-gray-100 bg-[#f8f8f8] px-6 py-10 text-center md:min-h-[280px]"
            >
              <Icon className="mb-7 text-[54px] text-[#0c3460] hover:[animation:iconFloat_0.45s_ease-in-out_2]" />

              <h3 className="text-[1.5rem] font-[500] leading-tight text-slate-900">
                {card.title}
              </h3>

              <p className="mt-4 max-w-[420px] text-[1rem]  text-slate-500">
                {card.description}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default About4;
