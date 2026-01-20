export default function HeroVideoBackground() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-[-1]"
      >
        <source src="/wallpaper.mp4" type="video/mp4" />
      </video>
      <div className="absolute bottom-0 w-full h-64 bg-gradient-to-b from-transparent to-background" />
    </div>
  );
}
