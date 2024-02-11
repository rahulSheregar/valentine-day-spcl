import jsondata from "../proposal.json"
export const dynamic = 'force-static';
export default function EndpointPage({ params }) {
  return <p>Post: {jsondata[params.endpoint]}</p>
}