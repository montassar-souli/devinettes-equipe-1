import { useState } from 'react'

function App() {
  const cardData = [
    {
      id: 1,
      number: 1,
      icon: "🌱",
      title: "Développement Durable",
      text: "Je te fais gagner du temps sans klaxonner,Je suis coordonné et bien programmé. Je gère les routes comme un chef de gare."
    },
    {
      id: 2,
      number: 2,
      icon: "🌍",
      title: "Villes Intelligentes",
      text: "Je permets aux habitants de trouver une place,Avec mon application, le stress s’efface.Je suis rapide, pratique et souvent apprécié. Qui suis-je pour les voitures stationnées ?"
    },
    {
      id: 3,
      number: 3,
      icon: "♻️",
      title: "Innovation Verte",
      text: "Je capte le soleil, non pour bronzer, mais pour éclairer et chauffer la ville. Qui suis-je ?"
    }
  ]

  const [flippedCards, setFlippedCards] = useState<number[]>([])

  const handleCardFlip = (cardId: number, event: React.MouseEvent) => {
    event.preventDefault()
    event.stopPropagation()

    setFlippedCards(prev =>
      prev.includes(cardId)
        ? prev.filter(id => id !== cardId)
        : [...prev, cardId]
    )
  }

  return (
    <div className="min-h-screen relative overflow-hidden"
      style={{
        backgroundImage: `url('/images/ville_developpement_durable_1.jpg')`
      }}
    >

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-l from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-emerald-400/10 to-teal-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Team label - Top left */}
      <h2 className='absolute top-4 left-4 z-20 text-white text-xl sm:text-2xl font-bold bg-black/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20'>
        Équipe 1
      </h2>

      <div className="relative z-10 p-4 sm:p-6 lg:p-8">
        {/* Header */}
        <div className="max-w-7xl mx-auto text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-block p-1 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mb-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white px-8 py-4 bg-slate-900 rounded-full">
              Devinettes
            </h1>
          </div>
        </div>
        {/* Cards Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {cardData.map((card) => (
              <div
                key={card.id}
                className="group"
                style={{ perspective: '1000px' }}
              >
                <div
                  className="relative w-full h-72 sm:h-80 lg:h-96 transition-all duration-700 cursor-pointer transform hover:scale-105"
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: flippedCards.includes(card.id) ? 'rotateY(180deg)' : 'rotateY(0deg)'
                  }}
                  onClick={(event) => handleCardFlip(card.id, event)}
                >
                  {/* Front of the card */}
                  <div
                    className="absolute inset-0 w-full h-full rounded-2xl shadow-2xl overflow-hidden border border-white/10"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    {/* Gradient background with glassmorphism effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/90 via-teal-600/90 to-cyan-600/90"></div>
                    <div className="absolute inset-0 backdrop-blur-sm bg-white/5"></div>

                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>

                    <div className="relative z-10 flex flex-col items-center justify-center h-full text-white p-6">
                      <div className="text-4xl sm:text-5xl lg:text-6xl mb-4">
                        {card.icon}
                      </div>
                      <div className="text-5xl sm:text-6xl lg:text-7xl font-black mb-4 bg-gradient-to-br from-white to-cyan-200 bg-clip-text text-transparent">
                        {card.number}
                      </div>
                      <div className="text-lg sm:text-xl font-bold text-center mb-2">
                        Cliquez pour révéler
                      </div>
                      <div className="text-sm sm:text-base opacity-75 animate-bounce">
                        Touchez la carte ✨
                      </div>
                    </div>
                  </div>

                  {/* Back of the card */}
                  <div
                    className="absolute inset-0 w-full h-full rounded-2xl shadow-2xl border border-white/10"
                    style={{
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)'
                    }}
                  >
                    <div className="w-full h-full bg-gradient-to-br from-indigo-600 via-purple-700 to-pink-700 p-6 sm:p-8 flex flex-col justify-center items-center text-white rounded-2xl relative overflow-hidden">
                      {/* Background pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-4 left-4 w-32 h-32 border border-white/20 rounded-full"></div>
                        <div className="absolute bottom-4 right-4 w-24 h-24 border border-white/20 rounded-full"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-white/10 rounded-full"></div>
                      </div>

                      <div className="relative z-10 text-center">
                        <div className="text-3xl sm:text-4xl mb-4">
                          {card.icon}
                        </div>
                        <div className="text-sm sm:text-base lg:text-lg leading-relaxed text-slate-100 mb-4 sm:mb-6">
                          {card.text}
                        </div>
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm">
                          <span className="text-xs sm:text-sm font-medium">Cliquez pour retourner</span>
                          <span className="ml-2">🔄</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="max-w-7xl mx-auto text-center mt-12 sm:mt-16 lg:mt-20">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
            <span className="text-slate-300 text-sm sm:text-base">
              🌱 Ensemble pour un avenir durable
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App