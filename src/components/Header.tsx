import { MdOutlinePlace } from "react-icons/md";

export const Header = () => {
  return (
    <section className="space-y-2">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold">aditya k</h1>

        <span className="flex items-center gap-1 text-gray-500">
          <MdOutlinePlace size="14" />
          <p className="text-xs">delhi, in</p>
        </span>

        <p className="text-sm text-gray-400">
          software engineer. into startups, ml, mathematics. submitted to
          computer god.
        </p>
      </div>
    </section>
  );
};
