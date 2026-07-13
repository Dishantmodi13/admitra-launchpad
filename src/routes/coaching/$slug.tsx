import { createFileRoute, redirect } from "@tanstack/react-router";
import { CoachingProgramPage } from "@/components/site/CoachingProgramPage";
import { getCoachingProgram } from "@/data/coaching-programs";

export const Route = createFileRoute("/coaching/$slug")({
  head: ({ params }) => {
    const program = getCoachingProgram(params.slug);
    if (!program) return { meta: [{ title: "Coaching - KAREER Studio" }] };
    return {
      meta: [
        { title: program.metaTitle },
        { name: "description", content: program.metaDescription },
      ],
    };
  },
  beforeLoad: ({ params }) => {
    const program = getCoachingProgram(params.slug);
    if (!program) {
      throw redirect({ to: "/coaching" });
    }
  },
  component: CoachingProgramRoute,
});

function CoachingProgramRoute() {
  const { slug } = Route.useParams();
  const program = getCoachingProgram(slug)!;
  return <CoachingProgramPage program={program} />;
}
