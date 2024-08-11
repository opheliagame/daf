export default function DictLayout1({children}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      {children}
    </div>
  )

}