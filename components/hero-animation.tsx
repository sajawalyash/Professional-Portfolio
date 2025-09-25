"use client"

const HeroBackground = () => {
  return (
    <div className="absolute inset-0">
      {/* Modern programming workspace background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/images/header-bg.jpg")' }}
      ></div>

      {/* Professional gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>

      {/* Additional overlay for text readability */}
      <div className="absolute inset-0 bg-black/20"></div>
    </div>
  )
}

export default HeroBackground
