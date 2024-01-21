import MaxWidthWrapper from "@/components/global/MaxWidthWrapper";
import { PortableText } from "@portabletext/react";
import { getProjects } from "../../../sanity/lib/query";
import { ProjectType } from "../../../types/Project";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/Button";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";

const perks = [
  {
    name: "Instant Delivery",
    Icon: ArrowDownToLine,
    description: "Get your assets delivered to your email in seconds and download them right away",
  },
  {
    name: "Guaranteed Quality",
    Icon: CheckCircle,
    description: "Every assets on our platform is verified by our team to ensure our highest quality standards. Not Happy? We offer a 30-days refund guaranteed.",
  },
  {
    name: "For the Planet",
    Icon: Leaf,
    description: "We've pledge 1% of sales to the preservation and restoration of the natural environment.",
  },
];

export default async function Home() {
  const projects: ProjectType[] = await getProjects();

  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight">
            Your All-In-One space for High-Quality <span className="text-primary/80">Dance Information</span>.
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Welcome to Dance Culture. Every asset on our platform is verified by our team to ensure our highest quality standards.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="/genres" className={buttonVariants()}>
              Browse Genres
            </Link>
            <Button variant={"ghost"}>Our quality promise &rarr;</Button>
          </div>
        </div>
      </MaxWidthWrapper>
      {/* TODO: List Products */}
      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perk) => (
              <div key={perk.name} className="text-center md:flex md:items-start md:text-left lg:block lg:text-center">
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-primary/10 text-primary/90">{<perk.Icon className="w-1/3 h-1/3" />}</div>
                </div>
                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-base font-medium text-gray-900">{perk.name}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{perk.description}</p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>

      {/* <div className="mb-32 flex flex-col items-start justify-start gap-5 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:text-left">
        <h1>Project Section</h1>
        {projects &&
          projects.map((project) => (
            <div key={project._id} className="lg:max-w-2xl max-w-2xl">
              <h1 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight lg:min-w-[700px] min-w-full">{project.name}</h1>
              <p className="text-base text-zinc-400 leading-relaxed">{project.tagline}</p>
              <div className="flex flex-col gap-y-6 mt-8 leading-7 text-zinc-400">
                <PortableText value={project.description} />
              </div>
            </div>
          ))}
      </div> */}
    </>
  );
}
