import Footer from "./Footer";
import Navigation from "./Navigation";

/**
 * Wrapper for the non-home pages.
 * Home page uses a special structure due to fullpage.js
 */
export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  );
}
