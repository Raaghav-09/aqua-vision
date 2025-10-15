export default function FAQs() {
  return (
    <div className="p-4 md:p-6 text-[#e6f7ff] min-h-[calc(100vh-112px)]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-200 to-cyan-400 bg-clip-text text-transparent">
          Frequently Asked Questions
        </h1>
        
        <div className="space-y-6">
          <div className="border border-cyan-900/40 bg-[#002030]/50 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-3">What is AquaVision?</h2>
            <p className="text-cyan-300/70 leading-relaxed">
              AquaVision is a comprehensive platform designed to help you identify fish species, log your catches, 
              and explore fishing locations. Whether you're a professional angler or a hobbyist, AquaVision provides 
              the tools you need to enhance your fishing experience.
            </p>
          </div>

          <div className="border border-cyan-900/40 bg-[#002030]/50 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-3">How do I save a catch?</h2>
            <p className="text-cyan-300/70 leading-relaxed">
              Navigate to the Identify page, upload an image of your catch, and our system will analyze it. 
              You can then save the record with details like species, health status, coordinates, and timestamp. 
              All your catches will be available in the Catch Log.
            </p>
          </div>

          <div className="border border-cyan-900/40 bg-[#002030]/50 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-3">How does the fish identification work?</h2>
            <p className="text-cyan-300/70 leading-relaxed">
              Our identification system uses advanced image recognition technology to analyze fish images. 
              Simply upload a clear photo of the fish, and the system will attempt to identify the species 
              along with relevant information about habitat, size, and health indicators.
            </p>
          </div>

          <div className="border border-cyan-900/40 bg-[#002030]/50 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-3">Can I view my catches on a map?</h2>
            <p className="text-cyan-300/70 leading-relaxed">
              Yes! Each catch record includes GPS coordinates (if available). You can view individual catch 
              locations on an interactive map by clicking the location button in your Catch Log. This helps 
              you track where different species are found.
            </p>
          </div>

          <div className="border border-cyan-900/40 bg-[#002030]/50 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-3">Is my data secure?</h2>
            <p className="text-cyan-300/70 leading-relaxed">
              We take data security seriously. All your personal information and catch records are stored 
              securely and are only accessible to you when logged in. We never share your data with third 
              parties without your explicit consent.
            </p>
          </div>

          <div className="border border-cyan-900/40 bg-[#002030]/50 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-3">How can I share my catches with others?</h2>
            <p className="text-cyan-300/70 leading-relaxed">
              You can share your fishing experiences through our Blogs feature. Create blog posts about your 
              catches, share tips and techniques, and connect with other members of the fishing community. 
              (Note: This feature is currently under development)
            </p>
          </div>

          <div className="border border-cyan-900/40 bg-[#002030]/50 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-3">Do I need an account to use AquaVision?</h2>
            <p className="text-cyan-300/70 leading-relaxed">
              While you can browse some features without an account, creating one is recommended to save 
              your catches, create blogs, and access the full functionality of the platform. Signing up is 
              quick, free, and gives you access to all features.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

