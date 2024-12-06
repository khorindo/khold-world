import TopNav from "./top_nav";

export default function MainLayout({ children }) {
  return (
    <>
      <header>
        <TopNav />
      </header>
      <main>{children}</main>
      <footer></footer>
    </>
  );
}
