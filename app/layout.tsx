import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kikesantander',
  description: 'Project repository for kikesantander',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
