const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className="pt-20 px-[10%]">{children}</div>;
};

export default Layout;
