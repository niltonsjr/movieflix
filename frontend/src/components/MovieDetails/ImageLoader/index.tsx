import ContentLoader from "react-content-loader"

const ImageLoader = () => (
  <ContentLoader 
    speed={2}
    width={320}
    height={390}
    viewBox="0 0 320 350"
    backgroundColor="#6c6c6c"
    foregroundColor="#c7c2c2"
  >
    <rect x="0" y="0" rx="0" ry="0" width="290" height="350" />
  </ContentLoader>
)

export default ImageLoader;