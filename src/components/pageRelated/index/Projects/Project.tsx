import Link from "next/link";

export const Project = ({
  icon,
  title,
  description,
  link,
  timeframe,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  timeframe?: string;
}) => {
  return (
    <Link
      href={link}
      className="relative flex items-center gap-2 p-2 transition-all rounded-lg group hover:bg-base-200 max-w-sm"
    >
      <span className="text-xs text-gray-500 transition-colors group-hover:text-primary">
        {icon}
      </span>

      <div className="flex-1 min-w-0">
        <div className="flex items-baseline gap-1">
          <h3 className="text-sm font-medium truncate text-gray-100">
            {title}
          </h3>
          {timeframe && (
            <span className="text-[10px] text-gray-500">{timeframe}</span>
          )}
          <span className="hidden text-[10px] opacity-50 group-hover:inline">
            ↗
          </span>
        </div>
        <p className="text-xs text-gray-400">{description}</p>
      </div>
    </Link>
  );
};
