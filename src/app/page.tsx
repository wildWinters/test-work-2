
import Header from "./_MAINPAge/header";
import AvoidMistakes from "./_MAINPAge/xceedBlog";
import LastNews from "./_MAINPAge/lastNews";
export default function Home() {
  return (
    <>
      <Header isUserLogged={false}/>
      <AvoidMistakes/>
      <LastNews/>
    </>
  );
}
