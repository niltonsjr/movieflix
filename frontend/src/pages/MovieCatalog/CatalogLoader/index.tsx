import ContentLoader from "react-content-loader"

const CatalogLoader = () => (
  <ContentLoader 
    speed={2}
    width={320}
    height={500}
    viewBox="0 0 100 100"
    backgroundColor="#6c6c6c"
    foregroundColor="#c7c2c2"
    style={{ padding: '20px', }}
  >
    <rect x="-1" y="-1" rx="2" ry="2" width="320" height="500" /> 
    <rect x="108" y="185" rx="0" ry="0" width="9" height="0" />
  </ContentLoader>
)

export default CatalogLoader