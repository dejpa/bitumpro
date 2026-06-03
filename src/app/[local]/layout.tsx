const locales = ["en", "fr"] as const;

export function generateStaticParams() {
  return locales.map((local) => ({ local }));
}

export default function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
