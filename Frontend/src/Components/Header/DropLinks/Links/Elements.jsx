import elementsList from "../../NavBar/Menu/Elements/ElementsData";

export default function Elements() {
  return (
    <div className="bg-white p-6">
      <div className="space-y-3">
        {elementsList.map((item) => (
          <a
            key={item.id}
            href={item.link}
            className="flex items-center gap-3 text-gray-700 hover:text-blue-600"
          >
            {item.hasIcon && (
              <div className="w-4 h-4 border border-gray-400 rounded-sm flex flex-col justify-center gap-0.5 px-1">
                <span className="block h-0.5 bg-gray-400"></span>
                <span className="block h-0.5 bg-gray-400"></span>
              </div>
            )}

            <span className="text-sm">{item.title}</span>

            {item.badge && (
              <span
                className={`text-[10px] px-2 py-0.5 rounded ${
                  item.badge.type === "pink"
                    ? "bg-pink-100 text-pink-600"
                    : "bg-blue-100 text-blue-600"
                }`}
              >
                {item.badge.text}
              </span>
            )}
          </a>
        ))}
      </div>
    </div>
  );
}
