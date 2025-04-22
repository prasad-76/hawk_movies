import adImg from "/ad1.png";

export default function Ad() {
  return <div className="margin-block flex flex-col md:flex-row items-center justify-between p-8 h-80 mb-20 bg-center" style={{ backgroundImage: `url(${adImg})` }}>

    <div className="text-center md:text-left">
      <h2>Start your free trial today!</h2>
      <p className="max-w-[100ch] mt-4">This is a clear and concise call to action that encourages users to sign up for a free trial of StreamVibe.</p>
    </div>

    <button className="btn-red">Start Free Trial</button>
  </div>
}