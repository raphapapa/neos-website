import Hero from "@/components/home/Hero";
import AboutPreview from "@/components/home/AboutPreview";
import PlayerHighlight from "@/components/home/PlayerHighlight";
import NewsPreview from "@/components/home/NewsPreview";
import SponsorSection from "@/components/home/SponsorSection";
import SectionDivider from "@/components/shared/SectionDivider";
import { getPlayers } from "@/lib/api/players";
import { getArticles } from "@/lib/api/articles";
import { getSponsors } from "@/lib/api/sponsors";

export default async function Home() {
  const [players, articlesRes, sponsors] = await Promise.all([
    getPlayers(),
    getArticles(1, 4),
    getSponsors(),
  ]);

  return (
    <>
      <Hero />
      <AboutPreview />
      <SectionDivider />
      <PlayerHighlight players={players} />
      <SectionDivider />
      <NewsPreview articles={articlesRes.articles} />
      <SectionDivider />
      <SponsorSection sponsors={sponsors} />
    </>
  );
}
