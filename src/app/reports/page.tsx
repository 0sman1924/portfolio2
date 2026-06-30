import type { Metadata } from "next";
import { getAllContent } from "@/lib/content";
import { PageHeader } from "@/components/PageHeader";
import { ReportsList } from "@/components/ReportsList";
import { siteConfig } from "../../../data/site-config";

const pageDescription = "Security analysis reports covering SOC, DFIR, Detection Engineering, and more.";

export const metadata: Metadata = {
  title: "Reports",
  description: pageDescription,
  openGraph: {
    title: "Reports",
    description: pageDescription,
    url: `${siteConfig.url}/reports`,
  },
  twitter: {
    card: "summary",
    title: "Reports",
    description: pageDescription,
  },
};

export default function ReportsPage() {
  const reports = getAllContent("reports");

  // Collect all unique tags across reports
  const allTags = Array.from(
    new Set(reports.flatMap((r) => r.frontmatter.tags))
  ).sort();

  return (
    <main className="max-w-5xl mx-auto px-4 py-16 w-full">
      <PageHeader
        title="Reports"
        description="Security analysis reports covering SOC, DFIR, Detection Engineering, and more."
        count={reports.length}
        countLabel={reports.length === 1 ? "report" : "reports"}
      />

      <ReportsList reports={reports} allTags={allTags} />
    </main>
  );
}
