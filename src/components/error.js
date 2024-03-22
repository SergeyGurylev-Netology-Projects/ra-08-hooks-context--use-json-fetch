import useJsonFetch from './json-fetch.js';

export default function Error(props) {
  const [data, loading, error] = useJsonFetch(props.url, props.opts);

  return (
    <div>
      <h4>
        {props.opts}
      </h4>
      {error && <div>{error}</div>}
    </div>
  )
}
