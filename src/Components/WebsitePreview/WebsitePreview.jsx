
function WebsitePreview({ url, name, icon: Icon }) {
  const [failed, setFailed] = useState(false);

  const previewUrl =
    `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=900`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`project-preview ${failed ? "preview-fallback" : ""}`}
      aria-label={`Visit ${name}`}
    >
      {!failed && (
        <img
          src={previewUrl}
          alt={`${name} website preview`}
          loading="lazy"
          onError={() => setFailed(true)}
        />
      )}

      {failed && (
        <div className="preview-placeholder">
          <Icon size={36} />
          <span>{name}</span>
          <small>Open live website ↗</small>
        </div>
      )}

      <span className="preview-open">
        <ArrowUpRight size={19} />
      </span>
    </a>
  );
}
