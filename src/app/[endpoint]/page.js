import jsondata from "../proposal.json"

export default function EndpointPage({ params }) {
  return <p>Post: {jsondata[params.endpoint]}</p>
}