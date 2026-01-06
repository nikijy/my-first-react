type CardProps = {
  title: string;
  description: string;
  color?: string;
};

export default function Card({ title, description ,color}: CardProps) {
  return (
    <div className="rounded-xl border p-6 shadow-sm bg-white dark:bg-zinc-900">
   <h2
        className={`text-xl font-semibold ${
          color ? color : "text-zinc-900 dark:text-white"
        }`}
      >        {title}
      </h2>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">
        {description}
      </p>
    </div>
  );
}