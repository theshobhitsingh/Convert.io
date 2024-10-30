// app/about/page.tsx
'use client';

export default function About() {
  return (
    <div className="space-y-12 text-md md:text-lg text-gray-300 bg-gray-900 pb-4 md:pb-8 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 glow">
        About Convert.io
      </h1>
      <p className="text-gray-200">
        Introducing Convert.io, the ultimate multimedia conversion powerhouse that empowers you to transform images, audio files, and videos with unprecedented freedom, all at absolutely no cost! Say goodbye to limitations and hello to limitless creative possibilities.
      </p>

      <div className="space-y-2">
        <h2 className="text-xl md:text-2xl font-semibold text-white glow">
          🖼️ Image Conversion:
        </h2>
        <p className="text-gray-200">
          Unleash your creativity with our image conversion tool. Whether you need to resize, crop, rotate, or convert formats, I've got you covered. From JPEG to PNG, and everything in between, effortlessly enhance your visual content.
        </p>
      </div>

      <div className="space-y-2">
        <h2 className="text-xl md:text-2xl font-semibold text-white glow">
          🎵 Audio Transformation:
        </h2>
        <p className="text-gray-200">
          Turn up the volume on your audio projects! With our audio conversion capabilities, you can convert audio files between various formats like MP3, WAV, or AAC. Adjust bitrates, trim, and merge audio files to create your perfect soundtrack.
        </p>
      </div>

      <div className="space-y-2">
        <h2 className="text-xl md:text-2xl font-semibold text-white glow">
          🎥 Video Metamorphosis:
        </h2>
        <p className="text-gray-200">
          Lights, camera, action! Edit and transcode videos without limits. From changing video formats to cutting and merging clips, you can create stunning video content for any platform or purpose.
        </p>
      </div>

      <div className="space-y-2">
        <h2 className="text-xl md:text-2xl font-semibold text-white glow">
          🚀 Unlimited Usage, No Strings Attached:
        </h2>
        <p className="text-gray-200">
          Unlike other services, I believe in empowering your creativity without hidden fees or restrictions. You can convert as many images, audio files, and videos as your heart desires, and it won't cost you anything.
        </p>
      </div>

      <div className="space-y-2">
        <h2 className="text-xl md:text-2xl font-semibold text-white glow">
          🌐 Accessible Anywhere:
        </h2>
        <p className="text-gray-200">
          Access Convert.io from any device with an internet connection. Whether you're on your computer, tablet, or smartphone, you can use our platform with ease.
        </p>
      </div>

      <div className="space-y-2">
        <h2 className="text-xl md:text-2xl font-semibold text-white glow">
          🔒 Secure and Private:
        </h2>
        <p className="text-gray-200">
          Rest easy knowing that your multimedia files are treated with the utmost care. We prioritize your privacy and data security, ensuring that your files remain yours alone.
        </p>
      </div>

      <div className="space-y-2">
        <h2 className="text-xl md:text-2xl font-semibold text-white glow">
          💡 User-Friendly Interface:
        </h2>
        <p className="text-gray-200">
          Intuitive Interface is designed for both beginners and experts, making the conversion process a breeze. No technical expertise required!
        </p>
      </div>

      <div className="space-y-2">
        <h2 className="text-xl md:text-2xl font-semibold text-white glow">
          📈 Constantly Evolving:
        </h2>
        <p className="text-gray-200">
          I am committed to staying ahead of the curve. Expect regular updates and new features to keep your multimedia experience fresh and exciting.
        </p>
      </div>

      <div className="space-y-2">
        <h2 className="text-xl md:text-2xl font-semibold text-white glow">
          🌟 It's Free, It's Powerful, It's Convert.io:
        </h2>
        <p className="text-gray-200">
          Experience the freedom to convert images, audio, and video without boundaries. Elevate your multimedia projects with the unlimited potential of Convert.io.
        </p>
      </div>

      <p className="text-gray-200">
        Join the revolution of content creators, professionals, and enthusiasts who are transforming the way they work with multimedia. Get started today and let your creativity shine like never before!
      </p>

      <style jsx>{`
        .glow {
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.5);
        }
      `}</style>
    </div>
  );
}
