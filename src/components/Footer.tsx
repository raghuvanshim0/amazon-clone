const Footer = () => {
  const footerSections = [
    {
      title: "Get to Know Us",
      links: ["About Amazon", "Careers", "Press Releases", "Amazon Science"]
    },
    {
      title: "Connect with Us",
      links: ["Facebook", "Twitter", "Instagram", "YouTube"]
    },
    {
      title: "Make Money with Us",
      links: ["Sell on Amazon", "Sell under Amazon Accelerator", "Protect and Build Your Brand", "Amazon Global Selling"]
    },
    {
      title: "Let Us Help You",
      links: ["COVID-19 and Amazon", "Your Account", "Returns Centre", "100% Purchase Protection"]
    }
  ]

  return (
    <footer className="bg-amazon-navy text-white">
      {/* Back to top */}
      <div className="bg-amazon-navy/80 text-center py-4 cursor-pointer hover:bg-amazon-navy/90 transition-colors">
        <span className="text-sm">Back to top</span>
      </div>

      {/* Main footer content */}
      <div className="bg-amazon-navy py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index}>
                <h3 className="font-bold text-white mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a 
                        href="#" 
                        className="text-gray-300 hover:text-white text-sm transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="bg-amazon-navy/90 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-8">
              <div className="flex items-center">
                <span className="text-2xl font-bold">amazon</span>
                <span className="text-sm">.in</span>
              </div>
              
              <div className="flex gap-6 text-sm">
                <a href="#" className="text-gray-300 hover:text-white transition-colors">English</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">🇮🇳 India</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-amazon-dark-gray text-center py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-gray-400">
            <div>
              <a href="#" className="hover:text-white transition-colors">Conditions of Use & Sale</a>
            </div>
            <div>
              <a href="#" className="hover:text-white transition-colors">Privacy Notice</a>
            </div>
            <div>
              <a href="#" className="hover:text-white transition-colors">Interest-Based Ads</a>
            </div>
          </div>
          <div className="mt-4 text-xs text-gray-400">
            © 1996-2024, Amazon.com, Inc. or its affiliates
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer