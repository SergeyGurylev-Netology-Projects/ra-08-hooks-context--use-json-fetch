import useJsonFetch from './json-fetch.js';

export default function Data(props) {
  const [data, loading, error] = useJsonFetch(props.url, props.opts);

  return (
    <div>
      <h4>
        {props.opts}
      </h4>
      {data && <span>{data.status}</span>}
    </div>
  )
}
