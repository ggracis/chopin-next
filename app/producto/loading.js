import Image from "next/image";

const Loading = () => (
  <div className="flex justify-center items-center min-h-screen">
    <Image
      src="/chopin_w.png"
      width={200}
      height={200}
      className="animate-pulse"
      alt="Cargando..."
    />
  </div>
);

export default Loading;
