import { json, LoaderArgs } from "@remix-run/node";
import { useCatch, useLoaderData } from "@remix-run/react";

export async function loader({ request }: LoaderArgs) {
  throw json({ test: true }, { status: 401, statusText: "Unauthorized" });
}

export default function Test() {
  const data = useLoaderData();
  return <div>test</div>;
}

export function CatchBoundary() {
  const caught = useCatch();

  return (
    <div>
      <h1>Caught</h1>
      <p>Status: {caught.status}</p>
      <pre>
        <code>{JSON.stringify(caught.data, null, 2)}</code>
      </pre>
    </div>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <div>
      <h1>Error</h1>
      <p>{error.message}</p>
      <p>The stack trace is:</p>
      <pre>{error.stack}</pre>
    </div>
  );
}
