export default function PageHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="pt-32 pb-16 lg:pt-40 lg:pb-20 text-center">
      <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl tracking-wider">
        {title}
      </h1>
      <div className="mt-4 w-16 h-1 bg-gradient-to-r from-neos-red to-neos-red-bright mx-auto" />
      {subtitle && (
        <p className="mt-6 text-lg text-neos-gray max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
