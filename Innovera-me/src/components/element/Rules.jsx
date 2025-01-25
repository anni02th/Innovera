import React, { useState, useRef, useEffect } from "react"

const RuleCard = ({ title, content }) => {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef(null)

  useEffect(() => {
    if (cardRef.current) {
      cardRef.current.style.transform = isHovered
        ? "translateY(-10px) rotateX(5deg) rotateY(5deg)"
        : "translateY(0) rotateX(0) rotateY(0)"
    }
  }, [isHovered])

  return (
    <div
      ref={cardRef}
      className="bg-gradient-to-br from-purple-600 to-orange-500 p-0.5 rounded-xl overflow-hidden transition-all duration-300 ease-out cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="bg-black rounded-xl p-6 h-full">
        <h3 className="text-xl font-bold mb-4 text-purple-400">{title}</h3>
        <p className="text-gray-300">{content}</p>
      </div>
    </div>
  )
}

const Rules = () => {
  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-orange-500">RULES AND REGULATIONS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <RuleCard
            title="Selection Process"
            content="The top 25 participants from across India will be selected and invited to join an 8-hour hackathon at KK Wagh College. This rigorous selection ensures only the most innovative minds make it to the final event."
          />
          <RuleCard
            title="National Platform"
            content="This national-level hackathon serves as a prestigious platform where the brightest minds come together to showcase their skills and shine among the best in the country."
          />
          <RuleCard
            title="Time Constraint"
            content="Participants will have 8 hours to develop their solutions. This time pressure is designed to simulate real-world scenarios and push creativity to its limits."
          />
          <RuleCard
            title="Team Composition"
            content="Teams can consist of 1-4 members. Diversity in skills and backgrounds is encouraged to foster innovative solutions."
          />
          <RuleCard
            title="Judging Criteria"
            content="Projects will be judged on innovation, feasibility, technical complexity, and potential impact. A panel of industry experts will evaluate each submission."
          />
          <RuleCard
            title="Code of Conduct"
            content="All participants are expected to adhere to a strict code of conduct, promoting respect, inclusivity, and ethical behavior throughout the event."
          />
        </div>
      </div>
    </div>
  )
}

export default Rules

