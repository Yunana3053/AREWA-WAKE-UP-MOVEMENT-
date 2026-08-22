export const metadata = {
  title: 'AREWA WAKE UP MOVEMENT',
  description: 'Platform of serious Northerns committed to peace, unity, education, and development',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{margin: 0, fontFamily: 'system-ui'}}>{children}</body>
    </html>
  )
}
