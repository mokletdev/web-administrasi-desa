import { getSubmissions } from "./actions";

export default async function Submission() {
  const submissions = await getSubmissions();

  console.log(submissions);

  return <></>;
}
