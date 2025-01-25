import React, { useState, useRef, useEffect } from "react"

const About = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const card = cardRef.current
    const box = card.getBoundingClientRect()
    const centerX = box.left + box.width / 2
    const centerY = box.top + box.height / 2
    const rotateY = -(e.clientX - centerX) / 20
    const rotateX = (e.clientY - centerY) / 20
    setRotation({ x: rotateX, y: rotateY })
  }

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 })
  }

  useEffect(() => {
    const card = cardRef.current
    if (card) {
      card.style.transform = `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
    }
  }, [rotation])

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4" style={{ backgroundImage: "url('/bg-img.png')" }}>
      <div
        ref={cardRef}
        className="max-w-4xl w-full bg-gradient-to-br from-purple-600 to-orange-500 p-0.5 rounded-xl overflow-hidden transition-all duration-200 ease-out cursor-pointer"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="bg-black rounded-xl p-8">
          <h2 className="text-4xl font-bold mb-8 text-center text-orange-500">About Tech-a-thon</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div>
                <h3 className="font-bold mb-2 text-xl text-purple-400">1. What is Techathon?</h3>
                <p className="text-gray-300">
                  Techathon is a dynamic hackathon designed to bring together innovative minds to solve real-world
                  challenges. It's a platform for tech enthusiasts, developers, and creators to showcase their skills
                  and create impactful solutions.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-2 text-xl text-purple-400">2. Who can participate in Techathon?</h3>
                <p className="text-gray-300">
                  Techathon is open to all! Whether you're a student, professional, or tech enthusiast, you're welcome
                  to participate individually or as part of a team.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-2 text-xl text-purple-400">3. What are the themes for Techathon?</h3>
                <p className="text-gray-300">Participants can explore diverse themes, such as:</p>
                <ul className="list-disc pl-5 mt-2 text-gray-300">
                  <li>Artificial Intelligence and Machine Learning</li>
                  <li>Blockchain and Web3</li>
                  <li>Internet of Things (IoT)</li>
                  <li>Sustainability and Green Tech</li>
                  <li>Open Innovation (Your own ideas!)</li>
                </ul>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="/abtimage.png"
                alt="Techathon Illustration"
                className="w-full max-w-md h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

