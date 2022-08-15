import { useRouter } from "next/router";

export default function usePage() {
  const { route } = useRouter();

  const page = route === "/" ? "Index" : route.slice(1);

  return page;
}
