export interface DevinetteItem {
    id: number
    number: number
    icon: string
    title: string
    text: string
}

export interface TeamData {
    teamName: string
    teamNumber: number
    riddles: DevinetteItem[]
}

export const teamsData: TeamData[] = [
    {
        teamName: "Équipe 1",
        teamNumber: 1,
        riddles: [
            {
                id: 1,
                number: 1,
                icon: "🌱",
                title: "Gestion du Trafic",
                text: "Je te fais gagner du temps sans klaxonner, je suis coordonné et bien programmé. je gère les routes comme un chef de gare."
            },
            {
                id: 2,
                number: 2,
                icon: "🌍",
                title: "Stationnement Intelligent",
                text: "Je permets aux habitants de trouver une place avec mon application le stress s'efface. Je suis rapide, pratique et souvent apprécié. Qui suis-je pour les voitures stationnées ?"
            },
            {
                id: 3,
                number: 3,
                icon: "♻️",
                title: "Énergie Solaire",
                text: "Je capte le soleil, non pour bronzer, mais pour éclairer et chauffer la ville.\nQui suis-je ?"
            }
        ]
    },
    {
        teamName: "Équipe 2",
        teamNumber: 2,
        riddles: [
            {
                id: 1,
                number: 1,
                icon: "🌱",
                title: "Gestion de l'Eau",
                text: "Je coule dans les tuyaux, je nourris la ville. Je suis précieuse et recyclée, jamais gaspillée.\nQui suis-je dans cette cité futée ?"
            },
            {
                id: 2,
                number: 2,
                icon: "🌍",
                title: "Collecte Intelligente",
                text: "Je me remplis sans me plaindre, je signale quand je déborde. Les camions viennent me vider grâce à mes capteurs.\nQue suis-je ?"
            },
            {
                id: 3,
                number: 3,
                icon: "♻️",
                title: "Climat Urbain",
                text: "Je mesure la température, l'humidité aussi. J'aide la ville à respirer et à mieux vivre. Qui suis-je, petit mais si utile ?"
            }
        ]
    },
    {
        teamName: "Équipe 3",
        teamNumber: 3,
        riddles: [
            {
                id: 1,
                number: 1,
                icon: "🌱",
                title: "Mobilité Douce",
                text: "Sur deux roues je roule, sans moteur je file. En libre-service, je suis disponible. Je réduis la pollution, que suis-je en ville ?"
            },
            {
                id: 2,
                number: 2,
                icon: "🌍",
                title: "Bâtiments Intelligents",
                text: "Je contrôle la lumière, le chauffage aussi. Je m'adapte aux habitants, j'économise l'énergie. Que suis-je, cette maison du futur ?"
            },
            {
                id: 3,
                number: 3,
                icon: "♻️",
                title: "Espaces Verts Connectés",
                text: "Je purifie l'air, j'embellis la cité. Mes capteurs surveillent ma santé. Je suis vert et connecté, qui suis-je ?"
            }
        ]
    },
    {
        teamName: "Équipe 4",
        teamNumber: 4,
        riddles: [
            {
                id: 1,
                number: 1,
                icon: "🌱",
                title: "Réseau 5G",
                text: "Invisible mais présent, je connecte tout. Téléphones, voitures, capteurs partout. Je suis rapide comme l'éclair, qui suis-je ?"
            },
            {
                id: 2,
                number: 2,
                icon: "🌍",
                title: "Sécurité Urbaine",
                text: "Je veille jour et nuit, j'observe sans juger. En cas de danger, j'alerte aussitôt. Qui suis-je, gardien électronique ?"
            },
            {
                id: 3,
                number: 3,
                icon: "♻️",
                title: "Smart Grid",
                text: "Je distribue l'électricité avec intelligence. Je m'adapte à la demande, j'évite les pannes. Je suis le réseau du futur, qui suis-je ?"
            }
        ]
    }
]

// Helper function to get data for a specific team
export const getTeamData = (teamNumber: number): TeamData | undefined => {
    return teamsData.find(team => team.teamNumber === teamNumber)
}

// Helper function to get all team names
export const getAllTeamNames = (): string[] => {
    return teamsData.map(team => team.teamName)
}
