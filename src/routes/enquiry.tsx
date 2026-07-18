import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/site/PageLayout";
import { EnquiryForm } from "@/components/site/EnquiryForm";

export const Route = createFileRoute("/enquiry")({
  head: () => ({
    meta: [
      { title: "Enquiry - KAREER Studio" },
      {
        name: "description",
        content:
          "Begin your journey with KAREER Studio. Our consultants respond within 24 hours.",
      },
    ],
  }),
  component: EnquiryPage,
});

function EnquiryPage() {
  return (
    <PageLayout>
      <section className="grid min-h-[calc(100vh-160px)] border-y border-border lg:grid-cols-2">
        <div className="flex flex-col justify-center border-b border-border bg-accent/5 p-6 sm:p-10 lg:border-b-0 lg:border-r lg:p-24">
          <span className="font-mono text-sm uppercase tracking-[0.3em] text-accent md:text-base">
            Enquiry
          </span>
          <h1 className="mt-6 font-serif text-4xl italic leading-[1.05] sm:text-5xl md:text-7xl">
            Start your journey
          </h1>
          <p className="mt-6 max-w-sm text-muted-foreground sm:mt-8">
            Tell us where you'd like to go. Our consultants respond within 24
            hours with a tailored next step.
          </p>
        </div>
        <div className="bg-background p-6 sm:p-10 lg:overflow-y-auto lg:p-16 xl:p-24">
          <EnquiryForm />
        </div>
      </section>
    </PageLayout>
  );
}