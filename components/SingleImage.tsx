interface SingleImageProps {
  src: string;
  alt: string;
}

const SingleImage: React.FC<SingleImageProps> = ({ src, alt }) => {
  return (
    <div className="relative w-full mt-5">
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
};

export default SingleImage;
