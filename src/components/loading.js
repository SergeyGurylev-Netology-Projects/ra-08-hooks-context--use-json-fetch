import useJsonFetch from './json-fetch.js';

export default function Loading(props) {
  const [data, loading, error] = useJsonFetch(props.url, props.opts);

  return (
    <div>
      <h4>
        {props.opts}
      </h4>
      {loading && <span>loading...</span>}
      {!loading && data && <span>{data.status}</span>}
    </div>
  )
}
