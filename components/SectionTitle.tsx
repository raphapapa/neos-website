export default function SectionTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="text-center">
      <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl tracking-wider">
        {title}
      </h2>
      <div className="mt-4 w-16 h-1 bg-gradient-to-r from-neos-red to-neos-red-bright mx-auto" />
      {subtitle && (
        <p className="mt-6 text-lg md:text-xl text-neos-gray">{subtitle}</p>
      )}
    </div>
  );
}
