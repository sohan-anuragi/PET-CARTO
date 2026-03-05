export default function SizeChart() {
  const sizeRows = [
    {
      size: "XS",
      chest: "34-36",
      waist: "28-30",
      hips: "34-36",
      neck: "14.5-15",
      sleeve: "32-33",
      inseam: "30-31",
    },
    {
      size: "S",
      chest: "36-38",
      waist: "30-32",
      hips: "36-38",
      neck: "15-15.5",
      sleeve: "33-34",
      inseam: "31-32",
    },
    {
      size: "M",
      chest: "38-40",
      waist: "32-34",
      hips: "38-40",
      neck: "15.5-16",
      sleeve: "34-35",
      inseam: "32-33",
    },
    {
      size: "L",
      chest: "40-42",
      waist: "34-36",
      hips: "40-42",
      neck: "16-16.5",
      sleeve: "35-36",
      inseam: "33-34",
    },
    {
      size: "XL",
      chest: "42-44",
      waist: "36-38",
      hips: "42-44",
      neck: "16.5-17",
      sleeve: "36-37",
      inseam: "34-35",
    },
    {
      size: "XXL",
      chest: "44-46",
      waist: "38-40",
      hips: "44-46",
      neck: "17-17.5",
      sleeve: "37-38",
      inseam: "35-36",
    },
    {
      size: "XXXL",
      chest: "46-48",
      waist: "40-42",
      hips: "46-48",
      neck: "17.5-18",
      sleeve: "38-39",
      inseam: "36-37",
    },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-[1100px] border border-gray-300 w-full text-left text-[16px] text-gray-700">
        <thead className="bg-gray-100 text-gray-700 font-semibold">
          <tr>
            <th className="px-4 py-3 border border-gray-300 text-center">
              Size
            </th>
            <th className="px-4 py-3 border border-gray-300 text-center">
              Chest (inches)
            </th>
            <th className="px-4 py-3 border border-gray-300 text-center">
              Waist (inches)
            </th>
            <th className="px-4 py-3 border border-gray-300 text-center">
              Hips (inches)
            </th>
            <th className="px-4 py-3 border border-gray-300 text-center">
              Neck (inches)
            </th>
            <th className="px-4 py-3 border border-gray-300 text-center">
              Sleeve Length (inches)
            </th>
            <th className="px-4 py-3 border border-gray-300 text-center">
              Inseam (inches)
            </th>
          </tr>
        </thead>
        <tbody>
          {sizeRows.map((row) => (
            <tr key={row.size} className="hover:bg-gray-50">
              <td className="px-3 py-2 border border-gray-300">{row.size}</td>
              <td className="px-3 py-2 border border-gray-300">{row.chest}</td>
              <td className="px-3 py-2 border border-gray-300">{row.waist}</td>
              <td className="px-3 py-2 border border-gray-300">{row.hips}</td>
              <td className="px-3 py-2 border border-gray-300">{row.neck}</td>
              <td className="px-3 py-2 border border-gray-300">{row.sleeve}</td>
              <td className="px-3 py-2 border border-gray-300">{row.inseam}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
